import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAboutPage } from "@/lib/mdx/mdx-utils";
import { mdxComponents } from "@/lib/mdx/mdx-components";
import remarkGfm from "remark-gfm";

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAboutPage();

  return {
    title: `${about.frontmatter.title} - IkiGlow`,
    description: about.frontmatter.description,
  };
}

export default async function About() {
  const about = await getAboutPage();

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-2xl space-y-12 px-6 py-16">
        {/* MDX Content */}
        <div className="prose prose-neutral space-y-6">
          <MDXRemote
            source={about.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>
      </div>
    </main>
  );
}
