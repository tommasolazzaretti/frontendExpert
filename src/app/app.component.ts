import {Component, ViewEncapsulation} from '@angular/core';
import {fadeAnimation} from "./util/animations/route-animation";
import {StateService} from "./services/stateService/state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'frontendExpert';

  isLoading: boolean = false;
  constructor(private stateService: StateService) {
    this.stateService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });

    // this.stateService.showLoader()
  }
}
