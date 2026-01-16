"use client";

import Link from "next/link";
import { getAllBlogCategories, getCategorySlug } from "@/types/content";
import type { BlogCategory } from "@/types/content";
import { useTranslations } from "next-intl";

interface CategoryFilterProps {
  activeCategory?: BlogCategory | "all";
  basePath?: string; // Default: "/blog"
  showAll?: boolean; // Default: true
}

export function CategoryFilter({
  activeCategory = "all",
  basePath = "/blog",
  showAll = true,
}: CategoryFilterProps) {
  const t = useTranslations("common.categories");
  const categories = getAllBlogCategories();

  return (
    <nav className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
      {showAll && (
        <Link
          href={basePath}
          className={`whitespace-nowrap text-sm transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${activeCategory === "all"
            ? "text-foreground"
            : "text-muted-foreground hover:text-[#6F846F]"
            }`}
        >
          {t("all")}
        </Link>
      )}
      {categories.map((category) => {
        const slug = getCategorySlug(category);
        const isActive = activeCategory === category;

        return (
          <Link
            key={category}
            href={`${basePath}?category=${slug}`}
            className={`whitespace-nowrap text-sm transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isActive
              ? "text-foreground"
              : "text-muted-foreground hover:text-[#6F846F]"
              }`}
          >
            {category}
          </Link>
        );
      })}
    </nav>
  );
}
