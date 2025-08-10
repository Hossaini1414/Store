import React from "react";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import { useCart } from "../components/CartContext";
import Footer from "../components/Footer";
const Shoes = () => {
    const products = [
        { id: 1, image: "/images/shose (1).jpeg", title: "کفش", price: 1200 },
        { id: 2, image: "/images/shose (2).jpeg", title: "کفش", price: 2500 },
        { id: 3, image: "/images/shose (3).jpeg", title: "کفش", price: 900 },
        { id: 4, image: "/images/shose (4).jpeg", title: " کفش", price: 1200 },
        { id: 5, image: "/images/shose (5).jpeg", title: "کفش", price: 2500 },
        { id: 6, image: "/images/shose (2).jpeg", title: "کفش", price: 900 },
        { id: 7, image: "/images/shose (6).jpeg", title: "کفش", price: 1200 },
        { id: 1, image: "/images/shose (1).jpeg", title: "کفش", price: 1200 },
        { id: 2, image: "/images/shose (2).jpeg", title: "کفش", price: 2500 },
        { id: 3, image: "/images/shose (3).jpeg", title: "کفش", price: 900 },
        { id: 2, image: "/images/shose (2).jpeg", title: "کفش", price: 2500 },
        { id: 3, image: "/images/shose (3).jpeg", title: "کفش", price: 900 },


    ];

    return (
        <div className="bg-white">
            <Banner />
            <div className="p-6 bg-white">
                <h1 className="text-4xl font-bold mb-6 text-center"> کفش زنانه/مردانه</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((p , index) => (
                        <ProductCard key={index} image={p.image} title={p.title} price={p.price} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Shoes;