import "./EmployeesTable.scss";
import { IEmployee } from "../../types/Employee.types";
// Bootstrap
import Table from 'react-bootstrap/Table';
// Animation
import { motion } from "framer-motion";

interface IEmployeesTableProps {
  employees: IEmployee[]
}

const EmployeesTable: React.FC<IEmployeesTableProps> = ({employees}) => {
  return(
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
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
    </motion.div>
  )
};

export default EmployeesTable;