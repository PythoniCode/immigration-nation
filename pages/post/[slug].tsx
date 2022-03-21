import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { PostData } from "../../types/Posts";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((name) => ({
    params: {
      slug: name.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function Post({ frontmatter, content }: PostData) {
  return (
    <div className="prose text-left">
      <img src={frontmatter.image} alt={frontmatter.desc} />
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}
