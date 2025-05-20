import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.girl_with_headphone_image,
    title: "Сапалы дыбыс",
    description: "Премиум құлаққаптармен таза дыбыстан ләззат алыңыз.",
  },
  {
    id: 2,
    image: assets.girl_with_earphone_image,
    title: "Әрдайым байланыста болыңыз",
    description: "Әр жағдайға арналған ықшам әрі стильді құлаққаптар.",
  },
  {
    id: 3,
    image: assets.boy_with_laptop_image,
    title: "Әр пиксельде күш",
    description: "Жұмысқа, ойынға және тағы басқаға арналған соңғы үлгідегі ноутбуктерді сатып алыңыз.",
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-14">
      {/* Тақырып */}
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Ұсынылған өнімдер</p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      {/* Өнімдер */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div
            key={id}
            className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Сурет */}
            <Image
              src={image}
              alt={`${title} Сурет`}
              className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
            />
            {/* Мәтін */}
            <div className="group-hover:-translate-y-2 transition-transform duration-300 absolute bottom-8 left-8 text-white space-y-2">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-xs">
                {description}
              </p>
              {/* Түйме */}
              <button className="flex items-center gap-2 bg-orange-600 px-4 py-2 rounded hover:bg-orange-700 transition">
                Сатып алу
                <Image
                  className="h-4 w-4"
                  src={assets.redirect_icon}
                  alt="Бағыттау белгішесі"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
