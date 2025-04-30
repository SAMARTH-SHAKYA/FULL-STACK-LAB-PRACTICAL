import React, { useState, useEffect } from 'react';

function EmployeeForm({ onSubmit, editData }) {
  const [employee, setEmployee] = useState({
    name: '',
    position: '',
    department: '',
    joiningDate: '',
    salary: ''
  });

  useEffect(() => {
    if (editData) setEmployee(editData);
  }, [editData]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      onSubmit(editData.id, employee);
    } else {
      onSubmit(employee);
    }
    setEmployee({ name: '', position: '', department: '', joiningDate: '', salary: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={employee.name} onChange={handleChange} required />
      <input name="position" placeholder="Position" value={employee.position} onChange={handleChange} required />
      <input name="department" placeholder="Department" value={employee.department} onChange={handleChange} required />
      <input name="joiningDate" type="date" value={employee.joiningDate?.slice(0, 10)} onChange={handleChange} required />
      <input name="salary" type="number" placeholder="Salary" value={employee.salary} onChange={handleChange} required />
      <button type="submit">{editData ? 'Update' : 'Add'} Employee</button>
    </form>
  );
}

export default EmployeeForm;
