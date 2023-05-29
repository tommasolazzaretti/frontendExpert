import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Verifica se l'utente è autenticato
    if (this.isLoggedIn()) {
      return true;
    }

    // Se l'utente non è autenticato, reindirizzalo alla pagina di login
    this.router.navigate(['/login']);
    return false;
  }

  isLoggedIn(): boolean {
    // Implementa la logica per verificare se l'utente è autenticato o meno.
    // Puoi utilizzare il tuo servizio di autenticazione o qualsiasi altra logica che preferisci.
    // Restituisci true se l'utente è autenticato, altrimenti false.

    // Esempio di implementazione:
    const user = sessionStorage.getItem('currentUser');
    return !!user; // Restituisce true se l'utente esiste, altrimenti false
  }
}
