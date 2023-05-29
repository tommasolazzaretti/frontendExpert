import {
  trigger,
  animate,
  transition,
  style,
  query,
  group
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(':enter', [style({opacity: 0})], {optional: true}),
    query(
      ':leave',
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [style({opacity: 1}), animate('0.3s', style({opacity: 0}))],
      {optional: true}
    ),
    query(
      ':enter',
      [style({opacity: 0}), animate('0.3s', style({opacity: 1}))],
      {optional: true}
    )
  ])
]);

export const slider = trigger('routeAnimations', [
  transition('* => isLeft', slideTo('left')),
  transition('* => isRight', slideTo('right')),
  transition('isRight => *', slideTo('left')),
  transition('isLeft => *', slideTo('right'))
]);

function slideTo(direction: any) {
  const optional = {optional: true};
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%'
        })
      ],
      optional
    ),
    query(':enter', [style({[direction]: '-100%'})]),
    group([
      query(
        ':leave',
        [animate('600ms ease', style({[direction]: '100%'}))],
        optional
      ),
      query(':enter', [animate('600ms ease', style({[direction]: '0%'}))])
    ])
  ];
}
