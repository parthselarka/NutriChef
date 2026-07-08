import { AppShot } from "./AppShot";

const STEPS = [
  {
    number: "01",
    title: "Point your camera",
    body: "Snap your plate, pick a photo from your gallery, or scan a barcode on packaged food.",
    light: "/Mockup screenshots/scanner_light.png",
    dark: "/Mockup screenshots/scanner_dark.png",
    alt: "NutriChef scanner screen framing a meal with photo and barcode modes",
  },
  {
    number: "02",
    title: "Confirm the details",
    body: "The AI names the dish and shows its confidence. Set the portion — quarter to full plate, or exact grams.",
    light: "/Mockup screenshots/results_light.png",
    dark: "/Mockup screenshots/results_dark.png",
    alt: "NutriChef results screen showing an identified dish with AI confidence, portion presets, and nutrition facts",
  },
  {
    number: "03",
    title: "Watch your day fill in",
    body: "Calories, protein, carbs, and fat update instantly — and your streak keeps the habit alive.",
    light: "/Mockup screenshots/updated_light.png",
    dark: "/Mockup screenshots/updated_dark.png",
    alt: "NutriChef home screen with updated daily progress bars after logging a meal",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section scroll-mt-16"
      aria-labelledby="how-heading"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow reveal">How it works</p>
          <h2
            id="how-heading"
            className="reveal mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Log a meal in three steps
          </h2>
          <p className="reveal mt-4 text-lg text-muted-foreground">
            These are real screens from the app — point, confirm, done.
          </p>
        </div>

        {/* Mobile: swipeable rail. Desktop: three columns. */}
        <ol className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-10 md:overflow-visible md:pb-0">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="reveal w-64 flex-none snap-center md:w-auto"
            >
              <AppShot
                light={step.light}
                dark={step.dark}
                alt={step.alt}
                sizes="(max-width: 768px) 256px, 320px"
                className="phone-shadow mx-auto w-52 md:w-56 lg:w-64"
              />
              <div className="mt-6">
                <p className="font-mono text-sm font-medium text-spice">
                  {step.number}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
