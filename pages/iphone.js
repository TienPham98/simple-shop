import Link from "next/link";
import React from "react";
import Product from "../models/Product";
import mongoose from "mongoose";

const Iphones = ({ products }) => {
  console.log(products);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center ">
            {Object.keys(products).map((item) => {
              return (
                <div
                  key={products[item]._id}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg  "
                >
                  <Link href={`/product/${products[item].slug}`}>
                    <div className="block relative rounded overflow-hidden">
                      <img
                        alt={products[item].title}
                        className=" m-auto h-[30vh] md:h-[36vh] block"
                        src={products[item].img}
                      />
                    </div>
                    <div className="mt-4 text-center md:text-left ">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {products[item].category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <div className="mt-1">
                        {products[item].option.includes("64Gb") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            64Gb
                          </span>
                        )}
                        {products[item].option.includes("128Gb") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            128Gb
                          </span>
                        )}
                        {products[item].option.includes("256Gb") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            256Gb
                          </span>
                        )}
                        {products[item].option.includes("512Gb") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            512Gb
                          </span>
                        )}
                        {products[item].option.includes("1Tb") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            1Tb
                          </span>
                        )}
                      </div>

                      <div className="mt-1">
                        {products[item].color.includes("blue") && (
                          <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none "></button>
                        )}
                        {products[item].color.includes("red") && (
                          <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("gray") && (
                          <button className="border-2 border-gray-300 ml-1 bg-gray-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("green") && (
                          <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("black") && (
                          <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("purple") && (
                          <button className="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                      </div>
                      <p className="mt-1">{products[item].price}$</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "Iphone" });
  let iphones = {};
  for (let item of products) {
    if (item.title in iphones) {
      if (
        !iphones[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        iphones[item.title].color.push(item.color);
      }
      if (
        !iphones[item.title].option.includes(item.option) &&
        item.availableQty > 0
      ) {
        iphones[item.title].option.push(item.option);
      }
    } else {
      iphones[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        iphones[item.title].option = [item.option];
        iphones[item.title].color = [item.color];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(iphones)) },
  };
}

export default Iphones;
