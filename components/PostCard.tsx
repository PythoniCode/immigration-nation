import Link from "next/link";
import { useState } from "react";
import { PostMetadata } from "../types/Posts";

export default function PostCard({ slug, frontmatter }: PostMetadata) {
  return (
    <>
      <div className="rounded shadow w-full h-64">
        <img
          src={frontmatter.image}
          alt={frontmatter.desc}
          className="h-40 w-full object-cover object-center"
        />
        <div className="flex flex-col w-full px-4 py-2">
          <h3 className="font-bold overflow-hidden whitespace-nowrap text-left">
            {frontmatter.title}
          </h3>
          <p className="text-sm overflow-hidden whitespace-nowrap text-left">
            {frontmatter.desc}
          </p>
          <div className="flex flex-row items-center justify-center grow">
            <Link href={`/post/${slug}`}>
              <span className="text-blue-500 font-bold p-2 cursor-pointer">
                Read More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
