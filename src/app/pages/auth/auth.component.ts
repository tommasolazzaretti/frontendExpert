import {Component, ViewEncapsulation} from '@angular/core';
import {StateService} from "../../services/stateService/state.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent {

  constructor(
    private stateService: StateService
  ) {

  }

}
