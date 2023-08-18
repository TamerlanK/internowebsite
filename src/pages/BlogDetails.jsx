import Pagetop from "../components/pagetop/Pagetop";
import banner from "../assets/img/blogDetails.png";
import Container from "../components/Container";
import BlogInfo from "../components/blogdetails/bloginfo/BlogInfo";
import BlogAside from "../components/blogdetails/blogaside/BlogAside";

const BlogDetails = () => {
  return (
    <>
      <Pagetop imgUrl={banner} title="Single Blog" breadcrumb="Single Blog" />
      <Container>
        <div className="blog-details-wrapper">
          <BlogInfo />
          <BlogAside />
        </div>
      </Container>
    </>
  );
};

export default BlogDetails;
