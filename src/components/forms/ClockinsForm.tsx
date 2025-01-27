import "./ClockinsForm.scss";
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface IClockinsFormProps {
  setEID2: (eID: string) => void;
  submitClockin: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ClockinsForm: React.FC<IClockinsFormProps> = ({setEID2, submitClockin}) => {
  return(
    <Form className="clockinForm" onSubmit={submitClockin}>
      <Form.Group className="mb-3">
        <Form.Label>Employee ID</Form.Label>
        <Form.Control onChange={e => setEID2(e.target.value)} type="text" placeholder="Enter employee ID" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Clock-in
      </Button>
    </Form>
  )
};

export default ClockinsForm;