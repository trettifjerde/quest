import { trigger, state, style, transition, animate, keyframes, sequence, query, animateChild, stagger } from '@angular/animations';

const CONFETTI_DURATION = 0.5;
const START_DURATION = 1;
const START_DELAY = 1;
const SLIDE_DURATION = 0.5;

const confettiKeyframes = keyframes([
    style({display: 'block', opacity: 0, offset: 0}),
    style({opacity: 1, offset: 0.3}),
    style({opacity: 1, offset: 0.7}),
    style({opacity: 0, offset: 0.99}),
    style({display: 'none', offset: 1})
]);

const slideFromRight = keyframes([
    style({transform: 'translateX(100%)', offset: 0}),
    style({transform: 'translateX(-20%)', offset: 0.3}),
    style({transform: 'translateX(0)', offset: 1})
]);

export const animations = [
    trigger('taskState', [
        state('void', style({opacity: 0})),
        transition('void => start', animate(`${START_DURATION}s ${START_DELAY}s`, keyframes([
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
            style({transform: 'translateX(0)', offset: 0}),
            style({transform: 'translateX(10%)', offset: 0.3}),
            style({transform: 'translateX(-100%)', offset: 1})
        ]))),
        transition('start-next => current', animate(`${SLIDE_DURATION}s`, slideFromRight)),
        transition('next => current', animate(500, slideFromRight)),
        transition('* => end', animate(500, keyframes([])))
    ]),
    trigger('confetti', [
        state('*', style({display: 'none'})),
        transition('void => start', animate(`${CONFETTI_DURATION}s ${START_DURATION + START_DELAY}s`, confettiKeyframes)),
        transition('current => next', animate(`${CONFETTI_DURATION}s`, confettiKeyframes))
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