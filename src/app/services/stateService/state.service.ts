import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {CartItem, State, User} from "../../models/state";
import {CookieService} from "../coockieService/cookie.service";

const initialState = {
  user: {} as User,
  cart: [],
  isLoading: false
};

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private appState: State = initialState; // Stato dell'applicazione
  private stateSubject: BehaviorSubject<State> = new BehaviorSubject<State>(this.appState);
  private isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  constructor(private cookieService: CookieService) {
    this.checkUserFromCookie();
  }

  // Metodo per ottenere l'oggetto BehaviorSubject dello stato
  getStateSubject(): BehaviorSubject<State> {
    return this.stateSubject;
  }

  // Metodo per ottenere il valore corrente dello stato
  getState(): Observable<State> {
    return this.stateSubject.asObservable();
  }

  isLoggedIn(): Observable<boolean> {
    return this.getState().pipe(
      map((state) => !!state.user.username)
    );
  }

  // Metodo per impostare lo stato
  setState(newState: Partial<State>): void {
    this.appState = {...this.appState, ...newState};
    this.stateSubject.next(this.appState); // Emetti il nuovo stato agli iscritti
  }

  // Metodo per ripristinare lo stato iniziale
  resetState(): void {
    this.appState = initialState;
    this.stateSubject.next(this.appState); // Emetti il nuovo stato agli iscritti
  }

  checkUserFromCookie(): void {
    const userCookie = this.cookieService.getCookie('currentUser');
    if (userCookie) {
      this.setState({ user: { username: userCookie } });
    }
  }

  public showLoader(): void {
    this.isLoadingSubject.next(true);
  }

  public hideLoader(): void {
    this.isLoadingSubject.next(false);
  }

  // Funzione per aggiungere un elemento al carrello
  addToCart(item: CartItem): void {
    const cart = [...this.appState.cart]; // Copia l'array del carrello esistente
    const existingItemIndex = cart.findIndex(cartItem => cartItem.articleId === item.articleId); // Verifica se l'articolo è già presente nel carrello

    if (existingItemIndex > -1) {
      // Se l'articolo è già presente, aumenta la quantità
      cart[existingItemIndex].quantity += item.quantity;
    } else {
      // Se l'articolo non è presente, aggiungilo al carrello
      cart.push(item);
    }

    this.setState({ cart: cart });
  }

}
