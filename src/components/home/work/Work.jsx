import "./work.css"
import Container from "../../Container"
import SimpleCard from "../../simplecard/SimpleCard"

const workData = [
  {
    id: 1,
    title: "Project Plan",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    id: 2,
    title: "Interior Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    id: 3,
    title: "Realization",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
]



const Work = () => {
  return (
    <Container>
      <div className="home-work-section">
        {workData.map((card) => (
          <SimpleCard
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </Container>
  )
}

export default Work
