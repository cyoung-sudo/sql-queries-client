import "./EmployeesTable.scss";
import { IEmployee } from "../../types/Employee.types";
// Bootstrap
import Table from 'react-bootstrap/Table';

const testData: IEmployee[] = [
  {
    eID: "12345",
    firstName: "Bob",
    lastName: "Bobby",
    startDate: "01/01/2024",
    salary: 50000,
    risk: "low",
    remote: false
  },
  {
    eID: "12346",
    firstName: "Bob",
    lastName: "Bobby",
    startDate: "01/01/2024",
    salary: 50000,
    risk: "low",
    remote: false
  },
  {
    eID: "12347",
    firstName: "Bob",
    lastName: "Bobby",
    startDate: "01/01/2024",
    salary: 50000,
    risk: "low",
    remote: false
  },
  {
    eID: "12348",
    firstName: "Bob",
    lastName: "Bobby",
    startDate: "01/01/2024",
    salary: 50000,
    risk: "low",
    remote: false
  },
  {
    eID: "12349",
    firstName: "Bob",
    lastName: "Bobby",
    startDate: "01/01/2024",
    salary: 50000,
    risk: "low",
    remote: false
  }
];

const EmployeesTable = () => {
  return(
    <Table className="employeesTable" striped bordered hover>
      <thead>
        <tr>
          <th>eID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Start Date</th>
          <th>Salary</th>
          <th>Risk</th>
          <th>Remote</th>
        </tr>
      </thead>
      <tbody>
        {testData.map((employee, idx) => (
          <tr key={idx}>
            <td>{employee.eID}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.startDate}</td>
            <td>{employee.salary}</td>
            <td>{employee.risk}</td>
            <td>{employee.remote ? "yes" : "no"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
};

export default EmployeesTable;