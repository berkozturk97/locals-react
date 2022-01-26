import React from "react";
import BrandOption from "./brands";
import { Container } from "./filters-style";
import SortingOption from "./sorting";
import TagOption from "./tags";

const Filters = () => {
  return (
    <Container>
      <SortingOption />
      <BrandOption />
      <TagOption />
    </Container>
  );
};

{/* <div
style={{
  backgroundColor: "red",
  width: "25%",
  height: 600,
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
  justifyContent: 'center'
}}
>
<div style={{backgroundColor: "yellow",
  width: "75%",
  height: "33%"}}></div>
<div style={{backgroundColor: "pink",
  width: "75%",
  height: "33%"}}></div>
<div style={{backgroundColor: "orange",
  width: "75%",
  height: "33%"}}></div>
</div> */}

export default Filters;
