import React from "react";
import Arrowlink from "../../components/arrowlink/Arrowlink";
import "./articlecard.css";

const ArticleCard = ({id, title, date, imgUrl, type }) => {
  return (
    <div class="article__card">
      <div class="article__img">
        <img src={imgUrl} alt={title} />
      </div>
      <h2 class="article__title">{title}</h2>
      <div class="article__footer">
        <div class="article__date">{date}</div>
        <Arrowlink to={`./${id}`} />
      </div>
    </div>
  );
};
export default ArticleCard;
