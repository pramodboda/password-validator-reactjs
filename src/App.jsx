import "./App.css";

import ColorModeProvider from "./contexts/ColorModeProvider";
import Box from "@mui/material/Box";

import PasswordValidator from "./components/PasswordValidator/PasswordValidator";

import ToggleThemeBtn from "./components/ToggleThemeBtn/ToggleThemeBtn";

function App() {
  return (
    <ColorModeProvider>
      <Box
        display="flex"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >
        <ToggleThemeBtn />
        <PasswordValidator />
      </Box>
    </ColorModeProvider>
  );
}

export default App;
