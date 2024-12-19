"use client";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function Social() {
  const githubClick = () => {
    signIn("github", {
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex flex-col items-center w-full gap-y-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={githubClick}
      >
        <FaGithub className="h-5 w-5 mr-2" />
        Continue with GitHub
      </Button>
    </div>
  );
}
