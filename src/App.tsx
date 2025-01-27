import './App.scss'
// React
import { useState, useEffect } from 'react';
// Components
import EmployeesTable from './components/tables/EmployeesTable'
import EmployeeForm from './components/forms/EmployeeForm'
import ClockinTable from './components/tables/ClockinTable'
import ClockinForm from './components/forms/ClockinForm'
import ResultsTable from './components/tables/ResultsTable';
import ResultsForm from './components/forms/ResultsForm';
// APIs
import EmployeeAPI from "./apis/EmployeeAPI";
import ClockinAPI from "./apis/ClockinAPI";
import ResultAPI from './apis/ResultAPI';
// Types
import { IEmployee } from './types/Employee.types';
import { IClockin } from './types/Clockin.types';
// Bootstrap
import Accordion from 'react-bootstrap/Accordion';

function App() {
  // Requested data
  const [employees, setEmployees] = useState<IEmployee[] | null>(null);
  const [clockins, setClockins] = useState<IClockin[] | null>(null);
  const [results, setResults] = useState<IEmployee[] | null>(null);
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
  // Controlled inputs (result)
  const [query, setQuery] = useState<string | null>(null);

  useEffect(() => {
    EmployeeAPI.getAll()
    .then(res => {
      setEmployees(res.data.employees);
    })
    .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    ClockinAPI.getAll()
    .then(res => {
      setClockins(res.data.clockins);
    })
    .catch(err => console.log(err));
  }, []);

  const submitEmployee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(eID !== null && firstName !== null && lastName !== null && startDate !== null && salary !== null && risk !== null && remote !== null) {
      EmployeeAPI.create(eID, firstName, lastName, startDate, salary, risk, remote)
      .then(res => {
        if(res.data.success) {
          console.log("success");
        }
      })
    }
  }

  const submitClockin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(eID2);
    if(eID2 !== null) {
      ClockinAPI.create(eID2)
      .then(res => {
        if(res.data.success) {
          console.log("success");
        }
      })
      .catch(err => console.log(err));
    }
  }

  const submitQuery = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(query);
    if(query !== null) {
      ResultAPI.getAll(query)
      .then(res => {
        if(res.data.success) {
          console.log(res.data.employees);
          setResults(res.data.employees);
        } else {
          console.log("fail")
        }
      })
      .catch(err => console.log(err));
    }
  } 

  return (
    <div id="app">
      {employees &&
        <EmployeesTable employees={employees}/>
      }

      {employees &&
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
      }

      {clockins &&
        <ClockinTable clockins={clockins}/>
      }

      {clockins &&
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
      }

      {results &&
        <ResultsTable results={results}/>
      }

      {employees && clockins &&
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Query Employees</Accordion.Header>
            <Accordion.Body>
              <ResultsForm
                setQuery={setQuery}
                submitQuery={submitQuery}/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      }
    </div>
  )
}

export default App
