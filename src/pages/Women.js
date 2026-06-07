import React from "react";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import { useCart } from "../components/CartContext";
import Footer from "../components/Footer";


const Women = () => {
    const products = [
        { id: 1, image: "/images/dress (1).jpg", title: "پیراهن زنانه", price: 1200 },
        { id: 2, image: "/images/dress (2).jpg", title: "کت زنانه", price: 2500 },
        { id: 3, image: "/images/dress (3).jpg", title: "شلوار زنانه", price: 900 },
        { id: 4, image: "/images/dress (4).jpg", title: "پیراهن زنانه", price: 1200 },
        { id: 5, image: "/images/dress (5).jpg", title: "کت زنانه", price: 2500 },
        { id: 6, image: "/images/dress (6).jpg", title: "شلوار زنانه", price: 900 },
        { id: 7, image: "/images/dress (7).jpg", title: "پیراهن زنانه", price: 1200 },
        { id: 8, image: "/images/dress (8).jpg", title: "کت زنانه", price: 2500 },
        { id: 9, image: "/images/dress (9).jpg", title: "شلوار زنانه", price: 900 },
        { id: 10, image: "/images/dress (10).jpg", title: "پیراهن زنانه", price: 1200 },
        { id: 11, image: "/images/dress (11).jpg", title: "کت زنانه", price: 2500 },
        { id: 12, image: "/images/dress (12).jpg", title: "شلوار زنانه", price: 900 },
        { id: 13, image: "/images/dress (13).jpg", title: "پیراهن زنانه", price: 1200 },
        { id: 14, image: "/images/dress (14).jpg", title: "کت زنانه", price: 2500 },
        { id: 13, image: "/images/dress (15).jpg", title: "پیراهن زنانه", price: 1200 },
        { id: 14, image: "/images/dress (16).jpg", title: "کت زنانه", price: 2500 },

    ];

    return (
        <div className="bg-white">
            <Banner />
            <div className="p-6 bg-white">
                <h1 className="text-4xl font-bold mb-6 text-center">مدل های لباس زنانه</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((p) => (
                        <ProductCard key={p.id} image={p.image} title={p.title} price={p.price} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Women;