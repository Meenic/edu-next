import { Metadata } from "next";
import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Register | EduNext",
  description: "Create your account",
};

export default function RegisterPage() {
  return (
    <div className="flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center">
      <RegisterForm />
    </div>
  );
}
