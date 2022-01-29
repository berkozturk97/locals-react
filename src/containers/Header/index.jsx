import { LockOutlined } from '@ant-design/icons/lib/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/Logo.svg';
import { HeaderBasketContainer, Container, LogoImg } from './header-style';

function Header() {
  const { totalPrice } = useSelector((state) => state.basket);
  return (
    <Container>
      <LogoImg src={logo} alt="locals market" />
      <HeaderBasketContainer>
        <LockOutlined />
        ₺ {totalPrice.toFixed(2)}
      </HeaderBasketContainer>
    </Container>
  );
}

export default Header;
