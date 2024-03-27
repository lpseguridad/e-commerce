import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { CartWidget } from "../../pages/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MC
          </Typography>

          <ul style={{ listStyle: "none", display: "flex", padding: "5px" }}>
            <li
              style={{ padding: "5px", cursor: "pointer" }}
              onClick={() => {
                alert("Soy clickeable");
              }}
            >
              Productos
            </li>
            <li
              style={{ padding: "5px", cursor: "pointer" }}
              onClick={() => {
                alert("Soy clickeable");
              }}
            >
              Blog
            </li>
            <li
              style={{ padding: "5px", cursor: "pointer" }}
              onClick={() => {
                alert("Soy clickeable");
              }}
            >
              Login
            </li>
          </ul>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
