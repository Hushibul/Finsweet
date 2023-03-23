import Hero from "../components/hero/Hero";
import blogThree from "../assets/images/blogThree.png";
import Blogs from "../components/blogs/Blogs";
import JoinTeam from "../components/join-team/JoinTeam";

const Blog = () => {
  return (
    <>
      <Hero
        image={blogThree}
        subtitle="Featured Posts"
        name="Jhon Doe"
        date="May 23, 2022"
        heading="Step-by-step guide to choosing great font pairs"
        position="right"
        paragraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
      />
      <Blogs />
      <JoinTeam />
    </>
  );
};

export default Blog;
