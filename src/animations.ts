import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

const CONFETTI_DURATION = 3;
const START_DURATION = 8;
//const CONFETTI_DURATION = 1;
//const START_DURATION = 1;
const SLIDE_DURATION = 0.5;
const FINAL_SLIDE = 9;

const confettiKeyframes = keyframes([
    style({visibility: 'visible', opacity: 0, offset: 0}),
    style({opacity: 1, offset: 0.3}),
    style({opacity: 1, offset: 0.7}),
    style({opacity: 0, offset: 0.99}),
    style({visibility: 'hidden', offset: 1})
]);
const fireworksKeyframes = keyframes([
    style({visibility: 'visible', opacity: 0, offset: 0}),
    style({opacity: 1, offset: 0.1}),
    style({opacity: 1, offset: 0.9}),
    style({opacity: 0, visibility: 'hidden', offset: 1}),
]);

const slideFromRight = keyframes([
    style({opacity: 0, transform: 'translateX(100%)', offset: 0}),
    style({opacity: 0.5, transform: 'translateX(-20%)', offset: 0.5}),
    style({opacity: 1, transform: 'translateX(0)', offset: 1})
]);

export const animations = [
    trigger('taskState', [
        transition('preload => start', animate(`${START_DURATION}s`, keyframes([
            style({opacity: 0, transform: 'scale(0)', offset: 0}),
            style({opacity: 1, transform: 'scale(1.2)', offset: 0.05}),
            style({transform: 'scale(0.9)', offset: 0.07}),
            style({transform: 'scale(1)', offset: 0.2}),
            style({transform: 'rotate(-10deg)', offset: 0.21}),
            style({transform: 'rotate(10deg)', offset: 0.22}),
            style({transform: 'rotate(-10deg)', offset: 0.23}),
            style({transform: 'rotate(10deg)', offset: 0.24}),
            style({transform: 'rotate(-10deg)', offset: 0.25}),
            style({transform: 'rotate(10deg)', offset: 0.26}),
            style({transform: 'rotate(0)', offset: 0.28}),
            style({transform: 'scale(0.95)', offset: 0.4}),
            style({transform: 'scale(1.2)', offset: 0.42}),
            style({transform: 'scale(0.85)', offset: 0.47}),
            style({transform: 'scale(1.2)', offset: 0.49}),
            style({transform: 'scale(0.85)', offset: 0.54}),
            style({transform: 'scale(1.2)', offset: 0.56}),
            style({transform: 'scale(0.85)', offset: 0.61}),
            style({transform: 'scale(1.1)', offset: 0.63}),
            style({transform: 'scale(0.9)', offset: 0.75}),
            style({transform: 'scale(1) translateY(-20px)', offset: 0.76}),
            style({transform: 'translateY(20px)', offset: 0.77}),
            style({transform: 'translateY(-20px)', offset: 0.78}),
            style({transform: 'translateY(0)', offset: 0.79}),
            style({transform: 'scale(1.1)', offset: 0.9}),
            style({transform: 'scale(0.9)', offset: 0.95}),
            style({transform: 'scale(1)', offset: 1}),
        ]))),
        transition('start => start-next', animate('1s', keyframes([
            style({opacity: 1, transform: 'scale(1)', offset: 0}),
            style({opacity: 0.97, transform: 'scale(0.97)', offset: 0.2}),
            style({opacity: 0.95, transform: 'scale(0.95) rotate(-10deg)', offset: 0.25}),
            style({opacity: 0.93, transform: 'scale(0.93) rotate(10deg)', offset: 0.3}),
            style({opacity: 0.9, transform: 'scale(0.9) rotate(-10deg)', offset: 0.35}),
            style({opacity: 0.87, transform: 'scale(0.87) rotate(10deg)', offset: 0.4}),
            style({opacity: 0.85, transform: 'scale(0.85) rotate(0deg)', offset: 0.45}),
            style({opacity: 0, transform: 'scale(0)', offset: 1}),
        ]))),
        transition('current => next', animate(`${SLIDE_DURATION}s ${CONFETTI_DURATION}s`, keyframes([
            style({opacity: 1, transform: 'translateX(0)', offset: 0}),
            style({opacity: 1, transform: 'translateX(10%)', offset: 0.3}),
            style({opacity: 0, transform: 'translateX(-100%)', offset: 1})
        ]))),
        transition('start-next => current', animate(`${SLIDE_DURATION}s`, slideFromRight)),
        transition('next => current', animate(500, slideFromRight)),
        transition('* => end', animate(`${FINAL_SLIDE}s`, keyframes([
            style({opacity: 0, transform: 'scale(0)'}),
            style({opacity: 1, transform: 'scale(1.2)'}),
            style({transform: 'scale(0.8)'}),
            style({transform: 'scale(1.2)'}),
            style({transform: 'scale(0.8)'}),
            style({transform: 'scale(1.2)'}),
            style({transform: 'scale(0.8)'}),
            style({transform: 'scale(1.2)'}),
            style({transform: 'scale(0.8)'}),
            style({transform: 'scale(1.2)'}),
            style({transform: 'scale(0.8)'}),
            style({transform: 'scale(1.2)'}),
            style({transform: 'scale(0)'}),
        ]))),
        transition('* => reward', animate(`${SLIDE_DURATION}s`, keyframes([
            style({opacity: 0, transform: 'scale(0)'}),
            style({opacity: 1, transform: 'scale(1.2)'}),
            style({transform: 'scale(1)'})
        ]))),
    ]),
    trigger('confetti', [
        state('*', style({visibility: 'hidden'})),
        transition('preload => start', animate(`${CONFETTI_DURATION}s ${START_DURATION}s`, confettiKeyframes)),
        transition('current => next', animate(`${CONFETTI_DURATION}s`, confettiKeyframes)),
    ]),
    trigger('fireworks', [
        state('*', style({visibility: 'hidden'})),
        transition('* => end', animate(`${FINAL_SLIDE}s`, fireworksKeyframes))
    ]),
    trigger('input', [
        transition('* => error', animate(300, keyframes([
            style({transform: 'translateX(0)'}),
            style({transform: 'translateX(-10px)'}),
            style({transform: 'translateX(10px)'}),
            style({transform: 'translateX(-10px)'}),
            style({transform: 'translateX(5px)'}),
            style({transform: 'translateX(-5px)'}),
            style({transform: 'translateX(0)'}),
        ])))
    ])
];