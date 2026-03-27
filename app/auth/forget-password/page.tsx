"use client";


import { useState } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import AuthLayout from "@/components/auth/AuthLayout";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Reset code sent to your email!");
    }, 1500);
  };

  return (
    <AuthLayout title="Forgot Password" subtitle="Enter your email and we'll send you a code to reset your password.">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
          <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <Button type="submit" disabled={loading} className="w-full bg-lime text-navy hover:bg-lime-dark font-semibold h-11">
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Reset Code"}
        </Button>
      </form>
      <p className="text-center text-sm text-muted-foreground mt-6">
        <Link href="/auth/signin" className="text-lime-dark font-medium hover:underline">Back to Sign In</Link>
      </p>
    </AuthLayout>
  );
};

export default ForgotPassword;
