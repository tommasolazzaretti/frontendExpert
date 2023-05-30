import {Component, ViewEncapsulation} from '@angular/core';
import {StateService} from "../../services/stateService/state.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent {
  cartItems: any[] = []; // Array per memorizzare gli elementi del carrello
  itemAdded: boolean = false;

  constructor(private stateService: StateService) {
    this.stateService.getState().subscribe((state) => {
      this.cartItems = state.cart;
      this.animateCart();
    });
  }

  animateCart(): void {
    this.itemAdded = true;

    setTimeout(() => {
      this.itemAdded = false;
      this.stateService.hideLoader();
    }, 2000);
  }

  showCartItems(): void {
    let message = '';

    this.cartItems.forEach((item) => {
      message += `Articolo: ${item.name} - Quantità: ${item.quantity}\n`;
    });

    if (message === '') {
      message = 'Il carrello è vuoto.';
    }

    alert(message);
  }

}
