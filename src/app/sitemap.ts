import type { MetadataRoute } from "next";
import { SITE_URL, getAllProjects } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/projects", "/resume"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));
  const projects = getAllProjects().map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}`,
    lastModified: now,
  }));
  return [...routes, ...projects];
}
