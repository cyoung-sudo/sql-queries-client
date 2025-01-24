import "./EmployeesTable.scss";
import { IEmployee } from "../../types/Employee.types";
// Bootstrap
import Table from 'react-bootstrap/Table';

interface IEmployeeTableProps {
  employees: IEmployee[]
}

const EmployeesTable: React.FC<IEmployeeTableProps> = ({employees}) => {
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
        {employees.map((employee, idx) => (
          <tr key={idx}>
            <td>{employee.eID}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.startDate.slice(0, 10)}</td>
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