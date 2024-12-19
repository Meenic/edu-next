import { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Login | EduNext",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center">
      <LoginForm />
    </div>
  );
}
