import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import ColorModeContext from "./ColorModeContext.js";

import { grey } from "@mui/material/colors";

export default function ColorModeProvider({ children }) {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        // shape: {
        //   borderRadius: 14,
        // },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: grey,
                divider: grey[300],
                background: {
                  default: grey[300],
                  paper: grey[50],
                },
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
              }
            : {
                // palette values for dark mode
                primary: grey,
                divider: grey[700],
                background: {
                  default: grey[900],
                  paper: grey[900],
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500],
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
