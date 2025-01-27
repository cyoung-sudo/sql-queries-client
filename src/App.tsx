import './App.scss'
// React
import { useState, useEffect } from 'react';
// Components
import EmployeesTable from './components/tables/EmployeesTable'
import EmployeesForm from './components/forms/EmployeesForm'
import ClockinsTable from './components/tables/ClockinsTable';
import ClockinsForm from './components/forms/ClockinsForm'
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
  // Refresh
  const [refreshEmployees, setRefreshEmployees] = useState(false);
  const [refreshclockins, setRefreshClockins] = useState(false);

  useEffect(() => {
    EmployeeAPI.getAll()
    .then(res => {
      setEmployees(res.data.employees);
    })
    .catch(err => console.log(err));
  }, [refreshEmployees]);

  useEffect(() => {
    ClockinAPI.getAll()
    .then(res => {
      setClockins(res.data.clockins);
    })
    .catch(err => console.log(err));
  }, [refreshclockins]);

  const submitEmployee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(eID !== null && firstName !== null && lastName !== null && startDate !== null && salary !== null && risk !== null && remote !== null) {
      EmployeeAPI.create(eID, firstName, lastName, startDate, salary, risk, remote)
      .then(res => {
        if(res.data.success) {
          console.log("success");
          setRefreshEmployees(state => !state);
        }
      })
    }
  }

  const submitClockin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(eID2 !== null) {
      ClockinAPI.create(eID2)
      .then(res => {
        if(res.data.success) {
          console.log("success");
          setRefreshClockins(state => !state);
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
      <div id="app-employees">
        {employees &&
          <div id="app-employees-table">
            <EmployeesTable employees={employees}/>
          </div>
        }

        {employees &&
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Add Employee</Accordion.Header>
              <Accordion.Body>
                <EmployeesForm
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
      </div>

      <div id="app-clockins">
        {clockins &&
          <div id="app-employees-table">
            <ClockinsTable clockins={clockins}/>
          </div>
        }

        {clockins &&
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Add Clockin</Accordion.Header>
              <Accordion.Body>
                <ClockinsForm
                  setEID2={setEID2}
                  submitClockin={submitClockin}/>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        }
      </div>

      <div id="app-results">
        {results &&
          <div id="app-results-table">
            <ResultsTable results={results}/>
          </div>
        }

        {employees && clockins &&
          <Accordion>
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
    </div>
  )
}

export default App
