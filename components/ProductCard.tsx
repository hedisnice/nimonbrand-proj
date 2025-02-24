// src/components/ProductCard.tsx
import React from "react";
import { Product } from "../types"; // นำเข้า Product type

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="p-4 border rounded-md">
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">Code: {product.code}</p>
      <p className="mt-2">Stock Quantity: {product.total_quantity}</p>
    </div>
  );
};

export default ProductCard;
