import React from "react";
import { useCart } from "../components/CartContext";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
const Cart = () => {
    const { cart, removeFromCart } = useCart();
    return (
        <div className="bg-white">
            <Banner/>
        <div dir="rtl" className="p-6 bg-white min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-center"> سبد خرید شما</h1>
            {cart.length === 0 ? (
                <p className="text-center text-gray-600">هیچ محصولی اضافه نشده</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {cart.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#e0e0e0] text-md rounded-2xl shadow-md text-center transition p-1"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-56 object-contain rounded-lg"
                            />
                            <h2 className="mt-2 font-bold p-1">{item.title}</h2>
                            <p className="text-green-600 p-1">{item.price} افغانی </p>
                            <p className="font-bold  p-1">{item.quantitly} عدد </p>
                            <button
                                onClick={() => removeFromCart(index)}
                                className="mt-3 bg-red-500 text-white px-4 py-2 rounded-xl hover:scale-105"
                            >
                                حذف از لیست
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
            <Footer />
        </div>
    );
};
export default Cart;