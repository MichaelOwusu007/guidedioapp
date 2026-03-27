"use client";

import { useState } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import AuthLayout from "@/components/auth/AuthLayout";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const ResetCode = () => {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 6) {
      toast.error("Please enter a 6-digit code.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Code verified! You can now reset your password.");
    }, 1500);
  };

  return (
    <AuthLayout title="Verify Code" subtitle="We've sent a 6‑digit code to your email. Enter it below.">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center">
          <InputOTP maxLength={6} value={code} onChange={setCode}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Button type="submit" disabled={loading} className="w-full bg-lime text-navy hover:bg-lime-dark font-semibold h-11">
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Verify Code"}
        </Button>
      </form>
      <p className="text-center text-sm text-muted-foreground mt-6">
        Didn't receive the code?{" "}
        <button className="text-lime-dark font-medium hover:underline" onClick={() => toast.success("Code resent!")}>
          Resend
        </button>
      </p>
      <p className="text-center text-sm text-muted-foreground mt-2">
        <Link href="/auth/signin" className="text-lime-dark font-medium hover:underline">Back to Sign In</Link>
      </p>
    </AuthLayout>
  );
};

export default ResetCode;
