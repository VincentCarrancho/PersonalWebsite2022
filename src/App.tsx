import { useState } from "react";
import { Typography } from "@mui/material";
import PaperComponent from "./components/paperComponent";

function App() {
  return (
    <div className="App">
      <section
      // TItle Screen
      >
        <Typography variant="h1">Vincent Carrancho</Typography>
        <Typography variant="h2">A Full-Stack Software Engineer</Typography>
      </section>

      <section
      // about me screens
      >
        <Typography variant="h1">About Me</Typography>
        <PaperComponent title="My Projects">
          <Typography>Hello</Typography>
        </PaperComponent>
      </section>
    </div>
  );
}

export default App;
