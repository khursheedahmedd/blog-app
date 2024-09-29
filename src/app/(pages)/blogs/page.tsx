import { client } from "@/lib/sanity";

async function getData() {
  const query = `*[_type == 'blog'] | order(_createAt desc){
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Blogs() {
  const data = await getData();

  console.log(data);

  return <div>Blogs</div>;
}
