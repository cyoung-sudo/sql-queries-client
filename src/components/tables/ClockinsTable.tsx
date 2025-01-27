import "./ClockinsTable.scss";
// Types
import { IClockin } from "../../types/Clockin.types";
// Bootstrap
import Table from 'react-bootstrap/Table';
import React from "react";

interface IClockinsProps {
  clockins: IClockin[]
}

const ClockinsTable: React.FC<IClockinsProps> = ({clockins}) => {
  return(
    <Table className="clockinTable" striped bordered hover>
      <thead>
        <tr>
          <th>eID</th>
          <th>Clock-ins</th>
          <th>Last Clock-in</th>
        </tr>
      </thead>
      <tbody>
        {clockins.map((clockin, idx) => (
          <tr key={idx}>
            <td>{clockin.eID}</td>
            <td>{clockin.clockins}</td>
            <td>{clockin.lastClockin.slice(0, 10)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
};

export default ClockinsTable;