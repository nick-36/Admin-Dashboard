import Home from "./pages/Home";
import List from "./pages/List";

import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Single from "./pages/Single";
import Login from "./pages/Login";
import New from "./pages/New";
import { userInputs, productInputs } from "./FormSource";

const Container = styled.div``;

function App() {
  return (
    <Container>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users">
          <Route index element={<List />} />
          <Route path=":userID" element={<Single />} />
          <Route
            path="new"
            element={<New inputs={userInputs} title="ADD NEW USER" />}
          />
        </Route>
        <Route path="/products">
          <Route index element={<List />} />
          <Route path=":productID" element={<Single />} />
          <Route
            path="new"
            element={<New inputs={productInputs} title="ADD NEW PRODUCT" />}
          />
        </Route>
        <Route path="/orders" element={<List />} />
        {/* <Route path="/new" element={<New />} /> */}
      </Routes>
    </Container>
  );
}

export default App;
