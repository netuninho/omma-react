import React, { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import logo from "../../assets/logo.png";
import * as S from "./styled";

const Header: React.FC = () => {

    const location = useLocation()
    useEffect(() => {console.log(location.pathname)},[location.pathname]);

  return(
      <S.HeaderContainer>
          <S.HeaderLogoArea>
            <S.HeaderLogo src={logo} alt="omma" />
          </S.HeaderLogoArea>
          <S.HeaderNavbar>
              <S.Navbar>
                  <S.NavbarItem>
                      <S.NavbarLink active={location.pathname} to="/">Inicio</S.NavbarLink>
                  </S.NavbarItem>

                  <S.NavbarItem>
                      <S.NavbarLink active={location.pathname} to="/receitas">Receitas</S.NavbarLink>
                  </S.NavbarItem>

                  <S.NavbarItem>
                      <S.NavbarLink active={location.pathname} to="/contato">Contatos</S.NavbarLink>
                  </S.NavbarItem>
              </S.Navbar>
          </S.HeaderNavbar>
      </S.HeaderContainer>
  );
}

export default Header;