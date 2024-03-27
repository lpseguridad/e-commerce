import Badge from "@mui/material/Badge";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
export const CartWidget = () => {
  return (
    <Badge badgeContent={4} color="primary">
      <ShoppingCart color="action" />
    </Badge>
  );
};
