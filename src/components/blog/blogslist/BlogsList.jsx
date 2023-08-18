import React from "react";
import "./bloglist.css";
import ArticleCard from "../../articlecard/ArticleCard";
import articleImg from "../../../assets/img/homeArticle1.png";

const articlesData = [
  {
    id: 1,
    title: "Let's Get Solution For Building Construction",
    date: "26 December, 2022",
    type: "Kitchen Design",
    imgUrl: articleImg,
  },
  {
    id: 2,
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "22 December, 2022",
    type: "Living Design",
    imgUrl: articleImg,
  },
  {
    id: 3,
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December, 2022",
    type: "Interior Design",
    imgUrl: articleImg,
  },
  {
    id: 4,
    title: "Let's Get Solution For Building Construction",
    date: "26 December, 2022",
    type: "Kitchen Design",
    imgUrl: articleImg,
  },
  {
    id: 5,
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "22 December, 2022",
    type: "Living Design",
    imgUrl: articleImg,
  },
  {
    id: 6,
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December, 2022",
    type: "Interior Design",
    imgUrl: articleImg,
  },
];
const BlogsList = () => {
  return (
    <div className="bloglist">
      <h2>Articles & News</h2>
      <div className="bloglist_content">
        {articlesData.map((article) => (
          <ArticleCard {...article} />
        ))}
      </div>
    </div>
  );
};

export default BlogsList;
