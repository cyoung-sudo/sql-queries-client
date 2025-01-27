import "./ResultsForm.scss";
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface IResultsFormProps {
  setQuery: (query: string) => void;
  submitQuery: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ResultsForm: React.FC<IResultsFormProps> = ({setQuery, submitQuery}) => {
  return(
    <Form className="clockinForm" onSubmit={submitQuery}>
      <Form.Group className="mb-3">
        <Form.Label>SQL Query</Form.Label>
        <Form.Control
          onChange={e => setQuery(e.target.value)}
          as="textarea"
          placeholder="Enter SQL Query"
          style={{ height: '100px' }}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Query
      </Button>
    </Form>
  )
};

export default ResultsForm;