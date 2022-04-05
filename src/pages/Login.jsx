import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  min-width: 25%;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  outline: none;
  border: 1px solid lightgray;

  border-radius: 10px;
`;

const Button = styled.button`
  width: 40%;
  align-self: center;
  border: none;
  padding: 15px 20px;
  margin: 1rem auto;
  background-color: #222;
  color: white;
  cursor: pointer;

  border-radius: 10px;
`;


function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            value={username}
            placeholder="username"
            name="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            value={password}
            placeholder="password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link
            to="/"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <Button>LOGIN</Button>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
