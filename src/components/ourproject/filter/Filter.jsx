import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "./filter.css"

const Filter = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const queryParams = new URLSearchParams(location.search)

  const [selectedCategory, setSelectedCategory] = useState(
    queryParams.get("category") || "All"
  )

  const handleCategoryClick = (category) => {
    if (category === "All") {
      queryParams.delete("category")
    } else {
      queryParams.set("category", category.toLowerCase())
    }

    setSelectedCategory(category)
    navigate(`?${queryParams.toString()}`, { replace: true })
  }

  const categories = [
    "All",
    "Bathroom",
    "Bedroom",
    "Kitchen",
    "Living room",
    "Dining Hall",
  ]

  return (
    <ul className="projects_filter">
      {categories.map((category) => (
        <li
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={selectedCategory === category ? "active" : ""}
        >
          {category}
        </li>
      ))}
    </ul>
  )
}

export default Filter
