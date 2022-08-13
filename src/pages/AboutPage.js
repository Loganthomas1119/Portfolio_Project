import { Container } from 'reactstrap'
import SubHeader from '../components/SubHeader';
import aboutUs from '../app/assets/img/aboutus2.png';

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current=""></SubHeader>
            <div>
                <img class="image responsive" src={aboutUs} alt="..." id="responsive" width="100%">
                </img>
            </div>
        </Container>
    );
};

export default AboutPage;