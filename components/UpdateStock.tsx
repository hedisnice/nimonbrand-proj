// components/UpdateStock.tsx
import { useState } from "react";
import supabase from "../lib/supabase";

const UpdateStock = () => {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleUpdateStock = async () => {
    if (quantity !== 0) {
      const { data, error } = await supabase.from("products").upsert([
        {
          id: productId,
          total_quantity: quantity,
        },
      ]);

      if (data) {
        alert("อัปเดตสต๊อกสินค้าเรียบร้อย");
      }
      if (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded">
      <h2 className="text-xl font-bold mb-4">อัปเดตสต๊อกสินค้า</h2>
      <div className="mb-4">
        <label htmlFor="productId" className="block mb-2">
          รหัสสินค้า:
        </label>
        <input
          type="text"
          id="productId"
          className="border p-2 w-full"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block mb-2">
          จำนวนสินค้าใหม่:
        </label>
        <input
          type="number"
          id="quantity"
          className="border p-2 w-full"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2"
        onClick={handleUpdateStock}
      >
        อัปเดตสต๊อก
      </button>
    </div>
  );
};

export default UpdateStock;
