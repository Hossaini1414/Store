import React from "react";
import { CartContext } from "../components/CartContext";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import Footer from "../components/Footer";

    const Home = ({image, title, price }) => {
    const { addToCart } = useCart();
    const products = [
        { id: 1, image: "images/dress (1).jpg", title: "پیراهن زنانه", price: 1200, path: "/women" },
        { id: 2, image: "images/dress (2).jpg", title: "کت زنانه", price: 2500, path: "/women" },
        { id: 3, image: "images/dress (3).jpg", title: "شلوار زنانه", price: 900, path: "/women" },
        { id: 4, image: "images/dress (4).jpg", title: "پیراهن زنانه", price: 1200, path: "/women" },
    ];
    const menu = [
        { id: 1, image: "images/dress (1).jpg", title: " زنانه", path: "/women" },
        { id: 2, image: "images/menswear (1).jpeg", title: "مردانه", path: "/men" },
        { id: 3, image: "images/kids (10).jpg", title: " بچگانه", path: "/kids" },
        { id: 4, image: "images/shose (6).jpeg", title: "کفش", path: "/shoes" },
    ];
    const brands = [
        { id: 1, image: "images/brand (1).png", title: " Nike", path: "/brands" },
        { id: 2, image: "images/brands.png", title: "Adidas", path: "/brands" },
        { id: 3, image: "images/brands (5).jpg", title: "Gucci", path: "/brands" },
        { id: 9, image: "images/brands (4).jpg", title: "Prada", path: "/brands" },
    ];

    return (
        <div className="bg-white">
            <Banner />
            <h1 className="text-4xl font-bold  text-center  mt-10">پرطرفدار ها</h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  bg-white  p-6">
                {products.map((p, index) => (
                    <div key={index} className="bg-[#e0e0e0] rounded-2xl shadow-md  text-center  transition">
                        <img src={process.env.PUBLIC_URL + '/' + p.image}  alt={p.title} className=" w-full h-56 object-contain  rounded-md " />
                        <h2 className="mt-2 font-bold">{p.title}</h2>
                        <Link to={p.path} >
                            <button onClick={() => addToCart(p)} 
                                    className="my-3 bg-white  text-black px-4 py-2 rounded-xl hover:scale-105">
                                موارد بیشتر
                            </button>
                        </Link>
                    </div>
                ))}
            </div>

            <h1 className="text-4xl font-bold  text-center  mt-10">محصولات ما</h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  bg-white  p-6">
                {menu.map((m, index) => (
                    <div key={index} className="bg-[#e0e0e0] rounded-2xl shadow-md  text-center  transition">
                        <img src={process.env.PUBLIC_URL + '/' + m.image} alt={m.title} className=" w-full h-56 object-contain  rounded-md " />
                        <h2 className="mt-2 font-bold">{m.title}</h2>
                        <Link to={m.path} >
                            <button className="my-3 bg-white  text-black px-4 py-2 rounded-xl hover:scale-105">
                                موارد بیشتر
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
            <h1 className="text-4xl font-bold  text-center  mt-10">برند های مشهور جهان</h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  bg-white  p-6">
                {brands.map((b, index) => (
                    <div key={index} className="bg-[#e0e0e0] rounded-2xl shadow-md  text-center  transition">
                        <img src={process.env.PUBLIC_URL + '/' + b.image} alt={b.title} className=" w-full h-56 object-contain  rounded-md " />
                        <h2 className="mt-2 font-bold text-xl">{b.title}</h2>
                        <Link to={b.path} >
                            <button className="my-3 bg-white  text-black px-4 py-2 rounded-xl hover:scale-105">
                                موارد بیشتر
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Home;