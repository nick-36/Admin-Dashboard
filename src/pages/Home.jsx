import styled from "styled-components";
import Charts from "../components/Charts";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import List from "../components/Table";
import Widget from "../components/Widget";

const Container = styled.div`
  display: flex;
`;

const MaintContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 6;
  /* background-color: aqua; */
`;

const WidgetsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  margin: 2rem;
`;

const ChartContainer = styled.div`
  display: flex;
  margin: 2rem;
  gap: 2rem;
`;

const TableContainer = styled.div`
  margin: 2rem;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.4);
`;
const TableTitle = styled.h2`
  margin: 2rem;
  letter-spacing: 1.4px;
  color: gray;
`;
function Home(props) {
  return (
    <>
      <Container>
        <Sidebar />
        <MaintContainer>
          <Navbar />
          <WidgetsContainer>
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </WidgetsContainer>
          <ChartContainer>
            <Featured />
            <Charts aspect={2 / 1} title="Last 6 Months Revenue" />
          </ChartContainer>
          <TableContainer>
            <TableTitle>Latest Transaction</TableTitle>
            <List />
          </TableContainer>
        </MaintContainer>
      </Container>
    </>
  );
}

export default Home;
