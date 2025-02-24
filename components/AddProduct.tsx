import { useState } from "react";
import supabase from "../lib/supabase";

const AddProduct = () => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddProduct = async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase.from("products").insert([
      {
        code,
        name,
        image_url: imageUrl,
        total_quantity: totalQuantity,
      },
    ]);

    setLoading(false);

    if (error) {
      setError("Error adding product: " + error.message);
    } else {
      setCode("");
      setName("");
      setImageUrl("");
      setTotalQuantity(0);
      alert("Product added successfully!");
    }
  };

  return (
    <div className="container">
      <h1>Add New Product</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Product Code"
          required
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Product Image URL"
        />
        <input
          type="number"
          value={totalQuantity}
          onChange={(e) => setTotalQuantity(Number(e.target.value))}
          placeholder="Total Quantity"
          required
        />
        <button onClick={handleAddProduct} disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
