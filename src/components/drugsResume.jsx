import { Box, Button, Table, Typography } from "@mui/material";
import { getStateData } from "../state/configureStore";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { ModalComponent } from "./modal";
import { TableComponent } from "./table";
import { Link } from "react-router-dom";

export const DrugsResume = () => {
  const location = useLocation().pathname.split("/");
  const productID = location[location.length - 1];
  const selector = useSelector(getStateData(productID));

  return (
    <Box
      m={2}
      sx={{
        border: 0.1,
        borderColor: "#000000",
        borderRadius: 2,
        padding: 3,
        margin: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Button component={Link} to={"/"}>
        Volver al buscador
      </Button>

      <Typography variant="h2">
        {selector?.openfda?.generic_name[0] ?? selector.products[0].brand_name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h5">
          {selector?.openfda?.brand_name?.length > 1
            ? "Laboratorios:"
            : "Laboratorio:"}
        </Typography>
        {selector?.openfda?.manufacturer_name?.length > 1 ? (
          <ModalComponent
            textOpenModal={"Ver todos los laboratorios"}
            selector={selector?.openfda?.manufacturer_name}
          />
        ) : (
          <Typography variant="h6">
            {selector?.openfda?.manufacturer_name[0] ??
              "No hay datos que mostrar"}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h5">
          {selector?.openfda?.brand_name?.length > 1
            ? "Nombres Comerciales:"
            : "Nombre Comercial:"}
        </Typography>
        {selector?.openfda?.brand_name?.length > 1 ? (
          <ModalComponent
            textOpenModal={"Ver todos los nombres comerciales"}
            selector={selector?.openfda?.brand_name}
          />
        ) : (
          <Typography variant="h6">
            {selector?.openfda?.brand_name[0] ?? "No hay datos que mostrar"}
          </Typography>
        )}
      </Box>
      <Typography variant="h5">{"Productos: "}</Typography>
      <TableComponent products={selector.products} />

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}
      >
        <Typography variant="h5">{"Distribuidor: "}</Typography>
        <Typography variant="h6">{selector.sponsor_name}</Typography>
      </Box>
    </Box>
  );
};
