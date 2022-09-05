import React from "react";
import { Typography, Divider, Paper } from "@mui/material";

function PaperComponent({ children }: any, props: any) {
  return (
    <Paper
      sx={
        {
          // TODO: Figure out how to do a glass morphism effect.
          // TODO: Pass props for colors.
        }
      }
    >
      <Typography variant="h3">{props.title}</Typography>
      <Divider variant="middle" />
      <div>{children}</div>
    </Paper>
  );
}

export default PaperComponent;
