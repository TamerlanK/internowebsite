import React from "react";
import latestBlogImg from "../../../assets/img/latestBlog.png";
import Arrowlink from '../../arrowlink/Arrowlink'
import "./latestblog.css"

const LatestBlog = () => {
  return (
    <div className="latest_blog">
      <h2>Latest Post</h2>
      <div className="latest_blog_content">
        <div className="latest_blog_img">
          <img src={latestBlogImg} alt="blog" />
        </div>
        <div className="latest_blog_info">
          <h2>Low Cost Latest Invented Interior Designing Ideas</h2>
          <p>
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
            dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum
            is not simply random text. It has roots in a piece of classica.
          </p>
          <div className="latest_footer">
            <p>26 December,2022 </p>
            <Arrowlink to={`./1`}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
