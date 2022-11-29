import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <Box mt={2}>
      <Container maxWidth="sm">
        <Box
          sx={{
            minWidth: 300,
            border: "1px solid grey",
            borderRadius: "5px",
            padding: "1rem",
          }}
        >
          <Box mb={3} fullWidth textAlign={"center"}>
            <Typography
              variant="h4"
              align="center"
              component="h5"
              sx={{ color: "black", textAlign: "center" }}
            >
              Welcome !
            </Typography>
          </Box>
          <TextField
            sx={{ marginBottom: "1rem" }}
            size="small"
            fullWidth
            label="Email"
            variant="outlined"
          />
          <TextField
            size="small"
            sx={{ marginBottom: "1rem" }}
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
          />
          <Button size="large" disableElevation variant="contained" fullWidth>
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
