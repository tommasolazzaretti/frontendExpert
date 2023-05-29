import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';import { AuthComponent } from './auth.component';
import {RouterModule, Routes} from "@angular/router";
import {ModalModule} from "../../components/modal/modal.module";
import {LoginModule} from "../../components/login/login.module";

const routes: Routes = [
  { path: '', component: AuthComponent },
];

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    ModalModule,
    RouterModule.forChild(routes),
    LoginModule
  ]
})
export class AuthModule { }
