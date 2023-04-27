import axios from "axios"

export const getAllproducts =async () =>{
    const url = "http://localhost:5050/api/v1/products"
   return  await axios.get(url)
}