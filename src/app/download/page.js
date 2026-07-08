"use client";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { APP_STORE_URL } from "../../lib/links";

export default function Download() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-grow pb-20 pt-32">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="group mb-8 inline-flex items-center text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft
                className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              />
              Back to home
            </Link>

            <p className="eyebrow">Download</p>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Get NutriChef on your phone
            </h1>
            <p className="mb-12 mt-4 text-lg text-muted-foreground">
              Available now for iPhone. Android is in development — the
              waitlist hears first.
            </p>

            <div className="space-y-6">
              {/* iPhone */}
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface group block p-8 transition-colors hover:border-primary/60"
              >
                <div className="flex items-center gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-ink">
                    <i
                      className="bi bi-apple text-4xl text-white"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="flex-grow">
                    <h2 className="font-display text-2xl font-bold transition-colors group-hover:text-primary">
                      Download for iPhone
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                      Free on the App Store
                    </p>
                  </div>
                  <ArrowRight
                    className="h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-2 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </div>
              </a>

              {/* Android */}
              <Link
                href="/#waitlist"
                className="card-surface group block p-8 transition-colors hover:border-primary/60"
              >
                <div className="flex items-center gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary">
                    <i
                      className="bi bi-android2 text-4xl text-primary"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="flex-grow">
                    <h2 className="font-display text-2xl font-bold transition-colors group-hover:text-primary">
                      Android
                      <span className="ml-3 align-middle font-mono text-xs font-medium uppercase tracking-[0.14em] text-spice">
                        [ waitlist ]
                      </span>
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                      In development — join the waitlist for launch news
                    </p>
                  </div>
                  <ArrowRight
                    className="h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-2 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
