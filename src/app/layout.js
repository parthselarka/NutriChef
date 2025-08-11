import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nutrichef — Indian Food Tracker & Calorie Counter",
    template: "%s | Nutrichef",
  },
  description:
    "Track macronutrients and calories for Indian food with AI-powered photo recognition. Made for Indians, by Indians. Join the waitlist for early access.",
  keywords: [
    "Indian food tracker",
    "Indian calorie tracker",
    "Indian calories tracker",
    "Indian calorie counter",
    "Indian macro tracker",
    "Indian nutrition app",
    "track calories Indian food",
    "AI food recognition India",
    "Indian diet app",
  ],
  authors: [{ name: "Nutrichef Team" }],
  creator: "Nutrichef",
  publisher: "Nutrichef",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nutrichef — Indian Food Tracker & Calorie Counter",
    description:
      "Track macronutrients and calories for Indian food with AI-powered photo recognition. Join the waitlist!",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logos/nutrichef-ai-high-resolution-logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Nutrichef - Indian Food Tracking App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutrichef — Indian Food Tracker & Calorie Counter",
    description:
      "Track macronutrients and calories for Indian food with AI-powered photo recognition. Join the waitlist!",
    images: ["/logos/nutrichef-ai-high-resolution-logo-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Preload key images to speed up LCP/first interaction */}
        <link
          rel="preload"
          as="image"
          href="/logos/nutrichef-ai-high-resolution-logo-transparent.png"
        />
        <link
          rel="preload"
          as="image"
          href="/Mockup%20screenshots/NC_light_SS-portrait.png"
        />
        <link
          rel="preload"
          as="image"
          href="/Mockup%20screenshots/NC_dark_SS-portrait.png"
        />
        <link
          rel="preload"
          as="image"
          href="/Mockup%20screenshots/scanner_light.png"
        />
        <link
          rel="preload"
          as="image"
          href="/Mockup%20screenshots/scanner_dark.png"
        />
        <link
          rel="preload"
          as="image"
          href="/Mockup%20screenshots/results_light.png"
        />
        <link
          rel="preload"
          as="image"
          href="/Mockup%20screenshots/results_dark.png"
        />
        <link
          rel="preload"
          as="image"
          href="/Mockup%20screenshots/updated_light.png"
        />
        <link
          rel="preload"
          as="image"
          href="/Mockup%20screenshots/updated_dark.png"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="dark" storageKey="nutrichef-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
