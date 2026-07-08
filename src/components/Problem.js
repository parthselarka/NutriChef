const PAIN_POINTS = [
  {
    title: "Search “roti”, get the wrong roti",
    body: "Generic trackers guess at Indian dishes with entries built for another cuisine — so every log starts with doubt.",
  },
  {
    title: "Home-cooked food has no barcode",
    body: "Thalis, tiffins, and family recipes make up most Indian eating, and barcode-first apps simply skip them.",
  },
  {
    title: "Slow logging kills the habit",
    body: "When one meal takes minutes of searching and portion math, most people quit tracking within weeks.",
  },
];

export function Problem() {
  return (
    <section className="section bg-muted" aria-labelledby="problem-heading">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow reveal">The problem</p>
          <h2
            id="problem-heading"
            className="reveal mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Food databases were never built for an Indian plate
          </h2>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {PAIN_POINTS.map((point) => (
            <div key={point.title} className="reveal border-t-2 border-spice/60 pt-5">
              <h3 className="font-display text-lg font-semibold">
                {point.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
