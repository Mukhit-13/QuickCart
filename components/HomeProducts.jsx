import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {
  const { products, router } = useAppContext();

  return (
    <div className="flex flex-col items-center pt-14">
      <p className="text-2xl font-medium text-left w-full">Popular products</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-auto">
        {products?.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id || product.name} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </div>
      <button
        onClick={() => { router.push('/all-products'); }}
        className="px-12 py-2.5 border border-gray-300 rounded text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-shadow shadow-md"
      >
        See more
      </button>
    </div>
  );
};

export default HomeProducts;
