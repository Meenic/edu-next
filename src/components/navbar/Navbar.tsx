"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { Session } from "next-auth";
import UserDropdown from "./UserDropdown";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

interface Props {
  session: Session | null;
}

export default function Navbar({ session }: Props) {
  const [sliderStyle, setSliderStyle] = useState<React.CSSProperties>({
    opacity: 0,
  });
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSliderStyle = () => {
      const activeLink = navRef.current?.querySelector(`a[href="${pathname}"]`);
      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink as HTMLElement;
        setSliderStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
          opacity: 1,
        });
      } else {
        setSliderStyle({ opacity: 0 });
      }
    };

    updateSliderStyle();
    window.addEventListener("resize", updateSliderStyle);
    return () => window.removeEventListener("resize", updateSliderStyle);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-40 w-full bg-background">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold">
              EduNext
            </Link>
            <div
              className="hidden md:flex items-center space-x-1 relative"
              ref={navRef}
            >
              <div
                className="absolute h-[calc(100%-0.5rem)] top-1 bg-primary rounded-full transition-all duration-300 ease-in-out opacity-0"
                style={sliderStyle}
              />
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  isActive={pathname === item.href}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <Button asChild className="hidden md:inline-flex">
                <Link href="/auth/login">Sign In</Link>
              </Button>
            )}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 text-sm font-medium rounded-full transition-colors relative z-10",
        isActive ? "text-primary-foreground" : "text-foreground"
      )}
    >
      {children}
    </Link>
  );
}
