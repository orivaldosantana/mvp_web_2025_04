import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { addColaborador } from "@/app/actions";

export default function FormColaborador() {
  return (
    <form action={addColaborador}>
      <Box sx={{ display: "flex", flexDirection: "column", margin: 4 }}>
        <TextField
          name="name"
          label="Nome"
          variant="filled"
          sx={{ marginBottom: 2 }}
        />
        <TextField name="mat" label="Matrícula" variant="filled" />
      </Box>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ margin: 4 }}
      >
        Adicionar
      </Button>
    </form>
  );
}
