import React from "react";
import styled from "styled-components";
import Charts from "../components/Charts";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import List from "../components/Table";

const Container = styled.div`
  display: flex;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 6;
`;
const Wrapper = styled.div``;
const Top = styled.div`
  display: flex;
  margin: 2rem;
  gap: 1rem;
`;
const Left = styled.div`
  flex: 1;

  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
`;
const Title = styled.h2`
  padding: 1rem;
  font-size: 3rem;
  color: lightgray;
  font-weight: 500;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  /* align-items: center; */
  gap: 1rem;
  justify-content: space-between;
`;
const ImageContainer = styled.div``;
const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 1rem;
`;
const Info = styled.div``;
const Username = styled.h1`
  font-size: 3rem;
  padding: 1rem 0;
  color: gray;
`;
const Desc = styled.div`
  padding: 0.5rem;
  color: gray;
  letter-spacing: 1px;
`;
const DescTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
`;
const DescValue = styled.span`
  font-size: 1.4rem;
`;

const Right = styled.div`
  flex: 2;

  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
`;
const Bottom = styled.div``;

function Single(props) {
  return (
    <Container>
      <Sidebar />
      <MainContainer>
        <Navbar />
        <Wrapper>
          <Top>
            <Left>
              <Title>INFORMATION</Title>
              <Details>
                <ImageContainer>
                  <Img
                    src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    alt="USER PROFILE"
                  />
                </ImageContainer>
                <Info>
                  <Username>Jane Doe</Username>
                  <Desc>
                    <DescTitle>Email: </DescTitle>
                    <DescValue>janedoe@gmail.com</DescValue>
                  </Desc>
                  <Desc>
                    <DescTitle>Phone: </DescTitle>
                    <DescValue>+1 2345 67 89</DescValue>
                  </Desc>
                  <Desc>
                    <DescTitle>Address: </DescTitle>
                    <DescValue>Elton St. 234 Garden Yd. NewYork</DescValue>
                  </Desc>
                  <Desc>
                    <DescTitle>Country: </DescTitle>
                    <DescValue>USA</DescValue>
                  </Desc>
                </Info>
              </Details>
            </Left>
            <Right>
              <Charts aspect={3 / 1} title="User Spending ( Last 6 Months)" />
            </Right>
          </Top>
          <Bottom>
            <List />
          </Bottom>
        </Wrapper>
      </MainContainer>
    </Container>
  );
}

export default Single;
