// ประเภทข้อมูลผู้ใช้
export interface User {
  id: string;
  username: string;
  displayname: string;
  created_at: string;
}

// ประเภทข้อมูลสินค้า
export interface Product {
  id: string;
  code: string;
  name: string;
  image_url: string;
  total_quantity: number;
  created_at: string;
}

// ประเภทข้อมูลการเพิ่มสินค้า
export interface AddProduct {
  id: string;
  product_id: string;
  quantity: number;
  added_date: string;
  payment_status: boolean;
  image_url: string;
  created_at: string;
}

// ประเภทข้อมูลการตัดสต็อก
export interface RemoveProduct {
  id: string;
  product_id: string;
  quantity: number;
  removed_date: string;
  platform: string;
  created_at: string;
}
