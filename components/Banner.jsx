import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#E6E9F2] my-16 rounded-xl overflow-hidden">
      {/* JBL Саундбоксының суреті */}
      <Image
        className="max-w-[150px] md:max-w-[200px] lg:max-w-[250px] object-contain"
        src={assets.jbl_soundbox_image}
        alt="JBL Саундбоксының суреті"
        priority
      />
      {/* Мәтіндік мазмұн */}
      <div className="flex flex-col items-center justify-center text-center space-y-4 px-6 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px] md:max-w-none">
          Ойын тәжірибеңізді жаңа деңгейге көтеріңіз
        </h2>
        <p className="max-w-[343px] font-medium text-gray-800/60">
          Терең дыбыстан бастап дәл басқаруға дейін — жеңіске жету үшін барлығы.
        </p>
        <button className="group flex items-center justify-center gap-2 px-12 py-3 bg-orange-600 rounded text-white hover:bg-orange-700 transition-all">
          Сатып алу
          <Image
            className="group-hover:translate-x-1 transition-transform"
            src={assets.arrow_icon_white}
            alt="Жебе белгішесі"
            width={16}
            height={16}
          />
        </button>
      </div>
      {/* Басқару құрылғыларының суреттері */}
      <Image
        className="hidden md:block max-w-[300px] lg:max-w-[350px] object-contain"
        src={assets.md_controller_image}
        alt="Орташа экрандарға арналған ойын басқару құрылғысы"
      />
      <Image
        className="md:hidden max-w-[200px] object-contain"
        src={assets.sm_controller_image}
        alt="Шағын экрандарға арналған ойын басқару құрылғысы"
      />
    </div>
  );
};

export default Banner;
