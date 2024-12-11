import Link from "next/link";

export default function BlogPage(){
  return(
  <main>
    <h1>The blog</h1>
    <p><Link href="blog/post-1">Pos 1</Link></p>
    <p><Link href="blog/post-2">Pos 2</Link></p>
  </main>
  );
}