import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ title, description, price, img, id }) => {
  return (
    <Card sm={4} xl={4}>
      <CardMedia sx={{ height: 200 }} image={img} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ alignItems: "rigth", textAlign: "right" }}>
        {id ? (
          <Link to={`/itemDetail/${id}`}>
            <Button size="small">Ver detalles</Button>
          </Link>
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
