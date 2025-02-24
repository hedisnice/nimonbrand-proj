import { useEffect, useState } from "react";
import supabase from "../lib/supabase";

const RemoveProduct = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        setError("Error fetching products: " + error.message);
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  const handleRemoveProduct = async () => {
    if (!selectedProduct) return;

    setLoading(true);
    setError("");

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", selectedProduct);

    setLoading(false);

    if (error) {
      setError("Error removing product: " + error.message);
    } else {
      setProducts(products.filter((product) => product.id !== selectedProduct));
      setSelectedProduct(null);
      alert("Product removed successfully!");
    }
  };

  return (
    <div className="container">
      <h1>Remove Product</h1>
      {error && <p className="error">{error}</p>}
      <select
        onChange={(e) => setSelectedProduct(e.target.value)}
        value={selectedProduct || ""}
      >
        <option value="">Select a product to remove</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.code} - {product.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleRemoveProduct}
        disabled={loading || !selectedProduct}
      >
        {loading ? "Removing..." : "Remove Product"}
      </button>
    </div>
  );
};

export default RemoveProduct;
