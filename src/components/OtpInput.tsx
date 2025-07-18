import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import React, { useState, useEffect } from "react";
import FormSection from "@/components/FormSection";

interface OtpInputProps {
  otp: string;
  setOtp: (otp: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onResendOtp?: () => void;
  loading?: boolean;
  resendLoading?: boolean;
  label?: string;
  buttonText?: string;
  resendButtonText?: string;
}

const OtpInput: React.FC<OtpInputProps> = ({
  otp,
  setOtp,
  onSubmit,
  onResendOtp,
  loading = false,
  resendLoading = false,
  label = "Enter 6-digit OTP",
  buttonText = "Create Account",
  resendButtonText = "Resend OTP",
}) => {
  const [countdown, setCountdown] = useState(30);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleResendOtp = () => {
    if (countdown === 0 && onResendOtp) {
      onResendOtp();
      setCountdown(30);
    }
  };

  const isResendDisabled = countdown > 0 || resendLoading;

  const handleSubmit = (e: React.FormEvent) => {
    setIsVerifying(true);
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl w-full max-w-sm space-y-6">
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
        disabled={loading || isVerifying}
      >
        {loading || isVerifying ? (
          <>
            <Spinner size="sm" className="text-white" />
            Creating Account...
          </>
        ) : (
          buttonText
        )}
      </Button>

      {onResendOtp && (
        <div className="text-center">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleResendOtp}
            disabled={isResendDisabled}
            className="text-gray-600 hover:text-gray-800 disabled:text-gray-400"
          >
            {resendLoading ? (
              <>
                <Spinner size="sm" className="text-gray-600" />
                Sending...
              </>
            ) : countdown > 0 ? (
              `Resend in ${countdown}s`
            ) : (
              resendButtonText
            )}
          </Button>
        </div>
      )}
    </form>
  );
};

export default OtpInput; 