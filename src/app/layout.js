import { Inter, Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NutriChef — Calorie & Macro Tracker for Indian Food",
    template: "%s | NutriChef",
  },
  description:
    "Snap a photo of your meal and NutriChef identifies the dish, estimates the portion, and logs calories, protein, carbs, and fat. Built for Indian cuisine. Free on the App Store for iPhone; Android waitlist open.",
  keywords: [
    "Indian food tracker",
    "Indian calorie tracker",
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
    title: "NutriChef — Calorie & Macro Tracker for Indian Food",
    description:
      "Photo-first calorie and macro tracking built for Indian cuisine. Free on the App Store for iPhone; Android waitlist open.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logos/nutrichef-ai-high-resolution-logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "NutriChef — Indian food tracking app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NutriChef — Calorie & Macro Tracker for Indian Food",
    description:
      "Photo-first calorie and macro tracking built for Indian cuisine. Free on the App Store for iPhone; Android waitlist open.",
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

// Applies the saved theme before first paint to avoid a flash of the wrong theme.
const themeInitScript = `(function(){try{var t=localStorage.getItem("nutrichef-theme");if(t!=="dark"&&t!=="light"){t="light"}var c=document.documentElement.classList;c.remove("light","dark");c.add(t);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} ${bricolage.variable} ${plexMono.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="light" storageKey="nutrichef-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
