import Hero from "../components/hero/Hero";
import blogThree from "../assets/images/blogThree.png";

const Blog = () => {
  return (
    <div>
      <Hero
        image={blogThree}
        subtitle="Featured Posts"
        name="Jhon Doe"
        date="May 23, 2022"
        heading="Step-by-step guide to choosing great font pairs"
        position="right"
        paragraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
      />
    </div>
  );
};

export default Blog;
