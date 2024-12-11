export default function BlogPostPage({ params }){
  return(
  <main>
    <h1>The blog</h1>
    <p>{params.slug}</p>
  </main>
  );
}