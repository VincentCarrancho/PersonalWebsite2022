import React from 'react'
import { Typography, Divider, Paper, Card } from "@mui/material";

type ProjectDetails = {
  name: string,
  company: string,
  techUsed: string[],
  description: string,
  points: string[]
}


function IndividualProject({ name, company, techUsed, description, points }: ProjectDetails) {
  return (
    <Card>
      <Typography variant='h4'>{name}</Typography>
      <Typography variant='subtitle1'>{company}</Typography>
      <Typography variant='body1'>{techUsed}</Typography>
      <Typography variant='body1'>{description}</Typography>
      <Typography variant='body1'>{points}</Typography>
    </Card>
  )
}

export default IndividualProject