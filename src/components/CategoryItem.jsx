import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({
    height: "20vh",
  })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  // color: white;
  // margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;
const CategoryItem = ({ item }) => {
  console.log("title", item.title);
  return (
    <Container>
      <Image src={item.img} />
      <Info>{item.info}</Info>
      <Title>{item.title}</Title>
      <Button>SHOP NOW</Button>
    </Container>
  );
};
export default CategoryItem;
