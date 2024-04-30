import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">MC</Link>
          </Typography>

          <ul style={{ LinkstStyle: "none", display: "flex", padding: "5px" }}>
            <Link style={{ padding: "5px", cursor: "pointer" }} to="/">
              Todas las categorías
            </Link>
            <Link
              style={{ padding: "5px", cursor: "pointer" }}
              to="/category/instrumentos-de-cuerda"
            >
              Cuerdas
            </Link>
            <Link
              style={{ padding: "5px", cursor: "pointer" }}
              to="/category/instrumentos-de-teclado"
            >
              Teclados
            </Link>
            <Link
              style={{ padding: "5px", cursor: "pointer" }}
              to="/category/instrumentos-de-percusion"
            >
              Percusión
            </Link>
            <Link
              style={{ padding: "5px", cursor: "pointer" }}
              to="/category/instrumentos-de-viento"
            >
              Instrumentos de viento
            </Link>
            <Link
              style={{ padding: "5px", cursor: "pointer" }}
              to="/category/amplificadores"
            >
              Amplificadores
            </Link>
            <Link
              style={{ padding: "5px", cursor: "pointer" }}
              to="/category/accesorios-de-audio"
            >
              Accesorios
            </Link>
          </ul>

          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
