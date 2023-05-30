import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
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
  @Output() loginSuccess: EventEmitter<void> = new EventEmitter<void>();
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
    const newState = { username: this.loginForm.value.username };
    this.cookieService.setCookie('currentUser', newState.username)
    this.stateService.setState({user: { ...this.currentState, ...newState }});
    this.router.navigate(['/home'], { replaceUrl: true });
    this.loginSuccess.emit();
  }
}
