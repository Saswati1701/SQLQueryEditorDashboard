import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import employeeData from '../data/employees.json'

const itemsPerPage = 100;

const Response = () => {
  const activeTab = useSelector(state => {
    return state.queryEditor.tabs[state.queryEditor.activeConnection].filter(tab => {
      return tab.id === state.queryEditor.activeTab
    })[0]
  })

  console.log('response', activeTab);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(employeeData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = employeeData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Title</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {currentData.map((employee) => (
            <tr key={employee.employeeID}>
              <td>{employee.employeeID}</td>
              <td>{employee.lastName}</td>
              <td>{employee.firstName}</td>
              <td>{employee.title}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Response