import { Link } from "react-router-dom";
import React from "react";

// Menu items for "Our Products" section
const menuItems = [
    { title: "زنانه", path: "/women" },
    { title: "مردانه", path: "/men" },
    { title: "بچگانه", path: "/kids" },
    { title: "کفش/کیف", path: "/shoes" },
];

const Footer = () => {
    return (
        <footer className="bg-gray-500 text-white mt-24 w-full" dir="rtl">
            <div className="flex flex-col-reverse md:flex-row md:items-start items-center">
                
                {/* Left side: links section */}
                <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6">
                        
                        {/* Our Products */}
                        <div className="flex flex-col gap-3 items-center md:items-start">
                            <h1 className="text-xl md:text-2xl font-bold mb-3">محصولات ما</h1>
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="hover:text-black transition-colors"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>

                        {/* Brands */}
                        <div className="flex flex-col gap-3 items-center md:items-start">
                            <h1 className="text-xl md:text-2xl font-bold mb-3">برندها</h1>
                            <ul className="space-y-2 text-md">
                                {["Nike", "Adidas", "Gucci", "Converse"].map((brand, i) => (
                                    <li key={i}>
                                        <Link to="/brands" className="hover:text-black transition-colors">
                                            {brand}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className="flex flex-col gap-2 items-center md:items-start">
                            <h1 className="text-xl md:text-2xl font-bold mb-3">با ما در ارتباط باشید</h1>
                            <a href="https://www.facebook.com" className="hover:text-black transition-colors">
                                <i className="fab fa-facebook"></i> Facebook
                            </a>
                            <a href="https://www.instagram.com" className="hover:text-black transition-colors">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                            <a href="https://www.whatsapp.com" className="hover:text-black transition-colors">
                                <i className="fab fa-whatsapp"></i> WhatsApp
                            </a>
                            <a href="https://www.telegram.com" className="hover:text-black transition-colors">
                                <i className="fab fa-telegram"></i> Telegram
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right side: Logo */}
                <div className="w-full md:w-1/2 flex flex-col items-center text-center p-5">
                    <h1 className="text-[8vw] md:text-[6vw] font-bold drop-shadow-lg text-white md:text-black">
                        NEW STYLE
                    </h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
