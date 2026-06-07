import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, Search } from 'lucide-react';
import { useCart } from "../components/CartContext";

const Banner = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuItems = [
        { title: " خانه ", path: "/" },
        { title: "زنانه", path: "/women" },
        { title: "مردانه", path: "/men" },
        { title: "بچگانه", path: "/kids" },
        { title: " کفش ", path: "/shoes" },
        { title: " برندها ", path: "/brands" }
    ];
    return (
        <div className="relative mx-auto bg-gradient-to-t from-[#cfcfd1] via-slate-50 to-[#dcdcdd] h-auto flex flex-col items-center
justify-center overflow-hidden w-full shadow-lg">
            {/* ====== Top Bar ====== */}
            <div className="flex flex-row items-center justify-between w-full px-4 text-gray-800 h-20">
                {/* mobile menu btn */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="text-2xl focus:outline-none"
                        aria-label="open menu"
                    >
                        ☰
                    </button>
                </div>
                {/* search desktop */}
                <div className="hidden md:flex items-center relative">
                    <input
                        placeholder="ﺟﺴﺘﺠﻮی محصولات"
                        className="bg-transparent border-b-2 border-gray-500 px-3 py-1 focus:outline-none
text-center"
                    />
                    <Search size={20} className="absolute right-3 top-2.5" />
                </div>
                {/* title */}
                <h1 className="text-[6vw] md:text-[3vw] font-bold  drop-shadow-lg  text-black text-center md:mr-20 ml-10 md:ml-0">
                    NEWSTYLE
                </h1>
                {/* cart icon */}
                <Link to={"/cart"} className="flex items-center justify-center">
                    <img
                        src={process.env.PUBLIC_URL + '/' + "images/cart (2).png"} 
                        title='سبد خرید'
                        alt="cart icon"
                        className="w-16 md:w-20 hover:scale-105 transition-transform duration-200"
                    />
                </Link>
            </div>
            {/* ====== Line under title ====== */}
            <div className="hidden md:block w-[45vw] h-0.5 bg-black"></div>

            {/* ====== PC Menu ====== */}
            <div dir='rtl' className="hidden md:flex justify-center gap-6 mt-4 mb-4 text-gray-900 text-xl">
                {menuItems.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <Link
                            to={item.path}
                            className="group hover:text-blue-800 relative"
                        >
                            {item.title}
                            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-black transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
                        </Link>
                        {index !== menuItems.length - 1 && (
                            <div className="w-[1px] h-6 bg-black mr-8"></div>
                        )}
                    </div>
                ))}
            </div>
            {/* ====== Mobile Menu Overlay ====== */}
            {menuOpen && (
                <div dir='rtl' className="fixed inset-0 z-50 bg-white shadow-lg flex flex-col overflow-auto">
                    {/* Close Button */}
                    <div className="flex flex-row justify-end gap-20 p-4">
                        {/* title */}
                        <h1 className="text-[6vw] md:text-[3vw] font-bold text-black text-center md:mr-20 ml-10 md:ml-0 drop-shadow-lg" >
                            NEWSTYLE
                        </h1>
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-2xl"
                            aria-label=" ﻣﻮﺑﺎﯾﻞ ﻣﻨﻮی ﺑﺴﺘﻦ "
                        >
                            ✕
                        </button>
                    </div>
                    {/* Search */}
                    <div className="flex flex-row relative w-full px-6 mb-6">
                        <input
                            placeholder="جستجوی محصولات "
                            className="bg-transparent border-b-2 border-gray-500 p-2
focus:outline-none text-right w-full pr-10"
                        />
                        <Search size={20} className="absolute right-10 top-3" />
                    </div>
                    {/* Menu Items */}
                    <nav className="flex flex-col items-start gap-4 px-6 text-lg">
                        {menuItems.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.path}
                                className="block w-full p-2 border-b border-gray-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
            {/* ====== Banner Image ====== */}
            <div className="flex w-1/2 justify-center z-10">
                <img src={process.env.PUBLIC_URL + '/' + "images/bannerImage.png"}
                     alt="banner" className="sm:w-1/2 mb-2 mt-6 md:mt-0 " />
            </div>
            {/* ====== Center Big Text ====== */}
            <div className=" z-20 absolute top-1/3 md:top-1/3  mt-10 md:mt-6 ml-7 text-center w-full px-4">
                <div className='relative flex flex-row justify-between mx-2 md:mx-40 text-[3vw] md:pr-10  '>
                    <div className='md:-ml-6'>DIGISTYLE <span className='text-gray-400'>BASIC</span></div>
                    <div className='md:text-[2vw] md:mt-4 mr-6 md:mr-0'><ArrowLeft size={24} className='hidden md:inline ' /> برند جدید، استایل جدید </div>
                </div>
                <h1 className="absolute left-2 md:left-32 top-1 md:top-4 text-white text-[22vw] md:text-[19vw] font-extralight leading-none tracking-wider">
                    DSBASIC
                </h1>
            </div>
        </div>

    );
};
export default Banner;