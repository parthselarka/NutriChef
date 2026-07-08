import {
  Camera,
  Scale,
  ScanBarcode,
  BarChart3,
  Flame,
  Leaf,
} from "lucide-react";

const BENEFITS = [
  {
    icon: Camera,
    title: "Log in seconds, not minutes",
    body: "One photo replaces the database dig. Snap your plate and the dish, portion, and macros are ready to confirm.",
  },
  {
    icon: Scale,
    title: "Portions without a kitchen scale",
    body: "Pick a quarter, half, three-quarters, or full plate — or enter exact grams when you know them.",
  },
  {
    icon: ScanBarcode,
    title: "Barcodes for packaged food",
    body: "When there is a label, scan it. The scanner switches between photo and barcode in one tap.",
  },
  {
    icon: BarChart3,
    title: "Macros at a glance",
    body: "Daily targets for calories, protein, carbs, and fat, with progress that updates the moment you log.",
  },
  {
    icon: Flame,
    title: "Streaks that build the habit",
    body: "A simple daily streak rewards showing up — the part of tracking that actually changes results.",
  },
  {
    icon: Leaf,
    title: "Veg-friendly by default",
    body: "Vegetarian, vegan, and Jain eating patterns are core to the app, not an afterthought.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="section scroll-mt-16 bg-muted"
      aria-labelledby="features-heading"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow reveal">What you get</p>
          <h2
            id="features-heading"
            className="reveal mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Tracking that fits how you actually eat
          </h2>
        </div>

        {/* Nutrition-label grid: hairline rules instead of floating cards */}
        <ul className="card-surface reveal mt-12 grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <li
              key={benefit.title}
              className={`p-6 md:p-8 ${i > 0 ? "border-t sm:border-t-0" : ""} ${
                i >= 2 ? "sm:border-t" : ""
              } ${i % 2 === 1 ? "sm:border-l" : ""} ${
                i >= 3 ? "lg:border-t" : "lg:border-t-0"
              } ${i % 3 !== 0 ? "lg:border-l" : "lg:border-l-0"}`}
            >
              <benefit.icon
                className="h-5 w-5 text-primary"
                aria-hidden="true"
                strokeWidth={2.25}
              />
              <h3 className="mt-3.5 font-display text-lg font-semibold">
                {benefit.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                {benefit.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
