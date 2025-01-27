import "./ClockinsTable.scss";
// Types
import { IClockin } from "../../types/Clockin.types";
// Bootstrap
import Table from 'react-bootstrap/Table';
import React from "react";
// Animation
import { motion } from "framer-motion";

interface IClockinsProps {
  clockins: IClockin[]
}

const ClockinsTable: React.FC<IClockinsProps> = ({clockins}) => {
  return(
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
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
    </motion.div>
  )
};

export default ClockinsTable;