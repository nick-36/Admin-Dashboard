import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* background-color: aliceblue; */
  min-height: 100vh;
  font-size: 1.6rem;
`;
const Logo = styled.p`
  text-align: center;
  font-size: 2rem;
  padding-top: 5px;
  color: black;
`;

const Hr = styled.div`
  height: 2px;
  border-bottom: 2px solid white;
  box-shadow: 0 0 20px rgb(0, 0, 0, 0.2);
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;
const Label = styled.p`
  font-size: 1.4rem;
  margin: 1rem 1.4rem;
`;
const List = styled.ul``;
const ListItem = styled.li`
  list-style: none;
  display: flex;
  margin-left: 2rem;
  gap: 1rem;
  align-items: center;
  padding: 4px 0;
  cursor: pointer;
`;
const ListText = styled.span`
  color: teal;
`;
const Center = styled.div``;

function Sidebar(props) {
  return (
    <Container>
      <Top>
        <Link className="link" to="/">
          <Logo>Admin</Logo>
        </Link>
        <Hr />
      </Top>
      <Center>
        <Label>Main</Label>
        <List>
          <ListItem>
            <DashboardIcon
              style={{ height: "24px", width: "24px", color: "teal" }}
            />
            <ListText>Dashboard</ListText>
          </ListItem>
        </List>
        <Label>Lists</Label>
        <List>
          <ListItem>
            <PersonOutlineIcon
              style={{ height: "24px", width: "24px", color: "teal" }}
            />
            <Link to="/users" className="link">
              <ListText>Users</ListText>
            </Link>
          </ListItem>
          <ListItem>
            <StoreIcon
              style={{
                height: "24px",
                width: "24px",
                color: "teal",
              }}
            />
            <Link to="/products" className="link">
              <ListText>Products</ListText>
            </Link>
          </ListItem>
          <ListItem>
            <LocalShippingIcon
              style={{ height: "24px", width: "24px", color: "teal" }}
            />
            <Link className="link" to="/orders">
              <ListText>Orders</ListText>
            </Link>
          </ListItem>
          <ListItem>
            <CreditCardIcon
              style={{ height: "24px", width: "24px", color: "teal" }}
            />
            <ListText>Delivery</ListText>
          </ListItem>
        </List>
        <Label>Useful</Label>
        <List>
          <ListItem>
            <InsertChartIcon
              style={{ height: "24px", width: "24px", color: "teal" }}
            />
            <ListText>Stats</ListText>
          </ListItem>
          <ListItem>
            <NotificationsNoneIcon
              style={{ height: "24px", width: "24px", color: "teal" }}
            />
            <ListText>Notification</ListText>
          </ListItem>
        </List>
        <Label>Service</Label>
        <List>
          <ListItem>
            <SettingsApplicationsIcon
              style={{ height: "24px", width: "24px", color: "teal" }}
            />
            <ListText>System Health</ListText>
          </ListItem>
          <ListItem>
            <SettingsApplicationsIcon
              style={{ height: "24px", width: "24px", color: "teal" }}
            />
            <Link to="/new">
              <ListText>New</ListText>
            </Link>
          </ListItem>{" "}
          <ListItem>
            <SettingsApplicationsIcon
              style={{ height: "24px", width: "24px", color: "teal" }}
            />
            <ListText>Settings</ListText>
          </ListItem>
        </List>
        <Label>User</Label>
        <List>
          <ListItem>
            <ExitToAppIcon
              style={{ height: "24px", width: "24px", color: "teal" }}
            />
            <Link className="link" to="/users/test">
              <ListText>Profile</ListText>
            </Link>
          </ListItem>
          <ListItem>
            <ExitToAppIcon
              style={{ height: "24px", width: "24px", color: "teal" }}
            />
            <ListText>Logout</ListText>
          </ListItem>
        </List>
      </Center>
    </Container>
  );
}

export default Sidebar;
