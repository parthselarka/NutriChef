"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { APP_STORE_URL } from "../lib/links";

const NAV_LINKS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  // Native <details> keeps the mobile menu usable without JavaScript;
  // this handler just closes it after a link is tapped.
  const closeMenu = (e) => {
    const details = e.currentTarget.closest("details");
    if (details) details.removeAttribute("open");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-20 focus:z-50 focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 items-center" aria-label="NutriChef home">
          <Image
            src="/logos/nutrichef-ai-high-resolution-logo-transparent.png"
            alt="NutriChef logo"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <i className="bi bi-apple" aria-hidden="true"></i>
            <span>Get the app</span>
          </a>

          {/* Mobile menu */}
          <details className="relative md:hidden">
            <summary
              className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md text-foreground hover:bg-accent [&::-webkit-details-marker]:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </summary>
            <nav
              aria-label="Mobile"
              className="card-surface absolute right-0 top-11 w-48 p-2 shadow-lg"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/#waitlist"
                onClick={closeMenu}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
              >
                Android waitlist
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
