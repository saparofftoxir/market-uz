'use client'
import { InitialState, reducer } from '@/app/reducer/productsReducer'
import { products } from '@/data/products'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useReducer } from 'react'

function Detail() {
    const [state, dispatch] = useReducer(reducer, InitialState)
    const { id } = useParams()
    const currentProduct = products.find(item => item.id === Number(id))
    const clickAddToBasket = () => {
        dispatch({ type: "ADD_TO_BASKET", payload: currentProduct })
    }
   
    return (
        <div className='w-full h-screen mt-14 px-10'>
            <div className='w-full flex h-96 bg-gray-200 shadow-xl rounded-xl '>
                <div className='w-full bg-white flex items-center p-10 justify-center h-96'>
                    <img className='h-72 object-cover' src={currentProduct?.image} alt="" />

                </div>
                <div className='w-full h-96  bg-gray-100 '>
                    <div className='p-7 flex flex-col gap-y-2'>
                        <h2 className='text-2xl font-semibold'>{currentProduct?.title}</h2>
                        <div className='flex items-center gap-x-1'>
                            <h3 className='font-semibold'>Manzil:
                            </h3>
                            <span>Toshkent sh, Shayxontohur</span>
                        </div>
                        <div className='flex items-center gap-x-1'>
                            <h3 className='font-semibold'>Tel:
                            </h3>
                            <span>+998 ** (**) *** ** **</span>
                        </div>
                        <div className='flex items-center gap-x-1'>
                            <h3 className='font-semibold'>Qo'shildi:
                            </h3>
                            <span>06.01.2023</span>
                        </div>
                        <div className='flex items-center gap-x-1'>
                            <h3 className='font-semibold'>Ko'rishlar sooni:
                            </h3>
                            <span>{currentProduct?.views}</span>
                        </div>
                        <div className=' gap-x-1'>
                            <h3 className='font-medium'>Narxi
                            </h3>
                            <span className='font-bold text-base'>{currentProduct?.price}</span>
                        </div>
                        <div className='flex flex-col items-start w-full justify-between gap-y-2'>
                            <div className='flex items-center gap-x-3'>
                                <button onClick={clickAddToBasket} className='w-72 p-2 bg-green-700 text-white rounded-lg'>Savatga qo'shish</button>
                                <button className='w-72 p-2 border text-green-700 border-green-700  rounded-lg'>Sotib olish</button>
                            </div>
                            <Link href={'/'}>
                                <button className='w-72 p-1.5 border border-green-700 rounded-lg'>Asosiy sahifa</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Detail;