import "./ClockinTable.scss";
// Bootstrap
import Table from 'react-bootstrap/Table';

interface IClockin {
  EID: string;
  clockins: number;
  lastClockin: Date;
}

const testData: IClockin[] = [
  {
    EID: "12345",
    clockins: 5,
    lastClockin: new Date()
  },
  {
    EID: "12346",
    clockins: 5,
    lastClockin: new Date()
  },
  {
    EID: "12347",
    clockins: 5,
    lastClockin: new Date()
  },
];

const ClockinTable = () => {
  return(
    <Table className="clockinTable" striped bordered hover>
      <thead>
        <tr>
          <th>EID</th>
          <th>Clock-ins</th>
          <th>Last Clock-in</th>
        </tr>
      </thead>
      <tbody>
        {testData.map((clockin, idx) => (
          <tr key={idx}>
            <td>{clockin.EID}</td>
            <td>{clockin.clockins}</td>
            <td>{clockin.lastClockin.toDateString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
};

export default ClockinTable;