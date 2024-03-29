import { useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";


export default function Products1() {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useLocalStorage()

  const getProducts = async () => {
    try {
      const { data } = await axios.get("https://api.restful-api.dev/objects");
      setProducts(data);
      setValue('products', data)
    }
    catch (e) {
      console.error(e)
    }
  };

  useEffect(() => {
    getProducts();
    const interval = setInterval(getProducts, 10000);
    return(() => clearInterval(interval))
  }, []);

  return (
    <div className="App">
      {products.length > 0 && products.map(product => {
        return <ProductDetails product={product} />;
      })}
    </div>
  );
}

function ProductDetails({ product }) {
  return <div key={product.id}>{product.name}</div>;
};