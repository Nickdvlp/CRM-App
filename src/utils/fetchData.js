import { useEffect, useState } from "react";

const fetchData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const fetchProduct = await fetch("https://dummyjson.com/products");
      const res = await fetchProduct.json();
      setData(res);
    };
    fetchProducts();
  }, []);

  return data;
};

export default fetchData;
