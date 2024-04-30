import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items, error }) => {
  console.log(items);
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{ marginTop: "10px" }}
    >
      {items.map((item) => {
        return (
          <Grid item key={item.id}>
            <ProductCard
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              img={item.img}
            />
          </Grid>
        );
      })}
      <div>{error && <h2>{error.message}</h2>}</div>
    </Grid>
  );
};

export default ItemList;
