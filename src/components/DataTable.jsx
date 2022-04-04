import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";
import { UserColumns, DataRows } from "../DataSource";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  font-size: 2rem;
  /* margin: 2rem; */
`;

function DataTable() {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", gap: "2rem", cursor: "pointer" }}>
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div>View</div>
            </Link>
            <div
              className="deleteButton"
              style={{ color: "red" }}
              //   onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <Container style={{ height: "600px", width: "100%" }}>
      <DataGrid
        rows={DataRows}
        columns={UserColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        style={{ fontSize: "1.6rem" }}
      />
    </Container>
  );
}

export default DataTable;
