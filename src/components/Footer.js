import { Link } from "react-router-dom";
import React from "react";
const menuItems = [
    { title: "زنانه", path: "/women" },
    { title: "مردانه", path: "/men" },
    { title: "بچگانه", path: "/kids" },
    { title: " کفش/کیف", path: "/shoes" },
];
const Footer = () => {
    return (
    <div className="bg-gray-500 mt-24 w-full text-white" dir="rtl">
        <div className="flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5 sm:p-8 md:p-10">
                        <div className="flex flex-col gap-3 text-center">
                        <h1 className="text-xl md:text-2xl  font-bold mb-3">محصولات ما</h1>
                            {menuItems.map((item, index) => (
                                <div key={index} className="flex text-right pr-6">
                                    <Link
                                        to={item.path}
                                        className="group hover:text-black "
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            ))}
                    </div>
                        <div className="flex flex-col gap-3 text-center">
                        <h1 className="text-xl md:text-2xl font-bold mb-3">برندها</h1>
                        <ul className="space-y-2 text-md">
                            <a href={"/brands"}><li>Nike</li></a>
                            <a href={"/brands"}><li>Adidas</li></a>
                            <a href={"/brands"}><li>Gucci</li></a>
                            <a href={"/brands"}><li>Converse</li></a>
                        </ul>
                    </div>
                    <div className="flex flex-col  text-md text-center">
                        <h1 className="text-xl md:text-2xl font-bold text-center mb-3">با ما در ارتباط باشید </h1>
                            <a href="https://www.facebook.com"><i className="fab fa-facebook text-white"></i>Facebook</a>
                            <a href="https://www.instagram.com"><i className="fab fa-instagram text-white"></i>Instagram</a>
                            <a href="https://www.whatsapp.com"><i className="fab fa-whatsapp text-white"></i>WhatsApp</a>
                            <a href="https://www.telegram.com"><i className="fab fa-telegram text-white"></i>Telegram</a>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center text-center p-5 ">
                    <h1 className="text-[6vw] md:text-[7vw] font-bold  drop-shadow-lg text-white  md:text-black text-center ">
                    NEW STYLE
                </h1>
            </div>
            </div>
        </div>
)}
export default Footer;