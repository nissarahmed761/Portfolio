export async function GET(): Promise<Response> {
  const baseUrl = "https://buddhsentripathi.com";

  const parseDate = (dateStr: string | undefined): string => {
    if (!dateStr) return new Date().toISOString(); 
    const [dd, mm, yyyy] = dateStr.split("-").map(Number);
    const formattedDate = new Date(`${yyyy}-${mm}-${dd}`);
    return isNaN(formattedDate.getTime()) ? new Date().toISOString() : formattedDate.toISOString();
  };

  const pages = [
    { path: "", priority: "1.0", changefreq: "weekly" },
    { path: "/projects", priority: "0.8", changefreq: "weekly" },
  ].map(({ path, priority, changefreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    priority,
    changefreq,
  }));

  // Generate XML format
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${page.url}</loc>
        <lastmod>${page.lastModified}</lastmod>
        <priority>${page.priority}</priority>
        <changefreq>${page.changefreq}</changefreq>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
