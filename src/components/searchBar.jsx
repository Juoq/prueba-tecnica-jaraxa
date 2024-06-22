import { Box, Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";

export const SearchBar = ({ searchDrug }) => {
  const [drugName, setDrugName] = useState("");
  return (
    <FormControl sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
      <Box sx={{ display: "flex", gap: 5, flexDirection: {xs: 'column', sm: "row" } }}>
        <TextField
          required
          label="Nombre del fármaco"
          variant="outlined"
          onChange={(event) => setDrugName(event.target.value)}
          sx={{ minWidth: 300 }}
        />
        <Button
          variant="outlined"
          onClick={() => searchDrug(drugName)}
          disabled={drugName === ""}
        >
          Enviar consulta
        </Button>
      </Box>
    </FormControl>
  );
};
