"use client";

import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/nutrichef-ai-high-resolution-logo-transparent.png"
            alt="Nutrichef Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#why-nutrichef"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Why Nutrichef
          </a>
          <a
            href="#waitlist"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Join Waitlist
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a
            href="#waitlist"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </header>
  );
}
