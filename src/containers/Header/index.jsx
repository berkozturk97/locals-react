import React, { useState } from 'react';
import { LockOutlined } from '@ant-design/icons/lib/icons';
import { Col } from 'antd';
import { useSelector } from 'react-redux';
import { StyledModal } from '../../components/modal';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Global } from '../../constants/global';
import {
  HeaderBasketContainer,
  Container,
  LogoImg,
  FilterIcon,
  FilterIconContainer,
} from './header-style';
import logo from '../../assets/images/Logo.svg';
import Basket from '../Basket';
import Filters from '../Filters';

function Header() {
  const size = useWindowSize();
  const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);
  const [isOpenBasketModal, setIsOpenBasketModal] = useState(false);

  const { totalPrice } = useSelector((state) => state.basket);

  const handleModal = () => {
    setIsOpenFilterModal(!isOpenFilterModal);
  };

  const handleBasketModal = () => {
    if (size.width < 1200) {
      setIsOpenBasketModal(!isOpenBasketModal);
    }
  };

  return (
    <Container>
      <FilterIconContainer>
        <Col xs={2} sm={2} md={0}>
          <FilterIcon onClick={() => handleModal()} />
        </Col>
      </FilterIconContainer>
      <StyledModal
        visible={isOpenFilterModal}
        footer={null}
        onCancel={() => handleModal()}
      >
        <Filters />
      </StyledModal>
      <LogoImg src={logo} alt={Global.LOGO_IMG_ALT} />
      <HeaderBasketContainer onClick={() => handleBasketModal()}>
        <LockOutlined />
        <span>₺ {totalPrice.toFixed(2)}</span>
      </HeaderBasketContainer>
      <StyledModal
        visible={isOpenBasketModal}
        footer={null}
        onCancel={() => handleBasketModal()}
      >
        <Basket />
      </StyledModal>
    </Container>
  );
}

export default Header;
