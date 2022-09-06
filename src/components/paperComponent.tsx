import React from "react";
import { Typography, Divider, Paper, Card } from "@mui/material";

type Props = {
  title: string,
  children?: React.ReactNode,
}
/**
 * This is to construct a paper component for the about pages.
 */
function PaperComponent({ title, children }: Props) {
  return (
    <Paper
    >
      <Typography variant="h3">{title}</Typography>
      <Divider variant="middle" />
      <div>{children}</div>
    </Paper>
  );
}

export default PaperComponent;
