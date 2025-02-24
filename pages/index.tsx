import { useState } from "react";
import Layout from "../components/Layout"; // ใช้ Layout คอมโพเนนต์
import AddProduct from "../components/AddProduct"; // คอมโพเนนต์ AddProduct
import Inventory from "../components/Inventory"; // คอมโพเนนต์ Inventory
import RemoveProduct from "../components/RemoveProduct"; // คอมโพเนนต์ RemoveProduct
import Report from "../components/Report"; // คอมโพเนนต์ Report

const Home = () => {
  const [activePage, setActivePage] = useState<string>("dashboard");

  return (
    <Layout setActivePage={setActivePage}>
      {" "}
      {/* ส่ง setActivePage ไปยัง Layout */}
      {/* Conditional Rendering สำหรับแสดงคอมโพเนนต์ตามที่เลือก */}
      {activePage === "add-product" && <AddProduct />}
      {activePage === "inventory" && <Inventory />}
      {activePage === "remove-product" && <RemoveProduct />}
      {activePage === "report" && <Report />}
    </Layout>
  );
};

export default Home;
