import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LottieAnimationComponent} from "./lottie-animation.component";
import {LottieComponent} from "ngx-lottie";

@NgModule({
  declarations: [
    LottieAnimationComponent
  ],
  exports: [
    LottieAnimationComponent
  ],
  imports: [
    CommonModule,
    LottieComponent,
  ]
})
export class LottieAnimationModule {
}
