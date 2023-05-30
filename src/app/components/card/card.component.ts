import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {StateService} from "../../services/stateService/state.service";
import {CookieService} from "../../services/coockieService/cookie.service";
import {Article} from "../../models/article";
import {CartItem} from "../../models/state";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  @Input() article: Article = {} as Article;
  @Output() addToCartEvent: EventEmitter<Article> = new EventEmitter<Article>();

  constructor(
    private stateService: StateService,
    private cookieService: CookieService,
  ) {
  }

  addToCart(article: Article): void {
    this.addToCartEvent.emit(article);
  }

}
