import { LockOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import logo from '../../assets/images/Logo.svg'
import { HeaderBasketContainer, Container, LogoImg } from "./header-style";

const Header = () => {
  return (
    <Container>
      <LogoImg src={logo} alt="locals market"/>
      <HeaderBasketContainer>
      <LockOutlined /> ₺ 16.99
      </HeaderBasketContainer>
    </Container>
  );
};

export default Header;
