import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import FormSection from "@/components/FormSection";

interface OtpInputProps {
  otp: string;
  setOtp: (otp: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading?: boolean;
  label?: string;
  buttonText?: string;
}

const OtpInput: React.FC<OtpInputProps> = ({
  otp,
  setOtp,
  onSubmit,
  loading = false,
  label = "Enter 6-digit OTP",
  buttonText = "Create Account",
}) => {
  return (
    <form onSubmit={onSubmit} className="bg-white rounded-xl shadow-xl p-8 w-full max-w-sm space-y-6">
      <div>
        <label className="block text-lg font-bold text-gray-900 mb-2 text-center">{label}</label>
        <Input
          type="text"
          maxLength={6}
          pattern="[0-9]{6}"
          inputMode="numeric"
          value={otp}
          onChange={e => setOtp(e.target.value.replace(/\D/g, ""))}
          className="h-12 text-center tracking-widest text-lg font-mono"
          placeholder="------"
          required
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full gradient-primary text-white hover:shadow-lg transition-all h-12"
        disabled={loading}
      >
        {loading ? "Creating Account..." : buttonText}
      </Button>
    </form>
  );
};

export default OtpInput; 