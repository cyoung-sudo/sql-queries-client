import './App.scss'
// React
import { useState } from 'react';
// Components
import EmployeesTable from './components/tables/EmployeesTable'
import EmployeeForm from './components/forms/EmployeeForm'
import ClockinTable from './components/tables/ClockinTable'
import ClockinForm from './components/forms/ClockinForm'
// APIs
import EmployeeAPI from "./apis/EmployeeAPI";
// Bootstrap
import Accordion from 'react-bootstrap/Accordion';

function App() {
  // Controlled inputs (employee)
  const [eID, setEID] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [salary, setSalary] = useState<number | null>(null);
  const [risk, setRisk] = useState("low");
  const [remote, setRemote] = useState(false);
  // Controlled inputs (clockin)
  const [eID2, setEID2] = useState<string | null>(null);

  const submitEmployee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(eID !== null && firstName !== null && lastName !== null && startDate !== null && salary !== null && risk !== null && remote !== null) {
      EmployeeAPI.create(eID, firstName, lastName, startDate, salary, risk, remote)
      .then(res => {
        if(res.data.success) {
          console.log("success");
        }
      })
    } else {
      console.log("fail")
    }
  }

  const submitClockin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(eID2);
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
