import React from "react";
import { AddButton, CountButton } from "../../components/button";
import { Container, Count } from "./button-groups-style";

const ButtonGroup = () => {
  return (


    <AddButton>Add</AddButton>
    // <Container>
    //   <CountButton>-</CountButton>
    //   <Count><span>1</span></Count>
    //   <CountButton>+</CountButton>
    // </Container>
  );
};

export default ButtonGroup;