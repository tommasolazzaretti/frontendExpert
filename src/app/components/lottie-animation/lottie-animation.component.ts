import {Component, Input, ViewEncapsulation} from '@angular/core';
import {AnimationItem} from 'lottie-web';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'lottie-animation',
  template: `
    <div [class]="mode === 'layer' ? 'lottie-layer-container' : 'lottie-draw-container'">
      <ng-lottie
        [options]="lottieConfig"
        [height]="height.concat('px')"
        [width]="width.concat('px')"
        (animationCreated)="animationCreated($event)">
      </ng-lottie>
    </div>`,
  styleUrls: ['./lottie-animation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LottieAnimationComponent {

  @Input() lottieConfig: AnimationOptions | null = null;
  @Input() mode: 'draw' | 'layer' = 'draw';
  @Input() height: string = '0';
  @Input() width: string = '0';

  constructor() {}

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
