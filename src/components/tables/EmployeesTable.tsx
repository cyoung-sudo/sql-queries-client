import "./EmployeesTable.scss";
// Bootstrap
import Table from 'react-bootstrap/Table';

interface IEmployee {
  EID: string;
  firstName: string;
  lastName: string;
  startDate: Date;
  salary: number;
  risk: "low" | "mid" | "high";
  remote: boolean;
}

const testData: IEmployee[] = [
  {
    EID: "12345",
    firstName: "Bob",
    lastName: "Bobby",
    startDate: new Date(),
    salary: 50000,
    risk: "low",
    remote: false
  },
  {
    EID: "12346",
    firstName: "Bob",
    lastName: "Bobby",
    startDate: new Date(),
    salary: 50000,
    risk: "low",
    remote: false
  },
  {
    EID: "12347",
    firstName: "Bob",
    lastName: "Bobby",
    startDate: new Date(),
    salary: 50000,
    risk: "low",
    remote: false
  },
  {
    EID: "12348",
    firstName: "Bob",
    lastName: "Bobby",
    startDate: new Date(),
    salary: 50000,
    risk: "low",
    remote: false
  },
  {
    EID: "12349",
    firstName: "Bob",
    lastName: "Bobby",
    startDate: new Date(),
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
          <th>EID</th>
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
            <td>{employee.EID}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.startDate.toDateString()}</td>
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