async function getData() {
  const query = `*[_type == 'blog'] | order(_createAt desc){
  title,
    smallDescription,
    "currentSlug": slug.current,
}`;
}

const Blogs = () => {
  return <div>Blogs</div>;
};

export default Blogs;
