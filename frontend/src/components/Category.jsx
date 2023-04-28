import { useEffect, useState } from "react";
// import { categories } from "../constants";
import { getAllproducts } from "../api/products";

const Category = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [categoryProduct, setCategoryProduct] = useState([]);
  useEffect(() => {
    getAllproducts()
      .then((res) => {
        const { data, status } = res;
        if (status == 200) {
          setAllProducts(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const updateProducts = (cat) => {
    let updatedList = allProducts.filter((item) => item.category == cat);
    setCategoryProduct(updatedList);
  };

  return (
    <div>
      <div className="m-5 pt-28">
        <h2 className="text-2xl font-bold text-center text-upercase ">
          CHOOSE PRODUCT CATEGORY
        </h2>
      </div>
      <div className="gap-10 p-8 flex flex-wrap justify-center items-center mb-5 pb-5">
        <div className="flex justify-center items-center cursor-pointer">
          <div
            style={{ width: 15 + "rem", height: 8 + "rem" }}
            id="category"
            onClick={() => updateProducts("cloths")}
            className="bg-slate-700 rounded-2xl text-white"
          >
            <div className="flex justify-center items-center">
              <div className="p-auto text-xl pt-10 hover:text-[#F97B22] ">
                Mens Clothing
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <div
            style={{ width: 15 + "rem", height: 8 + "rem" }}
            id="category"
            onClick={() => updateProducts("cloths")}
            className="bg-slate-700 rounded-2xl text-white"
          >
            <div className="flex justify-center items-center">
              <div className="p-auto text-xl pt-10  hover:text-[#F97B22] ">
                Mens Clothing
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <div
            style={{ width: 15 + "rem", height: 8 + "rem" }}
            id="category"
            onClick={() => updateProducts("cloths")}
            className="bg-slate-700 rounded-2xl text-white"
          >
            <div className="flex justify-center items-center">
              <div className="p-auto text-xl pt-10  hover:text-[#F97B22] ">
                Mens Clothing
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <div
            style={{ width: 15 + "rem", height: 8 + "rem" }}
            id="category"
            onClick={() => updateProducts("cloths")}
            className="bg-slate-700 rounded-2xl text-white"
          >
            <div className="flex justify-center items-center">
              <div className="p-auto text-xl pt-10  hover:text-[#F97B22] ">
                Mens Clothing
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 p-10 m-5">
        {categoryProduct.map((product, index) => {
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
                Price : ₹{" "}
                <span className="text-[#245953]"> {product.price}</span>
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
    </div>
  );
};
export default Category;
