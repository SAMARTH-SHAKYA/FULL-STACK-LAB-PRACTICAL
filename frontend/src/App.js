import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

const API = process.env.REACT_APP_API_URL;

function App() {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

  // Fetch employees
  useEffect(() => {
    axios.get(API).then(res => setEmployees(res.data));
  }, []);

  const addEmployee = async (employee) => {
    const res = await axios.post(API, employee);
    setEmployees([...employees, res.data]);
  };

  const updateEmployee = async (id, updated) => {
    const res = await axios.put(`${API}/${id}`, updated);
    setEmployees(employees.map(emp => emp.id === id ? res.data : emp));
    setEditEmployee(null);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`${API}/${id}`);
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <div className="container">
      <h1>Employee CRUD</h1>
      <EmployeeForm onSubmit={editEmployee ? updateEmployee : addEmployee} editData={editEmployee} />
      <EmployeeList
        employees={employees}
        onEdit={setEditEmployee}
        onDelete={deleteEmployee}
      />
    </div>
  );
}

export default App;
