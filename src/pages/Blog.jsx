import React from "react";
import Container from "../components/Container";
import Pagetop from "../components/pagetop/Pagetop";
import banner from "../assets/img/blogBanner.png";
import LatestBlog from "../components/blog/latestblog/LatestBlog";
import BlogsList from "../components/blog/blogslist/BlogsList";

const Blog = () => {
  return (
    <>
      <Pagetop imgUrl={banner} title="Articles & News" breadcrumb="Blog" />
      <Container>
        <LatestBlog />
        <BlogsList />
      </Container>
    </>
  );
};

export default Blog;
