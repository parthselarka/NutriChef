import { AppShot, ScanFrame } from "./AppShot";
import { APP_STORE_URL } from "../lib/links";

export function Hero() {
  return (
    <section className="overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          {/* Copy */}
          <div className="max-w-xl">
            <p className="eyebrow anim-rise">Now on the App Store</p>

            <h1 className="anim-rise anim-d1 mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              The calorie tracker that knows{" "}
              <span className="whitespace-nowrap text-primary">Indian food</span>
            </h1>

            <p className="anim-rise anim-d2 mt-6 text-lg leading-relaxed text-muted-foreground">
              Snap a photo of your meal. NutriChef identifies the dish,
              estimates the portion, and logs calories, protein, carbs, and fat
              in seconds — including the dal, dosa, and vada pav that Western
              food databases can’t find.
            </p>

            <div className="anim-rise anim-d3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <i className="bi bi-apple text-lg" aria-hidden="true"></i>
                <span>Download on the App Store</span>
              </a>
              <a href="#waitlist" className="btn btn-outline btn-lg">
                On Android? Join the waitlist
              </a>
            </div>

            <p className="anim-rise anim-d4 mt-6 font-mono text-xs tracking-wide text-muted-foreground">
              Free to download&ensp;·&ensp;iPhone today&ensp;·&ensp;Android in
              development
            </p>
          </div>

          {/* Product */}
          <div className="anim-rise anim-d2 flex justify-center lg:justify-end">
            <ScanFrame className="w-56 sm:w-64 lg:w-72" inset="-1.125rem">
              <AppShot
                light="/Mockup screenshots/NC_light_SS-portrait.png"
                dark="/Mockup screenshots/NC_dark_SS-portrait.png"
                alt="NutriChef home screen showing today's calories, protein, carbs, and fat progress with a 4-day streak"
                priority
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
                className="phone-shadow"
              />
            </ScanFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
