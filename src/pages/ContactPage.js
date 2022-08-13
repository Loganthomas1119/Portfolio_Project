import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';



const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Send Us Your Feedback' />
            <Row className='row-content'>
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    )
};

export default ContactPage;