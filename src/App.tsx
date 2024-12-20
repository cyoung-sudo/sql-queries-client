import './App.scss'
// Components
import EmployeesTable from './components/tables/EmployeesTable'
import EmployeeForm from './components/forms/EmployeeForm'
import ClockinTable from './components/tables/ClockinTable'
import ClockinForm from './components/forms/ClockinForm'

function App() {
  return (
    <div id="app">
      <EmployeesTable/>
      <EmployeeForm/>
      <ClockinTable/>
      <ClockinForm/>
    </div>
  )
}

export default App
