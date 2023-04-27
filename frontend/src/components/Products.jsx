import { useEffect } from "react";
import { getAllproducts } from "../api/products";

const Products = () => {


  useEffect(() => {
    // fetchProducts();
    getAllproducts()
      .then((res) => {
        const { data, status } = res;
        if(status == 200){
            console.log(data)
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>This is Products page</div>;
};

export default Products;
