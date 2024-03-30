"use client";
import { IoPerson } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col gap-y-10 p-5">
      <div className="w-full flex gap-x-4 h-80">
        <div className="w-full">
          <img
            className="cursor-pointer rounded-xl h-96"
            src="https://smart-market.uz/_nuxt/banner1.2la.0gqwL8EH.webp"
            alt=""
          />
        </div>
        <div className="w-96 rounded-xl flex cursor-pointer flex-col gap-y-7 items-center justify-center h-96 bg-blue-950">
          <div className="flex items-center  gap-x-6">
            <div className="w-12 flex items-center justify-center h-12 border border-white rounded-full">
              <IoPerson className="w-6 h-6 text-white " />
            </div>
            <div className="text-white flex flex-col text-xl items-start">
              <h2 className="font-bold">+35 053</h2>
              <p className="text-xs">Ta'minotchilar</p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="w-12 flex items-center justify-center h-12 border border-white rounded-full">
              <IoIosPeople className="w-6 h-6 text-white " />
            </div>
            <div className="text-white flex flex-col text-xl items-start">
              <h2 className="font-bold">+35 053</h2>
              <p className="text-xs">Ta'minotchilar</p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="w-12 flex items-center justify-center h-12 border border-white rounded-full">
              <BiCategoryAlt className="w-6 h-6 text-white " />
            </div>
            <div className="text-white flex flex-col text-xl items-start">
              <h2 className="font-bold">+35 053</h2>
              <p className="text-xs">Ta'minotchilar</p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="w-12 flex items-center justify-center h-12 border border-white rounded-full">
              <FaMoneyBillTransfer className="w-6 h-6 text-white " />
            </div>
            <div className="text-white flex flex-col text-xl items-start">
              <h2 className="font-bold">+35 053</h2>
              <p className="text-xs">Ta'minotchilar</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-bold pt-10 text-2xl">Top mahsulotlar</h1>
      <div className="w-full grid grid-cols-5 gap-5 ">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}
