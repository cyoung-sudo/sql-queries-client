import "./ResultsTable.scss";
import { IEmployee } from "../../types/Employee.types";
// Bootstrap
import Table from 'react-bootstrap/Table';

interface IResultsTableProps {
  results: IEmployee[]
}

const ResultsTable: React.FC<IResultsTableProps> = ({results}) => {
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
        {results.map((result, idx) => (
          <tr key={idx}>
            <td>{result.eID}</td>
            <td>{result.firstName}</td>
            <td>{result.lastName}</td>
            <td>{result.startDate.slice(0, 10)}</td>
            <td>{result.salary}</td>
            <td>{result.risk}</td>
            <td>{result.remote ? "yes" : "no"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
};

export default ResultsTable;