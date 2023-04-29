import { useEffect, useState } from "react";
import { getAllproducts } from "../api/products";
import { Footer, Navbar } from "../components";
import Loader from "../components/Loader";

const Products = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);

  useEffect(() => {
    getAllproducts()
      .then((res) => {
        const { data, status } = res;
        if (status == 200) {
          setAllProducts(data);
          SetIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        SetIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap gap-10 p-16 m-5 mt-10">
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
                    className="w-[200px]  h-[250px] object-cover rounded-2xl"
                  />
                </div>
                <p className=" text-[#00235B] font-bold text-center pt-2">
                  {product.name.toUpperCase()}
                </p>
                <p className="pt-2 font-bold items-start">
                  Price : ₹{" "}
                  <span className="text-[#245953]"> {product.price}</span>
                </p>
                <div className="">
                  <p className="font-bold  text-left">Product Details :</p>
                  <span className="w-[200px] ">
                    {product.description.substring(0, 130)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Footer />
    </>
  );
};

export default Products;
