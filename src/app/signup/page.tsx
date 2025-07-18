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
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, User, Briefcase, ArrowLeft, CheckCircle, ChevronDown } from "lucide-react";
import OtpInput from "@/components/OtpInput";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebaseAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

const businessTypes = [
  { value: "salon", label: "Salon" },
  { value: "makeup_artist", label: "Makeup Artist" },
  { value: "dermatologist", label: "Dermatologist" },
  { value: "spa", label: "Spa" },
  { value: "barber_shop", label: "Barber Shop" },
  { value: "nail_salon", label: "Nail Salon" },
  { value: "other", label: "Other" },
];

interface SignupResponse {
  success: boolean;
  token?: string;
  user?: any;
  generatedDomain?: string;
  message?: string;
}

export default function Signup() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState("");
  const [signupFormData, setSignupFormData] = useState<SignupData | null>(null);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
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



  async function handleGoogleLogin() {
    setGoogleLoading(true);
    setFormLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account"
      });
      const res = await signInWithPopup(auth, provider);
      console.log("res", res);
      
      if (res.user.email) {
        // Call Google signup API
        const token = await res.user.getIdToken();
        const signupData = {
          token: token,
          email: res.user.email,
          name: res.user.displayName || res.user.email.split('@')[0],
          accountType: "Salon"
        };

        const signupResponse = await fetch('/api/auth/account/signup/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(signupData),
        });

        const signupResult = await signupResponse.json();
        console.log("Google signup response:", signupResult);

        if (signupResponse.ok && signupResult.success) {
          toast({
            title: "Account Created Successfully",
            description: `Welcome, ${res.user.email}`,
          });
          if (signupResult.generatedDomain && signupResult.token) {
            window.location.href = 'https://' + signupResult.generatedDomain + '/login?token=' + signupResult.token;
          } else {
            router.push("/");
          }
        } else {
          toast({
            title: "Signup Failed",
            description: signupResult.message || signupResult.error || "Unable to create account",
            variant: "destructive",
          });
        }
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
    setFormLoading(false);
  }

  async function sendOtpToEmail(data: SignupData) {
    setSendingOtp(true);
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
    } finally {
      setSendingOtp(false);
    }
  }

  const handleResendOtp = async () => {
    if (!signupFormData) return;
    
    setResendLoading(true);
    try {
      const response = await fetch(`/api/auth/account/signup/otp?email=${signupFormData.email}`, {
        method: 'GET',
      });
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "OTP Resent",
          description: "A new OTP has been sent to your email.",
        });
      } else {
        toast({
          title: "OTP Request Failed",
          description: result.message || result.error || "Unable to resend OTP. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error resending OTP:', error);
      toast({
        title: "Error",
        description: "Failed to resend OTP. Please try again.",
        variant: "destructive",
      });
    }
    setResendLoading(false);
  };

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
        
        if (response.ok) {
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
      <div className="w-full lg:w-1/2 bg-white h-screen overflow-y-auto relative">
        {formLoading && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
              <p className="text-gray-600 font-medium">Creating your account...</p>
            </div>
          </div>
        )}
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
                                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
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
                                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
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
                              <FormControl>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button
                                      variant="outline"
                                      className="w-full h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500 justify-between pl-3 pr-3 hover:bg-gray-50 text-left"
                                      type="button"
                                    >
                                      <div className="flex items-center">
                                        <Briefcase className="h-4 w-4 text-gray-400 mr-3" />
                                        <span className={field.value ? "text-gray-900" : "text-gray-500"}>
                                          {field.value 
                                            ? businessTypes.find(type => type.value === field.value)?.label 
                                            : "Select your business type"
                                          }
                                        </span>
                                      </div>
                                      <ChevronDown className="h-4 w-4 text-gray-400" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent 
                                    className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[200px] max-h-[300px] overflow-y-auto bg-white border border-gray-200 shadow-lg rounded-md"
                                    align="start"
                                    sideOffset={4}
                                    style={{ width: '100%' }}
                                  >
                                    {businessTypes.map((type) => (
                                      <DropdownMenuItem
                                        key={type.value}
                                        onClick={() => field.onChange(type.value)}
                                        className="cursor-pointer hover:bg-purple-50 focus:bg-purple-50 px-3 py-2 text-sm"
                                      >
                                        {type.label}
                                      </DropdownMenuItem>
                                    ))}
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </FormControl>
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
                                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                  <Input 
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a secure password" 
                                    className="pl-10 pr-10 h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                                    {...field} 
                                  />
                                  <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
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
                                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                  <Input 
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm your password" 
                                    className="pl-10 pr-10 h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                                    {...field} 
                                  />
                                  <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
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
                            className="mt-0.5 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            required
                          />
                          <label htmlFor="terms" className="text-sm text-gray-600 leading-5">
                            I agree to the{" "}
                            <Link href="/terms-of-service" className="text-purple-600 hover:text-purple-500 font-medium">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy-policy" className="text-purple-600 hover:text-purple-500 font-medium">
                              Privacy Policy
                            </Link>
                          </label>
                        </div>

                        <Button
                          type="submit"
                          className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                          disabled={sendingOtp}
                        >
                          {sendingOtp ? "Sending OTP..." : "Send OTP"}
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
                      <div className="rounded-lg p-4">
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
                      onResendOtp={handleResendOtp}
                      loading={false}
                      resendLoading={resendLoading}
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