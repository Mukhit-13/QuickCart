import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="логотип" />
          <p className="mt-6 text-sm">
            Lorem Ipsum баспа және теру саласының жалған мәтіні болып табылады. Lorem Ipsum 1500 жылдардан бастап, белгісіз баспашы әріптердің галереясын алып, оны үлгі кітапша жасау үшін өзгерткен уақыттан бері осы саланың стандартты жалған мәтіні болып келеді.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Компания</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Басты бет</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Біз туралы</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Байланыс</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Құпиялылық саясаты</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Байланыс</h2>
            <div className="text-sm space-y-2">
              <p>+7-705-825-8909</p>
              <p>m.zhussipbay@aues.kz</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © GreatStack.dev Барлық құқықтар қорғалған.
      </p>
    </footer>
  );
};

export default Footer;
