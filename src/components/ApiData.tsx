import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
interface Props {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const ApiData: React.FC<Props> = ({ loading, setLoading }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setLoading(true);
    console.log("I ams hear ", loading);

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setRows(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "title",
      headerName: "Title",
      width: 200,
      innerHeight: 500,

      renderCell: (params: GridRenderCellParams) => (
        <div style={{ whiteSpace: "normal", padding: "10px", margin: "10px" }}>
          {params.value}
        </div>
      ),
    },
    {
      field: "body",
      headerName: "Body",
      width: 800,
      renderCell: (params: GridRenderCellParams) => (
        <div
          style={{
            whiteSpace: "normal",
            height: "100%",
            padding: "10px",
            margin: "10px",
          }}
        >
          {params.value}
        </div>
      ),
    },
  ];

  return (
    <>
      <Typography
        display="flex"
        justifyContent={"center"}
        marginTop="30px"
        color={"blueviolet"}
        fontSize={60}
        fontWeight={800}
        sx={{ fontSize: "h6.fontSize" }}
        variant="h2"
        component="h2"
      >
        {loading ? "Loading Data..." : "Fetched Data"}
      </Typography>

      {!loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            margin: "10px",
          }}
        >
          <Box sx={{ maxWidth: "80%", maxHeight: "100%" }}>
            <DataGrid rowHeight={100} rows={rows} columns={columns} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default ApiData;
