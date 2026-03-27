import { ReactNode } from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
import Image from "next/image";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center  justify-center relative overflow-hidden p-4">
      {/* Background */}
      <div className="absolute inset-0">
        <Image  src="/assets/auth-bg.jpg"
                              alt="AuthImage"
                             className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="p-8 rounded-2xl bg-primary-foreground/95 backdrop-blur-xl border border-border shadow-2xl">
          <Link href="/" className="flex items-center gap-2 justify-center mb-6">
            <div className="w-8 h-8 rounded-lg bg-lime flex items-center justify-center">
              <span className="text-navy font-bold text-sm">G</span>
            </div>
            <span className="text-xl bricolage font-bold text-foreground">Guidedio</span>
          </Link>

          <div className="text-center mb-6">
            <h1 className="text-2xl bricolage font-bold text-foreground">{title}</h1>
            <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
          </div>

          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
