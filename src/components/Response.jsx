import React, { useState } from 'react'
import data from '../data/employees.json'

const Response = () => {
  const itemsPerPage = 13;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the records for the current page
  const currentPageData = data.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle page navigation
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='response'>
      <table>
        {/* Table headers go here */}
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {/* Render data for the current page */}
          {currentPageData.map((item) => (
            <tr key={item.id}>
              <td>{item.employeeID}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};


export default Response