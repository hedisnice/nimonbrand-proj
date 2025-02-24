export interface User {
  id: string;
  username: string;
  displayname: string;
  password: string;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  image_url: string;
  total_quantity: number;
  payment_status: boolean;
  created_at: string;
}
