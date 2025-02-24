// src/components/ReportCard.tsx
import React from "react";
import { AddProduct, RemoveProduct } from "../types"; // นำเข้า AddProduct, RemoveProduct type

interface ReportCardProps {
  addedProducts: AddProduct[];
  removedProducts: RemoveProduct[];
}

const ReportCard: React.FC<ReportCardProps> = ({
  addedProducts,
  removedProducts,
}) => {
  const totalAdded = addedProducts.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalRemoved = removedProducts.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className="p-4 border rounded-md">
      <h3 className="text-lg font-semibold">Stock Report</h3>
      <p className="text-sm text-gray-500">Total Added: {totalAdded} items</p>
      <p className="text-sm text-gray-500">
        Total Removed: {totalRemoved} items
      </p>
    </div>
  );
};

export default ReportCard;
