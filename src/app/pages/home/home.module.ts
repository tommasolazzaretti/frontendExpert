import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CardModule} from "../../components/card/card.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule {}
