import "./App.css";

import Box from "@mui/material/Box";

import PasswordValidator from "./components/PasswordValidator/PasswordValidator";

function App() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <PasswordValidator />
      </Box>
    </>
  );
}

export default App;
