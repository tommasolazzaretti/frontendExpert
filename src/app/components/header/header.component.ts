import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {StateService} from "../../services/stateService/state.service";
import {Subscription} from "rxjs";
import {State} from "../../models/state";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentState: State = {} as State;
  isLoggedIn = false;
  private stateSubscription: Subscription = new Subscription();
  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.stateService.getState().subscribe((state) => {
      console.log("header stateSubscription : ", state.user)
      this.currentState = state;
    });
  }

  ngOnDestroy() {
    this.stateSubscription.unsubscribe();
  }

  logout() {
    this.stateService.setState({user: { username : null }});
  }

}
