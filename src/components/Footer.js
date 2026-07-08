import Image from "next/image";
import Link from "next/link";
import { Mail, Instagram } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";
import { APP_STORE_URL, CONTACT_EMAIL, INSTAGRAM_URL } from "../lib/links";

const PRODUCT_LINKS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#faq", label: "FAQ" },
  { href: "/download", label: "Download" },
  { href: "/support", label: "Support" },
  { href: "/privacy-policy", label: "Privacy policy" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      {/* Final CTA */}
      <section
        id="waitlist"
        className="section scroll-mt-16"
        aria-labelledby="cta-heading"
      >
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow reveal">Get NutriChef</p>
            <h2
              id="cta-heading"
              className="reveal mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl"
            >
              Start with your next meal
            </h2>
            <p className="reveal mt-5 text-lg leading-relaxed text-muted-foreground">
              Download NutriChef for iPhone, point it at your plate, and see
              what’s really on it.
            </p>

            <div className="reveal mt-8 flex justify-center">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <i className="bi bi-apple text-lg" aria-hidden="true"></i>
                <span>Download on the App Store</span>
              </a>
            </div>

            <div className="reveal mx-auto mt-12 max-w-md border-t border-border pt-8 text-left">
              <h3 className="font-display text-base font-semibold">
                Using Android?
              </h3>
              <p className="mb-4 mt-1 text-sm text-muted-foreground">
                Leave your email and you’ll hear the moment the Android
                version ships. No other mail, ever.
              </p>
              <WaitlistForm source="footer" buttonLabel="Notify me" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer proper */}
      <div className="border-t border-border bg-muted">
        <div className="container-page py-12">
          <div className="grid gap-10 md:grid-cols-[1fr_auto]">
            <div className="max-w-sm">
              <Image
                src="/logos/nutrichef-ai-high-resolution-logo-transparent.png"
                alt="NutriChef logo"
                width={120}
                height={40}
                className="h-9 w-auto"
              />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Photo-first calorie and macro tracking built for Indian
                cuisine. Free on the App Store for iPhone.
              </p>
              <div className="mt-5 flex gap-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Email NutriChef"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="NutriChef on Instagram"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <nav aria-label="Footer">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Product
              </h3>
              <ul className="mt-4 space-y-2.5">
                {PRODUCT_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NutriChef. Made with ❤️ in India.
            </p>
            <p className="font-mono text-xs tracking-wide text-muted-foreground">
              [ point · confirm · done ]
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
