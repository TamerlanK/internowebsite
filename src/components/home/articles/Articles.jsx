import "./articles.css";
import Container from "../../Container";
import homeArticleImg1 from "../../../assets/img/homeArticle1.png";
import homeArticleImg2 from "../../../assets/img/homeArticle2.png";
import homeArticleImg3 from "../../../assets/img/homeArticle3.png";
import ArticleCard from "../../articlecard/ArticleCard";

const homeArticlesData = [
  {
    id: 1,
    title: "Let's Get Solution For Building Construction",
    date: "26 December, 2022",
    type: "Kitchen Design",
    imgUrl: homeArticleImg1,
  },
  {
    id: 2,
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "22 December, 2022",
    type: "Living Design",
    imgUrl: homeArticleImg2,
  },
  {
    id: 3,
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December, 2022",
    type: "Interior Design",
    imgUrl: homeArticleImg3,
  },
];



const Articles = () => {
  return (
    <Container>
      <div className="home__articles">
        <div className="home__articles__header">
          <h2>Articles & News</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content <br /> of a page when lookings at its
            layouts the points of using.
          </p>
        </div>
        <div className="home__articles__content">
          {homeArticlesData.map(({ id, title, date, type, imgUrl }) => (
            <ArticleCard
              key={id}
              title={title}
              date={date}
              type={type}
              imgUrl={imgUrl}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Articles;
