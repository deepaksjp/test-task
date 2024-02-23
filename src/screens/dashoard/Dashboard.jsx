import React from "react";
import { Container, Box } from "@mui/material";
import { SideBar } from "../../component/SideBar";
export const Dashboard = () => {
  return (
    <>
      <SideBar />
      <Container maxWidth="sm">
        <Box
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <h1>Welcome to Dashboard</h1>
        </Box>
      </Container>
    </>
  );
};
