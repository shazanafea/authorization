import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Home() {
  let [productList, setproductList] = useState(null);
  function getAllProudcts() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then((req) => { setproductList(req.data.data); })
  }
useEffect(()=>{
  getAllProudcts();
},[]);
  return (
   <>
   <div className='w-10/12 mx-auto my-8'>
   <div className="flex flex-wrap space-y-5">
{productList?.map((product)=>{
  return(
    <div key={product._id} className='lg:w-2/12 md:w-4/12 sm:w-6/12 w-full px-3' >
      <div className='item overflow-hidden group p-3 hover:border hover:border-main-color'>
        <img src={product.imageCover} className='w-full' alt={product.title} />
        <h5 className='text-main-color'>{product.category.name}</h5>
        <h2>{product.title.split("").slice(0,2).join("")}</h2>
        <div className='flex justify-between'> 
          <span>{product.price}EGP</span>
          <span><i className='fa-solid fa-star text-yellow-300'></i>{" "}{product.ratingAvarage}</span>
        </div>
        <button className=''></button>
      </div>

    </div>
  )
})}
   </div>

   </div>
   
   
   </>
  )
}
