import "./bloginfo.css";
import img1 from "../../../assets/img/blogImg1.png";
import img2 from "../../../assets/img/blogImg2.png";
import quotation from "../../../assets/svg/Quotation.svg";
import facebook from '../../../assets/svg/Facebook.svg'
import instagram from '../../../assets/svg/Instagram.svg'
import linkedin from '../../../assets/svg/Linkedin.svg'
import twitter from '../../../assets/svg/Twitter.svg'

const BlogInfo = () => {
  return (
    <div className="blog-info">
      <h1>
        Let’s Get Solution for Building <br />
        Construction Work
      </h1>
      <img src={img1} alt="blog image" />
      <div className="img-bottom">
        <p>26 December,2022</p>
        <p>Interior / Design / Home / Decore</p>
      </div>
      <p className="blog-text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary to popular belief.There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injecthumour, or randomised words
        which don't look even slightly believable. Embarrassing hidden in the
        middle of text. All the Lorem Ipsum generators on the Internet tend to
        repeat predefined chunks as necessary.
      </p>
      <div className="blog-quote">
        <img src={quotation} alt="quotation" />
        <p>The details are not the details. They make the design.</p>
      </div>
      <h2>Design sprints are great</h2>
      <ol>
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary to popular belief.There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered.
        <li>
          Contrary to popular belief.There are many variations of passages of
          Lorem Ipsum available, but the majority have suffered.
        </li>
        <li>
          Contrary to popular belief.There are many variations of passages of
          Lorem Ipsum available, but the majority have suffered.
        </li>
        <li>
          Contrary to popular belief.There are many variations of passages of
          Lorem Ipsum available, but the majority have suffered.
        </li>
      </ol>
      <img src={img2} alt="blog image" />
      <div className="blog-footer">
        <div className="blog-footer-left">
          <p>Tags</p>
          <p>Kitchen</p>
          <p>Bedroom</p>
        </div>
        <div className="blog-footer-right">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default BlogInfo;
