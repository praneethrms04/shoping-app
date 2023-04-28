import { useEffect, useState } from "react";
import { getAllproducts } from "../api/products";

const Products = () => {
  const [allproducts, setAllProducts] = useState([]);

  useEffect(() => {
    // fetchProducts();
    // categoryData()
    getAllproducts()
      .then((res) => {
        const { data, status } = res;
        if (status == 200) {
          // console.log(data);
          setAllProducts(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-wrap gap-10 p-10 m-5">
      {allproducts.map((product, index) => {
        return (
          <div
            key={index}
            className="bg-[#D8D8D8] p-9 m rounded-xl  h-full w-[300px]"
          >
            <div className="ms-2">
              <img
                src={product.imageUrl}
                alt=""
                className="w-[200px]  h-full object-cover rounded-2xl"
              />
            </div>
            <p className=" text-[#00235B] font-bold text-center pt-2">
              {product.name.toUpperCase()}
            </p>
            <p className="pt-2 font-bold items-start">
              Price : ₹ <span className="text-[#245953]"> {product.price}</span>
            </p>
            <div className="">
              <p className="font-bold  text-left">Product Details :</p>
              <span className="w-[200px] ">
                {product.description.substring(0, 150)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
