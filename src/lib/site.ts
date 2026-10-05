import { projects, type Project } from "@/content/projects";

export const SITE_URL = "https://jalal-haidar.vercel.app";

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getNextProject(slug: string): Project | undefined {
  const all = getAllProjects();
  const i = all.findIndex((p) => p.slug === slug);
  return all[(i + 1) % all.length];
}
