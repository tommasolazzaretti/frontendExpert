export interface State {
  user: User;
  cart: CartItem[];
  isLoading: boolean;
}

export interface User {
  username: string | null;
}

export interface CartItem {
  articleId: string;
  name: string;
  quantity: number;
}
