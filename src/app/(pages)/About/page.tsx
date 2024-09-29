import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lacinia
        sapien. Fusce auctor, nisi eget auctor aliquam, nulla urna posuere
        velit, a aliquam nunc mi in dolor. Sed sit amet nisl at metus luctus
        lacinia. Sed euismod, nunc eu aliquam tincidunt, nulla nisi aliquam
        nibh, non ultricies nibh nisl id nulla. Nulla facilisi. Fusce ut nisi id
        nibh bibendum maximus. Duis et nisi et nibh aliquet tincidunt. Sed
        mattis, ex vitae tristique aliquet, nulla nulla.
      </p>
      <a
        href="#"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Contact Us
      </a>
    </div>
  );
};

export default About;
