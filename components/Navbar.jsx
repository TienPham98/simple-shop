import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiFillCloseCircle,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { useRef } from "react";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
  const toogleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md">
      <Link href={"/"}>
        <div className="logo mx-5">
          <Image src="/logo.png" alt="Logo" width={120} height={20} />
        </div>
      </Link>
      <div className="nav">
        <ul className="flex items-center space-x-4 font-me md:text-md ">
          <Link href={"/iphone"}>
            <li>IPhone</li>
          </Link>
          <Link href={"/macbook"}>
            <li>Macbook</li>
          </Link>
          <Link href={"/ipad"}>
            <li>IPad</li>
          </Link>
        </ul>
      </div>
      <div
        onClick={toogleCart}
        className="cart absolute right-0  cursor-pointer top-4 mx-5"
      >
        <AiOutlineShoppingCart className="text-xl md:text-2xl" />
      </div>

      <div
        ref={ref}
        className={`sideCart w-72 h-[100vh] absolute top-0 right-0 bg-purple-100 p-10 transform transition-transform $(Object.keys(cart).length !=== 0 ? "translate-x-0" : "translate-x-full" `}
      >
        <h2 className="font-bold text-xl text-center ">Shopping cart</h2>
        <span
          onClick={toogleCart}
          className="absolute top-5 right-2 cursor-pointer text-xl"
        >
          <AiFillCloseCircle />
        </span>
        <ul className="list-decimal">
          {Object.keys(cart).length === 0 && (
            <div className="my-4  font-semibold ">Your cart is empty</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-3">
                  <div className="w-2/3 font-semibold ">{cart[k].name}</div>
                  <div className="flex font-semibold items-center justify-center w-1/3">
                    <AiOutlineMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].option,
                          cart[k].variant
                        );
                      }}
                      className="mx-2 cursor-pointer text-3xl"
                    />
                    {cart[k].qty}
                    <AiOutlinePlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].option,
                          cart[k].variant
                        );
                      }}
                      className="mx-2 cursor-pointer text-3xl"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="total bold my-2 ">Subtotal: {subTotal}$ </div>

        <div className="flex">
          <Link href={"/checkout"}>
            <button className="flex mr-4 bg-purple-300 border-0 py-1 px-1 focus:outline-none hover:bg-purple-400 font-md rounded text-lg">
              <BsFillBagCheckFill className="mt-1 mx-1" />
              Checkout
            </button>
          </Link>

          <button
            onClick={clearCart}
            className="flex mr-2 bg-purple-300 border-0 py-1 px-1  focus:outline-none hover:bg-purple-400 rounded font-md text-lg"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
