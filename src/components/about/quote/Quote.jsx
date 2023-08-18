import "./quote.css"
import quotationMark from "../../../assets/svg/Quotation.svg"

const quoteData = {
  quote:
    "I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it",
  author: "BUNNY WILLIAMS",
}

const Quote = () => {
  const { quote, author } = quoteData
  return (
    <div className="about__quote-container">
      <img
        src={quotationMark}
        alt="quotation"
        className="abot__quotation-mark"
      />
      <p className="about__quote">{quote}</p>
      <p className="about__quote-author">- {author}</p>
    </div>
  )
}

export default Quote
