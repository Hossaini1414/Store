import React from "react";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import { useCart } from "../components/CartContext";
import Footer from "../components/Footer";
const Men = () => {
    const products = [
        { id: 1, image: "/images/menswear (1).jpeg", title: "پیراهن ", price: 1200 },
        { id: 2, image: "/images/menswear (2).jpeg", title: "کت ", price: 2500 },
        { id: 3, image: "/images/menswear (3).jpeg", title: " بلیز", price: 900 },
        { id: 4, image: "/images/menswear (1).jpeg", title: " بلیز", price: 1200 },
        { id: 5, image: "/images/menswear (2).jpeg", title: "کت مردانه", price: 2500 },
        { id: 6, image: "/images/menswear (3).jpeg", title: "", price: 900 },
        { id: 7, image: "/images/menswear (1).jpeg", title: "بلیز", price: 1200 },
        { id: 8, image: "/images/menswear (2).jpeg", title: "کت ", price: 2500 },
        { id: 9, image: "/images/menswear (3).jpeg", title: "بلیز", price: 900 },
        { id: 10, image: "/images/menswear (1).jpeg", title: "کت", price: 1200 },
        { id: 11, image: "/images/menswear (2).jpeg", title: " پیراهن", price: 2500 },
        { id: 12, image: "/images/menswear (3).jpeg", title: " پیراهن", price: 900 },
        { id: 13, image: "/images/menswear (1).jpeg", title: "پیراهن ", price: 1200 },
        { id: 14, image: "/images/menswear (2).jpeg", title: "کت ", price: 2500 },
        { id: 13, image: "/images/menswear (3).jpeg", title: "پیراهن ", price: 1200 },
        { id: 14, image: "/images/menswear (1).jpeg", title: "کت ", price: 2500 },

    ];

    return (
        <div className="bg-white">
            <Banner />
            <div className="p-6 bg-white" >
                <h1 className="text-3xl font-bold mb-6 text-center">لباس مردانه</h1>
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

export default Men;