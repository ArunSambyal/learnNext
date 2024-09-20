export default function BlogPost({ params }) {
  return (
    <>
      <h1> Blog Post {params.slug}</h1>
      <p>this is the content of the blog post  {params.slug}</p>
    </>
  );
}
