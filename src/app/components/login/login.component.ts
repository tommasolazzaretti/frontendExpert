import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    // Qui puoi implementare la logica per l'accesso
    // Puoi inviare una richiesta HTTP al tuo server per verificare le credenziali
    // e gestire la risposta di conseguenza
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
