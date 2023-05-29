import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from "rxjs";
import {StateService} from "../../services/stateService/state.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CookieService} from "../../services/coockieService/cookie.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = {} as FormGroup;

  currentState: any;
  private stateSubscription: Subscription = new Subscription();

  constructor(
    private stateService: StateService,
    private cookieService: CookieService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.createLoginForm();

    this.currentState = this.stateService.getState();
    this.stateSubscription = this.stateService.getStateSubject().subscribe((state) => {
      console.log("login stateSubscription : ", state.user)
      this.currentState = state.user;
    });
  }

  createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    // Qui puoi implementare la logica per l'accesso
    // Puoi inviare una richiesta HTTP al tuo server per verificare le credenziali
    // e gestire la risposta di conseguenza
    const newState = { username: this.loginForm.value.username };
    this.cookieService.setCookie('currentUser', this.loginForm.value.username)
    this.stateService.setState({user: { ...this.currentState, ...newState }});

    this.router.navigate(['/home'], { replaceUrl: true });
  }
}
