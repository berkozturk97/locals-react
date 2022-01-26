import React from "react";
import { BasketContainer, Container, LogoText } from "./header-style";

const Header = () => {
  return (
    <Container>
      <LogoText>Market</LogoText>
      <BasketContainer></BasketContainer>
    </Container>
  );
};

export default Header;
