import type { MetadataRoute } from "next";
import { programs } from "@/data/programs";
import { coaches } from "@/data/coaches";
import { SITE_URL as base } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/kulup",
    "/programlar",
    "/egitmenler",
    "/uyelik",
    "/ders-programi",
    "/galeri",
    "/iletisim",
    "/ucretsiz-deneme",
    "/sss",
    "/gizlilik-politikasi",
    "/kvkk",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : p === "/ucretsiz-deneme" ? 0.9 : 0.8,
  }));

  const programPages = programs.map((p) => ({
    url: `${base}/programlar/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const coachPages = coaches.map((c) => ({
    url: `${base}/egitmenler/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...programPages, ...coachPages];
}
