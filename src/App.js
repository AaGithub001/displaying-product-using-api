import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStar } from "react-icons/fa";


function App() {
  const[products, setProducts] = useState ([]);
  useEffect(()=>{
     axios.get("https://fakestoreapi.com/products") 
    .then(res => {
      setProducts(res.data);
      console.log(res.data);


  });

 
    },[]);




  return (
    <div>
      
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(product =>(

          <div
            className="bg-white rounded-lg shadow p-4 transition-all  duration-300 hover:-translate-y-1 hover:shadow-lg relative"
          >
            <img
              src={product.image}
              className="w-full object-cover mb-4 h-80"
            />

            <div className="flex justify-between items-center pb-2">
              <p className="bg-pink-100 px-1 text-pink-500 rounded">
                {product.category}
              </p>
              <p className="text-gray-600">{product.price}</p>
            </div>

            <p className="font-bold text-gray-800">{product.title}</p>

            <div className="flex justify-between items-center">
              <div className="flex items-center border border-yellow-500 rounded px-1 mt-2">
                <p className="text-yellow-500">{product.rating.rate}</p>
                <FaStar className="text-yellow-500 ml-1" />
              </div>
              <button className={`px-4 py-2 rounded-full text-white bg-pink-500 hover:bg-pink-600 `}>
                <FaShoppingCart />
              </button>
            </div>
          </div>
          ))}
      </div>

    </div>
  );
}

export default App;
