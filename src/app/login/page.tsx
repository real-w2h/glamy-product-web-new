"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginData } from "@/shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebaseAuth";
import Image from "next/image";

interface LoginResponse {
  success: boolean;
  token?: string;
  user?: Record<string, unknown>;
  message?: string;
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();

  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (data: LoginData) => {
      const response = await apiRequest("POST", "/api/auth/login", data);
      return response.json();
    },
    onSuccess: (data: LoginResponse) => {
      if (data.success && data.token && data.user) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in.",
        });
        // Redirect to dashboard or home
        window.location.href = "/dashboard";
      } else {
        toast({
          title: "Login Failed",
          description: data.message || "Invalid credentials",
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

 
  const onSubmit = (data: LoginData) => {
    loginMutation.mutate(data);
  };

  async function handleGoogleLogin() {
    setGoogleLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account"
      });
      const res = await signInWithPopup(auth, provider);
      if (res.user.email) {
        // You can use the token if needed later
        toast({
          title: "Google Login Successful",
          description: `Welcome, ${res.user.email}`,
        });
        // Redirect or further logic here
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-5">
          <Link href="/">
          <div className="flex items-center justify-center">
              <div className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={160} height={60} className="rounded-lg object-cover" />
            </div>
              </div>
          </Link>
          <p className="text-gray-600">Welcome back to your beauty business</p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Social Login Buttons */}
            <div className="">
              <Button
                variant="outline"
                className="w-full h-12 border-gray-300 hover:bg-gray-50"
                onClick={handleGoogleLogin}
                disabled={googleLoading}
              >
              <Image src="/google.png" alt="Google" width={24} height={24} className="mr-3" />
                {googleLoading ? "Connecting..." : "Continue with Google"}
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-14 text-gray-500">Or continue with email</span>
              </div>
            </div>

            {/* Email/Password Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password" 
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      id="remember"
                      type="checkbox"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <Link href="/forgot-password">
                    <span className="text-sm text-primary hover:underline cursor-pointer">
                      Forgot password?
                    </span>
                  </Link>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all h-12 font-semibold"
                  disabled={loginMutation.isPending}
                >
                  {loginMutation.isPending ? "Signing In..." : "Sign In"}
                </Button>
              </form>
            </Form>

            <div className="text-center">
              <span className="text-gray-600">Don&apos;t have an account? </span>
              <Link href="/signup">
                <span className="text-primary hover:underline font-medium cursor-pointer">
                  Sign up
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
  );
}