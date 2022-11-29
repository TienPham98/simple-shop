import Image from "next/image";
import React from "react";

const oder = () => {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-sm title-font font-medium  text-gray-500 tracking-widest">
                Simple Shop
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                Order Id: 1234
              </h1>
              <div class="flex mb-4">
                <a class="flex-grow text-gray-800 border-b-2 border-purple-500 py-2 text-lg px-2">
                  Product
                </a>
                <a class="flex-grow text-gray-800 border-b-2 border-purple-500 py-2 text-lg text-center">
                  Quantity
                </a>
                <a class="flex-grow text-gray-800 border-b-2 border-purple-500 py-2  text-center text-lg ">
                  Item Total
                </a>
              </div>

              <div class="flex py-2">
                <span class="text-gray-500">IPhone 14 Pro Max</span>
                <span class="ml-auto text-gray-900">1</span>
                <span class="ml-auto text-gray-900">990 $</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">IPhone 14 Pro Max</span>
                <span class="ml-auto text-gray-900">2</span>
                <span class="ml-auto text-gray-900">1980 $</span>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <span class="text-gray-500">IPhone 14 Pro Max</span>
                <span class="ml-auto text-gray-900">10</span>
                <span class="ml-auto text-gray-900">9900 $</span>
              </div>
              <div class="flex flex-col">
                <span class="title-font font-medium text-2xl text-gray-900">
                  Sub Total: 12121 $
                </span>

                <div className="my-2">
                  <button class="flex mx-0 text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default oder;
