import "./prices.css"
import Button from "../../button/Button"

const pricingData = [
  {
    id: 1,
    service: "Design advices",
    price: 29,
    features: [
      "General living space",
      "Rennovation advices",
      "Interior design advices",
      "Furniture reorganization",
      "Up to 5 hours meetings",
    ],
  },
  {
    id: 2,
    service: "Interior",
    price: 39,
    features: [
      "Complete redesign",
      "Interior & exterior works",
      "Modular planning",
      "Kitchen design",
      "Garages organization",
    ],
  },

  {
    id: 2,
    service: "Furniture design",
    price: 59,
    features: [
      "Furniture for living room",
      "Furniture refurbishment",
      "Sofas and amchairs",
      "Tables and chairs",
      "Kitchens",
    ],
  },
]

const Price = ({ service, price, features }) => {
  return (
    <div className="price">
      <div className="price_top">
        <h4>{service}</h4>
        <p>
          $<span>{price}</span> <br />
          /month
        </p>
      </div>
      <ul className="price_content">
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Button text="Get Started" />
    </div>
  )
}

const Prices = () => {
  return (
    <div className="prices__container">
      {pricingData.map((item, index) => (
        <Price
          service={item.service}
          price={item.price}
          features={item.features}
          isPopular={index === 1}
        />
      ))}
    </div>
  )
}

export default Prices
