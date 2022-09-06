import { useState } from "react";
import { Typography, Grid, TextField } from "@mui/material";
import PaperComponent from "./components/paperComponent";
import IndividualProject from "./components/projectComponent";

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
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={8}>
            <PaperComponent title="My Projects">
              <IndividualProject
                name="Billing Report Full-Stack Web App"
                company="MetLife Technical University (MTU) Internship"
                techUsed={["React, Spring Boot, Typescript, Java, Material UI, IBM DB2, Microsoft Excel VBA Macros"]}
                description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque numquam ducimus porro odio, officia ratione, quia non, recusandae inventore assumenda unde at nemo explicabo dolor facilis repellat ad voluptate corporis deserunt deleniti veritatis esse eum est laudantium! Incidunt saepe tempore laborum magnam deserunt sed odit error repudiandae. Eius recusandae sunt architecto animi omnis quia pariatur saepe officia inventore modi asperiores accusamus, eveniet sequi consectetur rem id minus maiores quaerat, enim tempora aperiam doloribus. Quia sunt eligendi ut iusto laboriosam amet reiciendis a, voluptatibus officiis consequatur quae animi quo, culpa velit natus mollitia facilis placeat ipsum quisquam temporibus reprehenderit quos? Rerum?"}
                points={["React, Spring Boot, Typescript, Java, Material UI, IBM DB2, Microsoft Excel VBA Macros"]}
              />
            </PaperComponent>
          </Grid>
          <Grid item xs={12} sm={12} md={4}><PaperComponent title="My Skills">
            <Typography>Libraries and Frameworks</Typography>
            <Typography>Programming Languages</Typography>
            <Typography>Software</Typography>
          </PaperComponent></Grid>
          <Grid item xs={12} sm={12} md={5}><PaperComponent title="My Links">
            <Typography>Libraries and Frameworks</Typography>
            <Typography>Programming Languages</Typography>
            <Typography>Software</Typography>
          </PaperComponent></Grid>
          <Grid item xs={12} sm={12} md={7}><PaperComponent title="Contact">
            <TextField
              variant="outlined"
              label='Full Name'
            />
            <TextField
              variant="outlined"
              label='Email Address'
            />
            <TextField
              variant="outlined"
              maxRows={4}
              label='Your Message'
              fullWidth
              multiline />
          </PaperComponent></Grid>
        </Grid>
      </section>
    </div>
  );
}

export default App;
