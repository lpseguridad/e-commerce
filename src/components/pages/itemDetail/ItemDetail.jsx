import ProductCard from "../../common/productCard/ProductCard";

const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <ProductCard
      title={item.title}
      description={item.description}
      price={item.price}
      img={item.img}
    />
  );
};

export default ItemDetail;
