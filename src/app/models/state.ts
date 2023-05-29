export interface State {
  user: User;
  cart: CartItem[];
}

export interface User {
  username: string | null;
}

export interface CartItem {
  name: string;
  quantity: number;
}
