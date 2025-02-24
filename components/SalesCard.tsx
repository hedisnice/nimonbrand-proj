// src/components/SaleCard.tsx
import React from "react";
import { Product } from "../types"; // นำเข้า Product type

interface SaleCardProps {
  product: Product;
  soldQuantity: number;
}

const SaleCard: React.FC<SaleCardProps> = ({ product, soldQuantity }) => {
  return (
    <div className="p-4 border rounded-md">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">Sold Quantity: {soldQuantity}</p>
      <p className="mt-2">
        Remaining Stock: {product.total_quantity - soldQuantity}
      </p>
    </div>
  );
};

export default SaleCard;
