export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const routes = ["/", "/#features", "/#why-nutrichef", "/#waitlist"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: route === "/" ? 1.0 : 0.7,
    })
  );

  return routes;
}
