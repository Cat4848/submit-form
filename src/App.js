import 'bootstrap/dist/css/bootstrap.min.css';
import SubmitForm from './components/SubmitForm/SubmitForm';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <Container>
      <h1>Submit Form</h1>
      <SubmitForm />
    </Container>
  );
}
