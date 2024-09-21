import React from "react";

import CancelIcon from "@mui/icons-material/Cancel";
import Logo from "./components/Logo";

import { AppBar, IconButton, Toolbar, Box, createTheme, CssBaseline } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    mode: "light",
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[600],
    },
    background: {
      default: grey[300],
    },
  },
});

export default function App() {
  const handleClose = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Logo width={32} height={32} />
            <IconButton
              aria-label="close"
              onClick={handleClose}
              className="close-app-button"
              sx={() => ({
                color: red[400],
              })}
            >
              <CancelIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
