import React, { useState } from "react"
import "./projectImage.css"
import { BsSearch, BsX } from "react-icons/bs"

const ProjectImage = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal_overlay")) {
      closeModal()
    }
  }

  return (
    <div className="project_single_image">
      <img src={image} alt="image" />
      <div className="project_zoom" onClick={openModal}>
        <BsSearch />
      </div>
      {isModalOpen && (
        <div className="modal_overlay" onClick={handleOverlayClick}>
          <div className="modal_content">
            <div className="modal_close" onClick={closeModal}>
              <BsX />
            </div>
            <img src={image} alt="full_image" />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectImage
