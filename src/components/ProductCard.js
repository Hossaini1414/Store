import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ image, title, price }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const handleAddToCart = () => {
        addToCart({ image, title, price });
        navigate("/cart");
    }
    return (
        <div className="bg-[#e0e0e0] rounded-2xl shadow-md  text-center  transition">

            <img src={process.env.PUBLIC_URL + '/' + image} alt={title} className=" w-full h-56 object-contain  rounded-md " />

            <h2 className="mt-2 font-bold">{title}</h2>
            {price && <p className="text-gray-500">{price} افغانی</p>}
            <button onClick={() => handleAddToCart({ image, title, price })} className="my-3 bg-blue-500  text-black px-4 py-2 rounded-xl hover:scale-105">
                افزودن به سبد
            </button>
        </div>
    );
};

export default ProductCard;