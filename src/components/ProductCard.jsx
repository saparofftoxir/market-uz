'use client'
import { InitialState, reducer } from '@/app/reducer/productsReducer';
import { useRouter } from 'next/navigation';
import React, { useEffect, useReducer, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
function ProductCard({ title, image, price, views, id }) {
  const [state, dispatch] = useReducer(reducer, InitialState)
  const router = useRouter()
  const detailPageHandler = () => {
    router.push(`/detail/${id}`)
  }
  const clickAddToBasket = () => {
    dispatch({ type: "ADD_TO_BASKET", payload: { title: title, image: image, price: price } })
  }
 
  return (
    <div className='w-full min-h-80 p-3 rounded-xl flex flex-col gap-y-3 bg-white border shadow '>
      <img onClick={detailPageHandler} className='w-full cursor-pointer h-56' src={image} alt="" />
      <h2>{title}</h2>
      <h2 className='font-semibold'>{price} so'm</h2>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-1'>
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
        </div>
        <div className='flex items-center gap-x-2'>
          <MdRemoveRedEye />
          <span className='text-sm'>{views}</span>
        </div>


      </div>
      <button onClick={clickAddToBasket} className='p-1.5 w-full border cursor-pointer border-green-500 text-green-500 hover:border-red-600 transition rounded-lg'>Savatga</button>


    </div>
  )
}

export default ProductCard
