import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider
      theme={createTheme({
        typography: {
          h1: {
            fontWeight: 700,
          },
          h2: {
            fontWeight: 600,
          },
        },
      })}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
