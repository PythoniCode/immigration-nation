export type FrontMatter = {
  title: string;
  desc: string;
  author: string;
  image: string;
  date: string;
  tags: Array<string>;
};

export type PostMetadata = {
  slug: string;
  frontmatter: FrontMatter;
};

export type PostData = {
  frontmatter: FrontMatter;
  content: string;
};
