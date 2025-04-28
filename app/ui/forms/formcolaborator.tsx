import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FormColaborador() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", margin: 4 }}>
      <TextField
        id="filled-basic"
        label="Nome"
        variant="filled"
        sx={{ marginBottom: 2 }}
      />
      <TextField id="filled-basic" label="Matrícula" variant="filled" />
    </Box>
  );
}
