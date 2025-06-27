"use client";

import { Button } from "@/components/ui/button";
import { Rocket, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="py-20 gradient-primary ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Scale Your Beauty Business?
        </motion.h2>
        <motion.p 
          className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join thousands of beauty professionals who are already growing their business with Glame. Start your free trial today!
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg"
            className="bg-white text-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Start with Glame Today
            <Rocket className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors border-white/30"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Sales: (555) 123-4567
          </Button>
        </motion.div>

        <motion.div 
          className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 inline-block border border-white/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white font-semibold">
            <Clock className="inline mr-2 h-4 w-4" />
            No setup fees • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
