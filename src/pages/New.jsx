import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { display } from "@mui/system";

const Container = styled.div`
  display: flex;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 6;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 2rem;
`;
const Top = styled.div`
  padding: 2rem;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 0px 10px 1px rgba(201, 201, 201, 0.47);
`;
const Title = styled.h1`
  color: gray;
  font-weight: 500;
  letter-spacing: 1px;
`;
const Bottom = styled.div`
  display: flex;
  width: 100%;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  padding: 2rem;
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 2rem 0;
`;

const InputsContainer = styled.div`
  flex: 2;
  margin-top: 2rem;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
`;
const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  gap: 1rem;
`;
const Label = styled.label`
  font-size: 1.6rem;

  display: flex;
  gap: 1rem;
  align-items: center;
`;
const Input = styled.input`
  padding: 0.6rem;
  border: none;
  outline: none;
  border-bottom: 1px solid lightgray;
  font-size: 1.6rem;
  width: 100%;
`;
const Button = styled.div`
  width: 150px;
  font-size: 1.6rem;

  padding: 10px;
  border: none;
  background-color: teal;
  border-radius: 10px;
  color: white;
  /* font-weight: bold; */
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
  margin: 2rem 0;
`;

function New({ inputs, title }) {
  const [file, setFile] = useState("");
  return (
    <Container>
      <Sidebar />
      <MainContainer>
        <Navbar />
        <Wrapper>
          <Top>
            <Title>{title}</Title>
          </Top>
          <Bottom>
            <ImageContainer>
              <Img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt="USER PROFILE"
              />
            </ImageContainer>
            <InputsContainer>
              <FormInput>
                <Label htmlFor="file" type="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon
                    style={{ width: "24px", height: "24px", cursor: "pointer" }}
                  />
                </Label>

                <Input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </FormInput>
              <Form>
                {inputs.map((input) => {
                  return (
                    <FormInput key={input.id}>
                      <Label>{input.label}</Label>
                      <Input
                        type={input.type}
                        placeholder={input.placeholder}
                        autocomplete={input.autocomplete}
                      />
                    </FormInput>
                  );
                })}
              </Form>
              <Button>SAVE</Button>
            </InputsContainer>
          </Bottom>
        </Wrapper>
      </MainContainer>
    </Container>
  );
}

export default New;
