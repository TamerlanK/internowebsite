import "./projectslist.css";

import Arrowlink from "../../arrowlink/Arrowlink";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { projectsData } from "../../../data/projectsData";
import ReactPaginate from "react-paginate";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

const splitColumns = (data) => {
  const sortedData = [...data].sort((a, b) => a.height - b.height);

  const leftColumn = [];
  const rightColumn = [];

  let leftIndex = 0;
  let rightIndex = sortedData.length - 1;

  for (let i = 0; i < sortedData.length; i++) {
    if (i % 2 === 0) {
      leftColumn.push(sortedData[leftIndex]);
      leftIndex++;
    } else {
      rightColumn.push(sortedData[rightIndex]);
      rightIndex--;
    }
  }

  return [leftColumn, rightColumn];
};

const ITEMS_PER_PAGE = 5;

const SingleProject = ({id, category, image, title }) => {
  return (
    <div className="project_container">
      <div className="project_top">
        <img src={image} alt={title} />
      </div>
      <div className="project_bottom">
        <div className="project_info">
          <h4>{title}</h4>
          <p>{capitalize(category)}</p>
        </div>
        <Arrowlink to={`./${id}`} />
      </div>
    </div>
  );
};

const ProjectsList = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const filteredData = category
    ? projectsData.filter((item) => item.category === category)
    : projectsData;

  const [currentPage, setCurrentPage] = useState(0);
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const currentItems = filteredData.slice(startIndex, endIndex);

  const [leftColumn, rightColumn] = splitColumns(currentItems);

  useEffect(() => {
    setCurrentPage(0);
  }, [category]);

  useEffect(() => {
    const newSearchParams = new URLSearchParams();
    if (category) {
      newSearchParams.set("category", category);
    }
    newSearchParams.set("page", currentPage + 1);
    window.history.replaceState(null, "", `?${newSearchParams.toString()}`);
  }, [category, currentPage]);

  const handlePageClick = (data) => {
    window.scrollTo(0, 0);
    setCurrentPage(data.selected);
  };

  return (
    <div className="projects_list_container">
      <div className="projects_list">
        <div className="projects_list_col">
          {leftColumn.map((item) => (
            <SingleProject key={item.id} {...item} />
          ))}
        </div>
        <div className="projects_list_col">
          {rightColumn.map((item) => (
            <SingleProject key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="pagination">
        <ReactPaginate
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination_container"}
          nextClassName={`pagination_next ${
            currentPage === totalPages - 1 ? "disabled" : ""
          }`}
          nextLabel={<RiArrowRightSLine />}
          pageClassName="pagination_page"
          previousClassName={`pagination_prev ${
            currentPage === 0 ? "disabled" : ""
          }`}
          previousLabel={<RiArrowLeftSLine />}
          activeClassName={"page_active"}
          disabledClassName="pagination_disabled"
        />
      </div>
    </div>
  );
};

export default ProjectsList;
