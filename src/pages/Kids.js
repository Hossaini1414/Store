import React from "react";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import { useCart } from "../components/CartContext";
import Footer from "../components/Footer";

const Kids = (image, title, price) => {
    const { addToCart } = useCart();
    const products = [
        { id: 1, image: "/images/kids (1).jpg", title: "پیراهن دخترانه", price: 1200 },
        { id: 2, image: "/images/kids (2).jpg", title: "پیراهن دخترانه", price: 2500 },
        { id: 3, image: "/images/kids (3).jpg", title: "پیراهن دخترانه", price: 900 },
        { id: 4, image: "/images/kids (4).jpg", title: "پیراهن دخترانه", price: 1200 },
        { id: 5, image: "/images/kids (5).jpg", title: "پیراهن دخترانه", price: 2500 },
        { id: 6, image: "/images/kids (6).jpg", title: "پیراهن دخترانه", price: 900 },
        { id: 7, image: "/images/kids (7).jpg", title: "پیراهن دخترانه", price: 1200 },
        { id: 8, image: "/images/kids (8).jpg", title: "پیراهن دخترانه", price: 2500 },
        { id: 9, image: "/images/kids (9).jpg", title: "پیراهن دخترانه", price: 900 },
        { id: 10, image: "/images/kids (10).jpg", title: "پیراهن دخترانه", price: 1200 },
        { id: 11, image: "/images/kids (11).jpg", title: "پیراهن دخترانه", price: 2500 },
        { id: 12, image: "/images/kids (12).jpg", title: "پیراهن دخترانه", price: 900 },
        { id: 13, image: "/images/kids (13).jpg", title: "پیراهن دخترانه", price: 1200 },
        { id: 14, image: "/images/kids (14).jpg", title: "پیراهن دخترانه", price: 2500 },
        { id: 13, image: "/images/kids (15).jpg", title: "پیراهن دخترانه", price: 1200 },
    ];

    return (
        <div className="bg-white">
            <Banner />
            <div className="p-6 bg-white">
                <h1 className="text-4xl font-bold mb-6 text-center">لباس دخترانه</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                    {products.map((p , index) => (
                        <ProductCard key={index} image={p.image} title={p.title} price={p.price} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Kids;