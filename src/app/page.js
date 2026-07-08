import Script from "next/script";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Problem } from "../components/Problem";
import { HowItWorks } from "../components/HowItWorks";
import { Features } from "../components/Features";
import { WhyNutrichef } from "../components/WhyNutrichef";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { APP_STORE_URL, CONTACT_EMAIL, INSTAGRAM_URL } from "../lib/links";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "NutriChef",
            url: siteUrl,
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
            name: "NutriChef AI",
            applicationCategory: "HealthApplication",
            operatingSystem: "iOS",
            description:
              "Photo-first calorie and macro tracker built for Indian cuisine. Snap a meal to identify the dish, set the portion, and log calories, protein, carbs, and fat.",
            installUrl: APP_STORE_URL,
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
            name: "NutriChef",
            url: siteUrl,
            logo: "/logos/nutrichef-ai-high-resolution-logo-transparent.png",
            sameAs: [`mailto:${CONTACT_EMAIL}`, INSTAGRAM_URL],
          })}
        </Script>

        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <WhyNutrichef />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
