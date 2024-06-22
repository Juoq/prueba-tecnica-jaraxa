import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setData } from "../state/action";

export const DrugsList = ({ drugsResults }) => {
  const dispatch = useDispatch();
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      {drugsResults.length > 0 && (
        <List
          sx={{
            width: "100%",
            minWidth: { xs: "100%", sm: 460 },
            bgcolor: "#eeeeee",
            border: 1,
            borderRadius: 4,
            padding: { xs: 1, sm: 2 },
            borderColor: "efefef",
          }}
        >
          {drugsResults.map((drug, index) => (
            <ListItem
              key={index}
              disableGutters
              secondaryAction={
                <IconButton aria-label="comment">
                  <ArrowForwardIcon />
                </IconButton>
              }
              sx={{ cursor: "pointer" }}
              component={Link}
              to={`/details/${drug.application_number}`}
              onClick={() => dispatch(setData(drug.application_number, drug))}
            >
              <ListItemText
                primary={`Fármaco: ${
                  drug?.openfda?.generic_name ?? drug.products[0].brand_name
                }`}
                sx={{ color: "#000000" }}
              />
              {matches && (
                <ListItemText
                  primary={`Distribuidor: ${drug.sponsor_name}`}
                  sx={{ color: "#000000" }}
                />
              )}
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
