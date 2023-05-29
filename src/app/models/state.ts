export interface State {
  user: User;
  cart: CartItem[];
  isLoading: boolean;
}

export interface User {
  username: string | null;
}

export interface CartItem {
  name: string;
  quantity: number;
}
