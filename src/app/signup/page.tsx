"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupData } from "@/shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, User, Phone, Briefcase } from "lucide-react";
import OtpInput from "@/components/OtpInput";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebaseAuth";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState("");
  const [signupFormData, setSignupFormData] = useState<SignupData | null>(null);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();

  const form = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessType: "",
      password: "",
      confirmPassword: "",
    },
  });

  const signupMutation = useMutation({
    mutationFn: async (data: SignupData) => {
      const response = await apiRequest("POST", "/api/auth/signup", data);
      return response.json();
    },
    onSuccess: (data: { success: boolean; token?: string; user?: any; message?: string }) => {
      if (data.success && data.token && data.user) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        toast({
          title: "Welcome to Glame!",
          description: "Your account has been created successfully.",
        });
        // Redirect to dashboard
        window.location.href = "/dashboard";
      } else {
        toast({
          title: "Signup Failed",
          description: data.message || "Unable to create account",
          variant: "destructive",
        });
      }
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  

  async function handleGoogleLogin() {
    setGoogleLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account"
      });
      const res = await signInWithPopup(auth, provider);
      if (res.user.email) {
        const token = await res.user.getIdToken();
        toast({
          title: "Google Login Successful",
          description: `Welcome, ${res.user.email}`,
        });
        router.push("/");
      } else {
        toast({
          title: "Login Failed",
          description: "Error while logging in with Google",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Google Login Error",
        description: "Unexpectedly closing Google popup or other error.",
        variant: "destructive",
      });
      console.log("Unexpectedly closing google popup causes this error", error);
    }
    setGoogleLoading(false);
  }

  

  async function sendOtpToEmail(data: SignupData) {
    try {
      const response = await fetch(`/api/auth/account/signup/otp?email=${data.email}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log('OTP sent response:', result);
      if (result.success) {
        setSignupFormData(data);
        setShowOtpInput(true);
        toast({
          title: "OTP Sent",
          description: "Please enter the 6-digit OTP sent to your email.",
        });
      } else {
        toast({
          title: "OTP Request Failed",
          description: result.message || "Unable to send OTP. Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to send OTP. Please try again.",
        variant: "destructive",
      });
    }
  }
  

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP.",
        variant: "destructive",
      });
      return;
    }
    // Combine OTP with signupFormData and submit
    if (signupFormData) {
      signupMutation.mutate({ ...signupFormData, otp } as SignupData & { otp: string });
    }
  };

  return (
    showOtpInput ? (
              <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 justify-center p-4">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-full max-w-sm mb-6">
            {signupFormData && (
              <div className="bg-white rounded-lg shadow p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-semibold text-gray-800">Your Details</div>
                  <button
                    className="text-primary text-sm underline font-medium"
                    onClick={e => {
                      e.preventDefault();
                      setShowOtpInput(false);
                      if (signupFormData) {
                        form.reset(signupFormData);
                      }
                    }}
                  >
                    Edit
                  </button>
                </div>
                <div className="text-sm text-gray-700 space-y-1">
                  <div><span className="font-medium">Name:</span> {signupFormData.name}</div>
                  <div><span className="font-medium">Email:</span> {signupFormData.email}</div>
                  {signupFormData.phone && <div><span className="font-medium">Phone:</span> {signupFormData.phone}</div>}
                  {signupFormData.businessType && <div><span className="font-medium">Business Type:</span> {signupFormData.businessType.replace(/_/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase())}</div>}
                </div>
              </div>
            )}
          </div>
          <OtpInput
            otp={otp}
            setOtp={setOtp}
            onSubmit={handleOtpSubmit}
            loading={signupMutation.isPending}
            label="Enter 6-digit OTP"
            buttonText="Create Account"
          />
        </div>
      </div>
    ) : (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
              <img src="/logo.png" alt="Logo" className="w-40 h-15 rounded-lg object-cover" />
            </div>
              </div>
            </Link>
            <p className="text-gray-600">Start growing your beauty business today</p>
          </div>
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
              <CardDescription className="text-center">
                Join thousands of beauty professionals using Glame
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Social Signup Buttons */}
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full h-12 border-gray-300 hover:bg-gray-50"
                  onClick={handleGoogleLogin}
                  disabled={googleLoading}
                >
                  <img src="/google.png" alt="Logo" className="mr-3 h-6 w-6 text-red-500" />

                  {googleLoading ? "Connecting..." : "Continue with Google"}
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Or continue with email</span>
                </div>
              </div>
              {/* Signup Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(sendOtpToEmail)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input 
                              placeholder="Enter your full name" 
                              className="pl-10 h-12"
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input 
                              type="email" 
                              placeholder="Enter your email" 
                              className="pl-10 h-12"
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value ?? ""}>
                          <FormControl>
                            <div className="relative">
                              <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                              <SelectTrigger className="pl-10 h-12">
                                <SelectValue placeholder="Select your business type" />
                              </SelectTrigger>
                            </div>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="salon">Salon</SelectItem>
                            <SelectItem value="makeup_artist">Makeup Artist</SelectItem>
                            <SelectItem value="dermatologist">Dermatologist</SelectItem>
                            <SelectItem value="spa">Spa</SelectItem>
                            <SelectItem value="barber_shop">Barber Shop</SelectItem>
                            <SelectItem value="nail_salon">Nail Salon</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input 
                              type={showPassword ? "text" : "password"}
                              placeholder="Create a password" 
                              className="pl-10 pr-10 h-12"
                              {...field} 
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input 
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="Confirm your password" 
                              className="pl-10 pr-10 h-12"
                              {...field} 
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <div className="flex items-start space-x-2">
                    <input
                      id="terms"
                      type="checkbox"
                      className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{" "}
                      <span className="text-primary hover:underline cursor-pointer">Terms of Service</span>{" "}
                      and{" "}
                      <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span>
                    </label>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all h-12 font-semibold"
                    disabled={signupMutation.isPending}
                  >
                    {signupMutation.isPending ? "Creating Account..." : "Request OTP"}
                  </Button>
                  <p className="text-xs text-gray-600 text-center">
                    Start your 14-day free trial • No credit card required
                  </p>
                </form>
              </Form>
              <div className="text-center">
                <span className="text-gray-600">Already have an account? </span>
                <Link href="/login">
                  <span className="text-primary hover:underline font-medium cursor-pointer">
                    Sign in
                  </span>
                </Link>
              </div>
            </CardContent>
          </Card>
          <div className="text-center mt-6">
            <Link href="/">
              <span className="text-gray-500 hover:text-gray-700 cursor-pointer">
                ← Back to Home
              </span>
            </Link>
          </div>
        </div>
      </div>
    )
  );
}