import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import DataTable from "../components/DataTable";
import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";
const Container = styled.div`
  display: flex;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 6;
`;
const ListContainer = styled.div`
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
  margin: 1rem;
`;

function List() {
  return (
    <Container>
      <Sidebar />
      <MainContainer>
        <Navbar />
        <ListContainer>
          <DataTable />
        </ListContainer>
      </MainContainer>
    </Container>
  );
}

export default List;
