import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { WhyNutrichef } from "../components/WhyNutrichef";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import Script from "next/script";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Nutrichef",
            url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  (process.env.NEXT_PUBLIC_SITE_URL ||
                    "http://localhost:3000") + "/?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          })}
        </Script>
        <Script
          id="ld-json-product"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Nutrichef",
            applicationCategory: "MobileApplication",
            operatingSystem: "iOS, Android",
            description:
              "AI-powered Indian food tracker and calorie counter. Identify dishes with a photo and track macros for Indian cuisine.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          })}
        </Script>
        <Script
          id="ld-json-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nutrichef",
            url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
            logo: "/logos/nutrichef-ai-high-resolution-logo-transparent.png",
            sameAs: [
              "mailto:parthselarka2006@gmail.com",
              "https://www.instagram.com/parth_builds_stuff/",
            ],
          })}
        </Script>
        <Hero />
        {/* What is Nutrichef? — keyword anchor section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              What is Nutrichef?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Nutrichef is an Indian food tracker and Indian calorie tracker
              built for real Indian cuisine. Snap a photo to identify dishes and
              get instant macro breakdowns. It’s designed around Indian eating
              patterns with a curated Indian food database, so tracking is
              accurate and effortless.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mt-4">
              Explore{" "}
              <a
                href="#features"
                className="underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-primary"
              >
                features
              </a>{" "}
              designed for Indian diets, learn{" "}
              <a
                href="#why-nutrichef"
                className="underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-primary"
              >
                why Nutrichef stands out
              </a>
              , and{" "}
              <a
                href="#waitlist"
                className="underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-primary"
              >
                join the waitlist
              </a>{" "}
              for early access.
            </p>
          </div>
        </section>
        <Features />
        <WhyNutrichef />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
