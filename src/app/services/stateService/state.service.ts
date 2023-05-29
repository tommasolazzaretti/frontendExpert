import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {State, User} from "../../models/state";

const initialState = {
  user: {} as User,
  cart: []
};

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private appState: State = initialState; // Stato dell'applicazione
  private stateSubject: BehaviorSubject<State> = new BehaviorSubject<State>(this.appState);

  constructor() { }

  // Metodo per ottenere l'oggetto BehaviorSubject dello stato
  getStateSubject(): BehaviorSubject<State> {
    return this.stateSubject;
  }

  // Metodo per ottenere il valore corrente dello stato
  getValueState(): State {
    return this.appState;
  }

  // Metodo per ottenere il valore corrente dello stato
  getState(): Observable<State> {
    return this.stateSubject.asObservable();
  }

  // Metodo per impostare lo stato
  setState(newState: Partial<State>): void {
    this.appState = { ...this.appState, ...newState };
    this.stateSubject.next(this.appState); // Emetti il nuovo stato agli iscritti
  }

  // Metodo per ripristinare lo stato iniziale
  resetState(): void {
    this.appState = initialState;
    this.stateSubject.next(this.appState); // Emetti il nuovo stato agli iscritti
  }
}
