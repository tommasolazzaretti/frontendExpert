import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {CookieService} from "./coockieService/cookie.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {}

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
    const user = this.cookieService.getCookie('currentUser');
    return !!user; // Restituisce true se l'utente esiste, altrimenti false
  }
}
