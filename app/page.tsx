import Image from "next/image";
import Link from "next/link";
// import { compareDesc, format, parseISO } from "date-fns";
// import { allPosts, Post } from "contentlayer/generated";

export default function Home() {
  // const posts = allPosts.sort((a, b) =>
  //   compareDesc(new Date(a.date), new Date(b.date))
  // );
  
  // console.log(posts, "posts");

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      Hello world
    </main>
  );
}
