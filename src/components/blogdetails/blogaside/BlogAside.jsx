import "./blogaside.css";
import searchIcon from "../../../assets/svg/Search.svg";

const BlogAside = () => {
  return (
    <div className="blog-aside">
      <div className="blog-aside-search">
        <input type="text" placeholder="Search" />
        <img src={searchIcon} alt="search" />
      </div>
      <div className="blog-aside-latest-news">
        <h3>Latest News</h3>
        <ul>
          <li>
            We Focus On Comfort And Gorgeous <span>06/02/2020</span>
          </li>
          <li>
            We Focus On Comfort And Gorgeous <span>06/02/2020</span>
          </li>
          <li>
            We Focus On Comfort And Gorgeous <span>06/02/2020</span>
          </li>
        </ul>
      </div>
      <div className="blog-aside-categories">
        <h4>Categories</h4>
        <ul>
          <li>Decoration</li>
          <li>Door Windows</li>
          <li>Home Land</li>
          <li>Roof Installation</li>
        </ul>
      </div>
      <div className="blog-aside-tags">
        <h4>Tags</h4>
        <ul className="tags-container">
          <li>Kitchen</li>
          <li>Bedroom</li>
          <li>Building</li>
          <li>Architecture</li>
          <li>Kitchen Planning</li>
          <li>Dining Hall</li>
        </ul>
      </div>
    </div>
  );
};

export default BlogAside;
