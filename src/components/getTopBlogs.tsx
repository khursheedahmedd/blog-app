import { client } from "@/lib/sanity";

export default async function GetTopBlogs() {
  const query = `*[_type == 'blog'] | order(_createAt desc){
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
}`;

  const data = await client.fetch(query);
  return data;
}
