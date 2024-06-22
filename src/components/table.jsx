import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const TableComponent = ({ products }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Número</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Formato</TableCell>
            <TableCell align="right">Tipo de Toma</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.product_number}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.product_number}
              </TableCell>
              <TableCell align="right">
                {product.active_ingredients[0].strength}
              </TableCell>
              <TableCell align="right">{product.dosage_form}</TableCell>
              <TableCell align="right">{product.route}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
