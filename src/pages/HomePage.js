import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import AnimatedDisplayCard from '../features/display/AnimatedDisplayCard';
import Product3 from '../app/assets/img/Product3/product3.1.png';
import Product4 from '../app/assets/img/Product4/product4.1.png';
import Product5 from '../app/assets/img/Product5/product5.1.png';
import * as React from 'react';


const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <img src={Product3} />
            <img src={Product4} />
            <img src={Product5} />
            
        </Container>
    );
};

export default HomePage;