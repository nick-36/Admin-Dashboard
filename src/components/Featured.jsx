import React from "react";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Container = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  background-color: #fff;

  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  color: gray;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
`;
const Title = styled.h2``;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: center;
  margin-top: 2rem;
`;
const FeaturedChart = styled.div`
  width: 100px;
  height: 100px;
`;

const DescPrimary = styled.p`
  font-size: 1.6rem;
`;

const DescSecondary = styled.p`
  font-size: 1.4rem;
  text-align: center;
  padding: 0 2rem;
`;
const Amount = styled.span`
  font-size: 4rem;
  font-weight: 600;
  color: black;
`;
const Items = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const ItemTitle = styled.h3`
  font-size: 1.4rem;
`;
const ItemDesc = styled.p`
  display: flex;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  align-items: center;
  color: ${(props) => (props.type === "positive" ? "green" : "red")};
`;

function Featured(props) {
  return (
    <Container>
      <Top>
        <Title>TOTAL REVENUE</Title>
        <MoreVertIcon />
      </Top>
      <Bottom>
        <FeaturedChart>
          <CircularProgressbar
            value={70}
            text={"70%"}
            strokeWidth={5}
            styles={{
              path: {
                // Path color
                stroke: "teal",
              },
              text: {
                // Text color
                fill: "#82ca9d",
                // Text size
                fontSize: "2rem",
              },
            }}
          />
        </FeaturedChart>
        <DescPrimary>Total Sales Made Today</DescPrimary>
        <Amount>620$</Amount>
        <DescSecondary>
          Previous transactions processing. Last payments may not be included.
        </DescSecondary>
        <Items>
          <Item>
            <ItemTitle>Target</ItemTitle>
            <ItemDesc type="positive">
              <KeyboardArrowUpOutlinedIcon
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
              $12.4k
            </ItemDesc>
          </Item>
          <Item>
            <ItemTitle>Last Week</ItemTitle>
            <ItemDesc type="positive">
              <KeyboardArrowUpOutlinedIcon
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
              $12.4k
            </ItemDesc>
          </Item>
          <Item>
            <ItemTitle>Last Month</ItemTitle>
            <ItemDesc type="negative">
              <KeyboardArrowDownIcon
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
              $12.4k
            </ItemDesc>
          </Item>
        </Items>
      </Bottom>
    </Container>
  );
}

export default Featured;
