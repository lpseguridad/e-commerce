import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { name } = useParams();

  let productsFiltered = products.filter(
    (product) => product.category === name
  );
  const getProducts = new Promise((resolve, reject) => {
    let x = true;
    if (x) {
      resolve(name ? productsFiltered : products);
    } else {
      reject({ status: 400, message: "Algo salio mal" });
    }
  });

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, [name]);

  console.log(items);
  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
