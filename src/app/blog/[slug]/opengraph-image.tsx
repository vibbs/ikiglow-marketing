import {
  generateOGImageResponse,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og/generate-og-image";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/mdx/mdx-utils";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function OGImage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return generateOGImageResponse({
      title: "Blog",
      description: "Post not found",
      type: "blog",
    });
  }

  return generateOGImageResponse({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    type: "blog",
  });
}
