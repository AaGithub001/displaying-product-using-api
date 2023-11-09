import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const[title, setTitle] = useState("");
    const[category, setCategory] = useState("");
    const[price, setPrice] = useState("");
    const[rating, setRating] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
          if (title && category && price &&rating )
          {
          console.log("submit");
      
          const formdata = new FormData();
          formdata.append("title",title);
          formdata.append("category",category);
          formdata.append("price",price);
          formdata.append("rating",rating);
      
         axios.post('https://fakestoreapi.com/products',formdata)
            .then(() => {
                toast("Product Added Successfully");
                setTitle("");
                setCategory("");
                setPrice("");
                setRating("");
            })
      
        }

    }

    return (
        <form action="bg-cyan-100 mt-8 p-8 w-fit">
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col'>
                    <label className='mr-3 '>Title</label>
                    <input value={title} required onChange={e => setTitle(e.target.value)} type="text" name='title' placeholder='title' className='px-3 py-2 rounded-md  border-blue-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-700' />
                    
                </div>
                <div className='flex flex-col '>
                    <label className='mr-3'>Category</label>
                    <input value={category} required onChange={e => setCategory(e.target.value)} type="text" name='category' placeholder='category' className='px-3 py-2 rounded-md border-blue-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-700' />
                </div>
                <div className='flex flex-col '>
                    <label htmlFor="firstname">Price</label>
                    <input value={price} required onChange={e => setPrice(e.target.value)} type="number" name='price' placeholder='price' className='px-3 py-2 rounded-md  border-blue-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-700' />
                </div>
                <div className='flex flex-col '>
                    <label htmlFor="firstname">Rating</label>
                    <input value={rating} required onChange={e => setRating(e.target.value)} type="number" name='rating' placeholder='rating' className='px-3 py-2 rounded-md  border-blue-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-700' />
                </div>0
            </div>
            <div className='flex justify-center'>
                 <ToastContainer /> 
                <button onClick={handleClick} className='bg-yellow-500 mt-4 px-4 py-4 rounded-md text-black font-semibold'> Add</button>
            </div>
        </form>
    )
}

export default Contact