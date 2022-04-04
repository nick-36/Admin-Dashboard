import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Badge from "@mui/material/Badge";

// import { DarkModeContext } from "../../context/darkModeContext";

const Container = styled.div`
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  border: 1px solid teal;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;
const Input = styled.input`
  padding: 5px;
  border: none;
  outline: none;
  background-color: transparent;
`;

const List = styled.ul`
  display: flex;
  gap: 2rem;
  margin-right: 2rem;
`;
const ListItem = styled.li`
  list-style: none;
  display: flex;

  align-items: center;
  padding: 4px 0;
  cursor: pointer;
`;

const ListText = styled.span`
  font-size: 1.6rem;
`;
const Img = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;
function Navbar(props) {
  return (
    <Container>
      <InputContainer>
        <Input type="text" placeholder="search.." />
        <SearchOutlinedIcon
          style={{ width: "24px", height: "24px", color: "teal" }}
        />
      </InputContainer>
      <List>
        <ListItem>
          <LanguageOutlinedIcon style={{ width: "20px", height: "20px" }} />
          <ListText>English</ListText>
        </ListItem>

        <ListItem>
          <FullscreenExitOutlinedIcon
            style={{ width: "20px", height: "20px" }}
          />
        </ListItem>
        <ListItem>
          <Badge badgeContent={4} color="secondary">
            <NotificationsNoneOutlinedIcon
              style={{ width: "20px", height: "20px" }}
            />
          </Badge>
        </ListItem>
        <ListItem>
          <Badge badgeContent={4} color="secondary">
            <ChatBubbleOutlineOutlinedIcon
              style={{ width: "20px", height: "20px" }}
            />
          </Badge>
        </ListItem>
        <ListItem>
          <ListOutlinedIcon style={{ width: "20px", height: "20px" }} />
        </ListItem>
        <Link to="/users/test">
          <ListItem>
            <Img
              src="https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png"
              alt="AVATAR PROFILE"
            />
          </ListItem>
        </Link>
      </List>
    </Container>
  );
}

export default Navbar;
