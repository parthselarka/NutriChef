import { Check, X, MapPin, PencilLine, ShieldCheck } from "lucide-react";
import Link from "next/link";

const COMPARISON = [
  {
    generic: "Indian dishes matched to the closest Western entry",
    nutrichef: "Built around Indian cuisine, from street food to home cooking",
  },
  {
    generic: "Type, search, scroll, guess the serving size",
    nutrichef: "Photo first — dish and portion suggested for you",
  },
  {
    generic: "Workouts, sleep, shopping, coaching — everything at once",
    nutrichef: "One job done well: what’s on your plate",
  },
  {
    generic: "Barcode or nothing for packaged food",
    nutrichef: "Photos for cooked meals, barcodes when a label exists",
  },
];

const TRUST_POINTS = [
  {
    icon: MapPin,
    title: "Built in India",
    body: "Made by someone who eats this food every day — not a market expansion.",
  },
  {
    icon: PencilLine,
    title: "Honest about estimates",
    body: "The AI shows its confidence and every log is editable. You stay in control of your numbers.",
  },
  {
    icon: ShieldCheck,
    title: "Your data stays yours",
    body: "Health data is stored securely and never shared with third parties.",
    link: { href: "/privacy-policy", label: "Read the privacy policy" },
  },
];

export function WhyNutrichef() {
  return (
    <section
      id="why-nutrichef"
      className="section scroll-mt-16 bg-ink text-ink-foreground"
      aria-labelledby="why-heading"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow reveal">Why NutriChef</p>
          <h2
            id="why-heading"
            className="reveal mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Built for Indian plates, not adapted to them
          </h2>
        </div>

        <div className="reveal mt-12 overflow-hidden rounded-2xl border border-white/10">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-white/60">
                A generic tracker
              </h3>
              <ul className="mt-5 space-y-4">
                {COMPARISON.map((row) => (
                  <li key={row.generic} className="flex gap-3">
                    <X
                      className="mt-0.5 h-4 w-4 flex-none text-red-400/80"
                      aria-hidden="true"
                    />
                    <span className="text-[0.9375rem] leading-relaxed text-white/70">
                      {row.generic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/[0.04] p-6 md:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-emerald-300">
                NutriChef
              </h3>
              <ul className="mt-5 space-y-4">
                {COMPARISON.map((row) => (
                  <li key={row.nutrichef} className="flex gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 flex-none text-emerald-300"
                      aria-hidden="true"
                    />
                    <span className="text-[0.9375rem] leading-relaxed text-white/90">
                      {row.nutrichef}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Trust — only claims the product can stand behind */}
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {TRUST_POINTS.map((point) => (
            <div key={point.title} className="reveal">
              <point.icon
                className="h-5 w-5 text-emerald-300"
                aria-hidden="true"
              />
              <h3 className="mt-3.5 font-display text-lg font-semibold text-white">
                {point.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/70">
                {point.body}
              </p>
              {point.link && (
                <Link
                  href={point.link.href}
                  className="mt-2 inline-block text-sm font-medium text-emerald-300 underline-offset-4 hover:underline"
                >
                  {point.link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
