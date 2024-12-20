import './App.scss'
// React
import { useState } from 'react';
// Components
import EmployeesTable from './components/tables/EmployeesTable'
import EmployeeForm from './components/forms/EmployeeForm'
import ClockinTable from './components/tables/ClockinTable'
import ClockinForm from './components/forms/ClockinForm'
// Bootstrap
import Accordion from 'react-bootstrap/Accordion';

type TRisk = "low" | "mid" | "high";

function App() {
  // Controlled inputs (employee)
  const [EID, setEID] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [salary, setSalary] = useState<number | null>(null);
  const [risk, setRisk] = useState<TRisk | null>(null);
  const [remote, setRemote] = useState<boolean | null>(null);
  // Controlled inputs (clockin)
  const [EID2, setEID2] = useState<string | null>(null);

  const submitEmployee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(EID);
    console.log(firstName);
    console.log(lastName);
    console.log(startDate);
    console.log(salary);
    console.log(risk);
    console.log(remote);
  }

  const submitClockin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(EID2);
  }

  return (
    <div id="app">
      <EmployeesTable/>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Add Employee</Accordion.Header>
          <Accordion.Body>
            <EmployeeForm
              setEID={setEID}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setStartDate={setStartDate}
              setSalary={setSalary}
              setRisk={setRisk}
              setRemote={setRemote}
              submitEmployee={submitEmployee}/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <ClockinTable/>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Add Clockin</Accordion.Header>
          <Accordion.Body>
            <ClockinForm
              setEID2={setEID2}
              submitClockin={submitClockin}/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default App
