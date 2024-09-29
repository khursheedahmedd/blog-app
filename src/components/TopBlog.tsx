import { simpleBlogCard } from "@/lib/interface";
import GetTopBlogs from "./getTopBlogs";
import { Button } from "./ui/button";

export default async function TopBlogs() {
  const topBlogs: simpleBlogCard[] = await GetTopBlogs();

  console.log(topBlogs);

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            Top Blogs
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Check out our most popular blog posts
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* Blog 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
              <img
                src={topBlogs[0].titleImage}
                className="w-full h-64 object-cover rounded-t-lg"
                alt="Blog 1"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {topBlogs[0].title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {topBlogs[0].smallDescription}
                </p>
                <Button
                  className="m-2"
                  variant="outline"
                  // href="/blog-post-1"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
          {/* Blog 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
              <img
                src={topBlogs[1].titleImage}
                alt="Blog 2"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {topBlogs[1].title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {topBlogs[1].smallDescription}
                </p>
                <Button
                  className="m-2"
                  variant="outline"
                  // href="/blog-post-2"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
          {/* Blog 3 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
              <img
                src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
                alt="Blog 3"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Blog Post Title 3
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  A brief description of the blog post goes here. It should be
                  engaging and informative.
                </p>
                <Button
                  className="m-2"
                  variant="outline"
                  // href="/blog-post-3"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
