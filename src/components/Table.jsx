import React from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Container = styled.div`
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  margin: 1rem 2rem;
`;
const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;
function List(props) {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                Tracking ID
              </TableCell>
              <TableCell style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                Product
              </TableCell>
              <TableCell style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                Customer
              </TableCell>
              <TableCell style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                Date
              </TableCell>
              <TableCell style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                Amount
              </TableCell>
              <TableCell style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                Payment Method
              </TableCell>
              <TableCell style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ fontSize: "1.6rem" }}
                >
                  {row.id}
                </TableCell>
                <TableCell
                  style={{
                    fontSize: "1.6rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Img src={row.img} alt="" c />
                  {row.product}
                </TableCell>
                <TableCell style={{ fontSize: "1.6rem" }}>
                  {row.customer}
                </TableCell>
                <TableCell style={{ fontSize: "1.6rem" }}>{row.date}</TableCell>
                <TableCell style={{ fontSize: "1.6rem" }}>
                  {row.amount}
                </TableCell>
                <TableCell style={{ fontSize: "1.6rem" }}>
                  {row.method}
                </TableCell>
                <TableCell
                  style={{
                    fontSize: "1.6rem",
                    color: `${row.status === "Approved" ? "teal" : "gold"}`,
                  }}
                  status={row.status}
                >
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default List;
