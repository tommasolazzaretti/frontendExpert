import {Component, ViewEncapsulation} from '@angular/core';
import {fadeAnimation} from "./util/animations/route-animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'frontendExpert';
}
