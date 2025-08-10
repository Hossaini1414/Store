import React from "react";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Brands = () => {
    const brands = [
        { id: 1, image: "images/brand (1).png", title: "Nike" },
        { id: 2, image: "images/brands.png", title: "Adidas" },
        { id: 3, image: "images/brands (5).jpg", title: "Gucci" },
        { id: 4, image: "images/brands (1).jpg", title: "Converse" },
        { id: 5, image: "images/brands (2).jpg", title: "H & M" },
        { id: 6, image: "images/brands (6).jpg", title: "Puma" },
        { id: 7, image: "images/brands (8).jpg", title: "Under Armour" },
        { id: 8, image: "images/brands (7).jpg", title: "Levi's" },
        { id: 9, image: "images/brands (4).jpg", title: "Prada" },
    ];

    return (
        <div className="bg-white">
            <Banner />
            <div className="p-6 bg-white">
                <h1 className="text-3xl font-bold mb-6 text-center">برند های مشهور جهان</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {brands.map((b) => (
                        <div key={b.id} className="bg-[#e0e0e0] rounded-2xl shadow-md text-center transition">
                            <img
                                src={process.env.PUBLIC_URL + '/' + b.image}
                                alt={b.title}
                                className="w-full h-56 object-contain rounded-md"
                            />
                            <h2 className="mt-2 font-bold">{b.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Brands;
