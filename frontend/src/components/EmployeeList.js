import React from 'react';

function EmployeeList({ employees, onEdit, onDelete }) {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Name</th><th>Position</th><th>Department</th>
          <th>Joining Date</th><th>Salary</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.position}</td>
            <td>{emp.department}</td>
            <td>{new Date(emp.joiningDate).toLocaleDateString()}</td>
            <td>${emp.salary}</td>
            <td>
              <button onClick={() => onEdit(emp)}>Edit</button>
              <button onClick={() => onDelete(emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;
