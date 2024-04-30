import Badge from "@mui/material/Badge";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
export const CartWidget = () => {
  return (
    <Link to="cart">
      <Badge badgeContent={4} color="primary">
        <ShoppingCart color="action" />
      </Badge>
    </Link>
  );
};
