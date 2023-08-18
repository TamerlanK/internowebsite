import "./projectInfo.css"

const ProjectInfo = ({ title, category }) => {
  return (
    <div className="project_info_container">
      <div className="project_info_left">
        <ul>
          <li>Client</li>
          <li>Category</li>
          <li>Tags</li>
          <li>Date</li>
          <li>Link</li>
        </ul>
        <ul>
          <li>client name</li>
          <li>{category}</li>
          <li>interior, Home</li>
          <li>Date 23,02, 2022</li>
          <li>Link.example.com</li>
        </ul>
      </div>
      <div className="project_info_right">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, est
          perspiciatis. Veritatis voluptas expedita molestias consequatur sunt
          corporis, commodi adipisci ipsam, exercitationem temporibus esse
          aliquam provident voluptatem dignissimos id hic?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim omnis
          molestias consequuntur repellendus dolore provident minima cumque,
          culpa dolorum qui laborum, quisquam voluptas neque delectus, minus
          ratione laudantium repudiandae velit pariatur. Eveniet neque culpa
          earum quam recusandae quia odit suscipit!
        </p>
      </div>
    </div>
  )
}

export default ProjectInfo
