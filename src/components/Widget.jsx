import React from "react";
import styled from "styled-components";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  min-height: 150px;
  background-color: #fff;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 2rem;
`;
const Title = styled.span`
  font-size: 2rem;
`;
const Amount = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
`;
const Link = styled.span`
  font-size: 1.2rem;
  border-bottom: 1px solid gray;
  width: max-content;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.6rem;
`;
const Percentage = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

function Widget({ type, income }) {
  let diff = 20;
  let amount = 100;
  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              width: "24px",
              height: "24px",
              alignSelf: "flex-end",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
              width: "24px",
              height: "24px",
              alignSelf: "flex-end",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            style={{
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green",
              width: "24px",
              height: "24px",
              alignSelf: "flex-end",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
              width: "24px",
              height: "24px",
              alignSelf: "flex-end",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <Container>
      <Left>
        <Title>{data.title}</Title>
        <Amount>
          {data.isMoney && "$"}
          {amount}
        </Amount>
        <Link>{data.link}</Link>
      </Left>
      <Right>
        <Percentage>
          <KeyboardArrowUpIcon
            style={{
              width: "24px",
              height: "24px",
              color: "teal",
            }}
          />
          {diff}%
        </Percentage>
        {data.icon}
      </Right>
    </Container>
  );
}

export default Widget;
