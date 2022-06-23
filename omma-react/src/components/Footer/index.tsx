import React from 'react';
import logo from "../../assets/logo.png";
import * as S from "./styled";

const Footer: React.FC = () => {
  return(
      <S.FooterContainer>
          <S.FooterLogo src={logo} alt="omma" />
          <S.FooterText>
            © 2022 omma - Todos os direitos são de vocês
          </S.FooterText>
      </S.FooterContainer>
  );
}

export default Footer;