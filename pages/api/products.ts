import { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../lib/supabase";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    // ดึงข้อมูลสินค้าทั้งหมด
    const { data, error } = await supabase.from("products").select("*");

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  } else if (req.method === "POST") {
    // เพิ่มสินค้าใหม่
    const { code, name, image_url, total_quantity, payment_status } = req.body;

    if (
      !code ||
      !name ||
      total_quantity === undefined ||
      payment_status === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { data, error } = await supabase
      .from("products")
      .insert([{ code, name, image_url, total_quantity, payment_status }]);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  } else if (req.method === "PUT") {
    // แก้ไขข้อมูลสินค้า
    const { id, code, name, image_url, total_quantity, payment_status } =
      req.body;

    if (!id) return res.status(400).json({ error: "Product ID is required" });

    const { data, error } = await supabase
      .from("products")
      .update({ code, name, image_url, total_quantity, payment_status })
      .match({ id });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  } else if (req.method === "DELETE") {
    // ลบสินค้า
    const { id } = req.body;

    if (!id) return res.status(400).json({ error: "Product ID is required" });

    const { data, error } = await supabase
      .from("products")
      .delete()
      .match({ id });

    if (error) return res.status(500).json({ error: error.message });
    return res
      .status(200)
      .json({ message: "Product deleted successfully", data });
  } else {
    res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
