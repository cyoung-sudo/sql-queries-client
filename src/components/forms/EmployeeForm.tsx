import "./EmployeeForm.scss";
// Types
import { TRisk } from "../../types/Employee.types";
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface IEmployeeFromProps {
  setEID: (eID: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setStartDate: (startDate: string) => void;
  setSalary: (salary: number) => void;
  setRisk: (risk: TRisk) => void;
  setRemote: (remote: boolean) => void;
  submitEmployee: (e: React.FormEvent<HTMLFormElement>) => void;
};

const EmployeeForm: React.FC<IEmployeeFromProps> = ({setEID, setFirstName, setLastName, setStartDate, setSalary, setRisk, setRemote, submitEmployee}) => {
  return(
    <Form className="employeeForm" onSubmit={submitEmployee}>
      <Form.Group className="mb-3">
        <Form.Label>Employee ID</Form.Label>
        <Form.Control onChange={e => setEID(e.target.value)} type="text" placeholder="Enter employee ID" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Fisrt Name</Form.Label>
        <Form.Control onChange={e => setFirstName(e.target.value)} type="text" placeholder="Enter first name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control onChange={e => setLastName(e.target.value)} type="text" placeholder="Enter last name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Start Date</Form.Label>
        <Form.Control onChange={e => setStartDate(e.target.value)} type="date" placeholder="Enter start date" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Salary</Form.Label>
        <Form.Control onChange={e => setSalary(Number(e.target.value))} type="number" placeholder="Enter salary" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Risk</Form.Label>
        <Form.Select onChange={e => setRisk(e.target.value as TRisk)}>
          <option value={"low"}>low</option>
          <option value={"mid"}>mid</option>
          <option value={"high"}>high</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check onChange={e => setRemote(e.target.checked)} type="checkbox" label="Remote" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  )
};

export default EmployeeForm;