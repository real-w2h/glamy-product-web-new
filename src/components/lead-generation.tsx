"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@/shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Shield, Star, Clock } from "lucide-react";
import GradientScrollText from "@/components/GradientScrollText";

export default function LeadGeneration() {
  const { toast } = useToast();

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessType: "",
    },
  });

  const createLeadMutation = useMutation({
    mutationFn: async (data: InsertLead) => {
      const response = await apiRequest("POST", "/api/leads", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your interest! We'll contact you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertLead) => {
    createLeadMutation.mutate(data);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white">
            <GradientScrollText 
              as="h2" 
              className="text-3xl lg:text-4xl font-bold mb-6"
              variant="apple"
              glow={true}
            >
              Ready to Transform Your Beauty Business?
            </GradientScrollText>

            <p className="text-xl text-gray-300 mb-8">
              Join thousands of beauty professionals who have already streamlined their operations and boosted their revenue with{" "}
              <GradientScrollText variant="purple" glow={true} className="font-semibold">
                Glame
              </GradientScrollText>
              . See how our platform can work for your specific needs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-3" />
                <span className="text-gray-300">Trusted by 10,000+ beauty professionals</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-300">Setup in under 10 minutes</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">Bank-level security</span>
              </div>
            </div>

            <Button size="lg" className="gradient-primary text-white hover:shadow-xl transition-all duration-300">
              Book a Free Demo
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right Side - Lead Generation Form */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Enter your phone number" {...field} />
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
                      <FormLabel>Business Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your business type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="salon">Salon</SelectItem>
                          <SelectItem value="makeup_artist">Makeup Artist</SelectItem>
                          <SelectItem value="dermatologist">Dermatologist</SelectItem>
                          <SelectItem value="spa">Spa</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary text-white hover:shadow-xl transition-all duration-300"
                  disabled={createLeadMutation.isPending}
                >
                  {createLeadMutation.isPending ? "Submitting..." : "Start Free Trial"}
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  No credit card required. 14-day free trial.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
