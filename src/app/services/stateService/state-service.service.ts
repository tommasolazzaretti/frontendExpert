import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private appState: any = {}; // Stato dell'applicazione

  constructor() { }

  // Metodo per ottenere lo stato corrente
  getState(): any {
    return this.appState;
  }

  // Metodo per impostare uno stato
  setState(newState: any): void {
    this.appState = { ...this.appState, ...newState };
  }

  // Metodo per ripristinare lo stato iniziale
  resetState(): void {
    this.appState = {};
  }
}
