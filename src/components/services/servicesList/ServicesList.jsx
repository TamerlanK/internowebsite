import "./servicesList.css";
import SimpleCard from "../../simplecard/SimpleCard";

export const servicesListData = [
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
    title: "Retail Design",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    id: 4,
    title: "2D/3D Art Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    id: 5,
    title: "Interior Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    id: 6,
    title: "Decoration Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
];

const ServicesList = () => {
  return (
    <div className="servicesList_container">
      {servicesListData.map((item) => (
        <SimpleCard
          title={item.title}
          description={item.description}
          to={item.id}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default ServicesList;
