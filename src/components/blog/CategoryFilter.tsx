import Link from "next/link";
import { getAllBlogCategories, getCategorySlug } from "@/types/content";
import type { BlogCategory } from "@/types/content";

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
  const categories = getAllBlogCategories();

  return (
    <nav className="flex flex-wrap gap-4">
      {showAll && (
        <Link
          href={basePath}
          className={`text-sm transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${activeCategory === "all"
              ? "text-foreground"
              : "text-muted-foreground hover:text-[#6F846F]"
            }`}
        >
          All
        </Link>
      )}
      {categories.map((category) => {
        const slug = getCategorySlug(category);
        const isActive = activeCategory === category;

        return (
          <Link
            key={category}
            href={`${basePath}?category=${slug}`}
            className={`text-sm transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isActive
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
