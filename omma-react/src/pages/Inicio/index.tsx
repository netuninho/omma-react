import React from 'react';
import Container from '../../components/Container'
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import * as S from './styled';

const Inicio: React.FC = () => {
  return (
    <Container>
        {/* {Header} */}
        <Header/>

        {/* {Footer} */}
        <Footer/>
    </Container>
);
}

export default Inicio;
