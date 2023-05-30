import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Subscription} from "rxjs";
import {StateService} from "../../services/stateService/state.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CookieService} from "../../services/coockieService/cookie.service";
import {State} from "../../models/state";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  @Output() loginSuccess: EventEmitter<void> = new EventEmitter<void>();
  loginForm: FormGroup = {} as FormGroup;
  currentState: State = {} as State;
  successfulLogin: boolean | undefined = undefined;

  constructor(
    private stateService: StateService,
    private cookieService: CookieService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.createLoginForm();

    this.stateService.getState().subscribe((state) => {
      this.currentState = state;
    });
  }

  createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    this.successfulLogin = this.loginForm.controls['password'].value.length >= 4;
  }

  setNewStateAndCookies() {
    const newState = {username: this.loginForm.value.username};
    this.cookieService.setCookie('currentUser', newState.username)
    this.stateService.setState({user: {...this.currentState, ...newState}});
    this.router.navigate(['/home'], {replaceUrl: true});
    this.loginSuccess.emit();
  }

  protected readonly undefined = undefined;
}
