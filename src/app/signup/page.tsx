"use client";

import { useState, useEffect } from "react";
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
import { Eye, EyeOff, Mail, Lock, User, Briefcase, ArrowLeft, CheckCircle } from "lucide-react";
import OtpInput from "@/components/OtpInput";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebaseAuth";

const backgroundImages = [
  "/attached_assets/Salon_img.png",
  "/attached_assets/GlameBeauty-4.png",
  "/attached_assets/business.webp",
  "/attached_assets/Salon_Section_Slide_1.png",
  "/attached_assets/hero-img-1.png"
];

const features = [
  "Advanced appointment scheduling",
  "Client management system",
  "Inventory tracking",
  "Revenue analytics",
  "Staff management",
  "Marketing tools"
];

export default function Signup() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState("");
  const [signupFormData, setSignupFormData] = useState<SignupData | null>(null);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();

  // Auto-change images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
    onSuccess: (data: { success: boolean; token?: string; user?: any; message?: string; generatedDomain?: string }) => {
      if (data.success && data.token && data.user) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        toast({
          title: "Welcome to Glame!",
          description: "Your account has been created successfully.",
        });
        if (data.generatedDomain && data.token) {
          window.location.href = 'https://' + data.generatedDomain + '/login?token=' + data.token;
        } else {
          window.location.href = "/dashboard";
        }
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
          description: result.message || result.error || "Unable to send OTP. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send OTP. Please try again.",
        variant: "destructive",
      });
    }
  }

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP.",
        variant: "destructive",
      });
      return;
    }
    if (signupFormData) {
      try {
        console.log("Signup form data:", signupFormData);
        console.log("OTP entered:", otp);

        const payload = {
          name: signupFormData.name,
          email: signupFormData.email,
          password: signupFormData.password,
          accountType: signupFormData.businessType,
          otp: otp,
        };
        const response = await fetch('/api/auth/account/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        console.log("Signup API response aarha h :", data);
        
        if (response.ok && data.success) {
          toast({
            title: "Account Created",
            description: "Your account has been created successfully.",
          });
          if (data.generatedDomain && data.token) {
            window.location.href = 'https://' + data.generatedDomain + '/login?token=' + data.token;
          } else {
            window.location.href = "/";
          }
        } else {
          // Show server error message
          toast({
            title: "Signup Failed",
            description: data.message || data.error || "Unable to create account. Please try again.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Error during signup:', error);
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="signup-page h-screen w-screen flex overflow-hidden">
      {/* Left Section - Hero Images */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Images with Transition */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Beauty service ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Image Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {backgroundImages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Section - Signup Form */}
      <div className="w-full lg:w-1/2 bg-white h-screen overflow-y-auto">
        <div className="px-8 pb-12">
          <div className="w-full max-w-md mx-auto">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-6 mt-4">
              <Link href="/">
                <img src="/logo.png" alt="Glame Logo" className="w-32 h-auto mx-auto" />
              </Link>
            </div>

            {/* Header */}
            <div className="text-center mb-6 mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {showOtpInput ? 'Verify Your Email' : 'Create Your Account'}
              </h2>
              <p className="text-gray-600">
                {showOtpInput 
                  ? 'Enter the verification code sent to your email'
                  : 'Join the beauty business revolution'
                }
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                {!showOtpInput ? (
                  <>
                    {/* Social Login */}
                    <Button
                      variant="outline"
                      className="w-full h-12 border-gray-300 hover:bg-gray-50 mb-6"
                      onClick={handleGoogleLogin}
                      disabled={googleLoading}
                    >
                      <img src="/google.png" alt="Google" className="mr-3 h-5 w-5" />
                      {googleLoading ? "Connecting..." : "Continue with Google"}
                    </Button>

                    <div className="relative mb-6">
                      <div className="absolute inset-0 flex items-center">
                        <Separator />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-4 text-gray-500">or</span>
                      </div>
                    </div>

                    {/* Signup Form */}
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(sendOtpToEmail)} className="space-y-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">Full Name</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                  <Input 
                                    placeholder="Enter your full name" 
                                    className="pl-10 h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                                    {...field} 
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">Email Address</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                  <Input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="pl-10 h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                                    {...field} 
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="businessType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">Business Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value ?? ""}>
                                <FormControl>
                                  <div className="relative">
                                    <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                                    <SelectTrigger className="pl-10 h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500">
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
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">Password</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                  <Input 
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a secure password" 
                                    className="pl-10 pr-10 h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
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
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="confirmPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">Confirm Password</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                  <Input 
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm your password" 
                                    className="pl-10 pr-10 h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
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
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex items-start space-x-3">
                          <input
                            id="terms"
                            type="checkbox"
                            className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            required
                          />
                          <label htmlFor="terms" className="text-sm text-gray-600 leading-5">
                            I agree to the{" "}
                            <span className="text-purple-600 hover:text-purple-500 cursor-pointer font-medium">
                              Terms of Service
                            </span>{" "}
                            and{" "}
                            <span className="text-purple-600 hover:text-purple-500 cursor-pointer font-medium">
                              Privacy Policy
                            </span>
                          </label>
                        </div>

                        <Button
                          type="submit"
                          className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                          disabled={signupMutation.isPending}
                        >
                          {signupMutation.isPending ? "Creating Account..." : "Create Account"}
                        </Button>

                        <p className="text-center text-sm text-gray-500">
                          14-day free trial • No credit card required
                        </p>
                      </form>
                    </Form>
                  </>
                ) : (
                  /* OTP Section */
                  <div className="space-y-6">
                    {signupFormData && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-semibold text-gray-800">Account Details</h3>
                          <button
                            className="text-purple-600 text-sm font-medium hover:text-purple-500"
                            onClick={() => {
                              setShowOtpInput(false);
                              if (signupFormData) {
                                form.reset(signupFormData);
                              }
                            }}
                          >
                            Edit
                          </button>
                        </div>
                        <div className="space-y-1 text-sm text-gray-700">
                          <div><span className="font-medium">Name:</span> {signupFormData.name}</div>
                          <div><span className="font-medium">Email:</span> {signupFormData.email}</div>
                          <div><span className="font-medium">Business:</span> {signupFormData.businessType?.replace(/_/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase())}</div>
                        </div>
                      </div>
                    )}

                    <OtpInput
                      otp={otp}
                      setOtp={setOtp}
                      onSubmit={handleOtpSubmit}
                      loading={signupMutation.isPending}
                      label="Enter 6-digit OTP"
                      buttonText="Verify & Create Account"
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Footer Links */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-purple-600 hover:text-purple-500 font-medium">
                  Sign in
                </Link>
              </p>
            </div>

            <div className="text-center mt-3">
              <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 text-sm">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}