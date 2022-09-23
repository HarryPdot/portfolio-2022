import { style } from '@vanilla-extract/css'
import { rhozaOne } from '../assets/fonts/fonts.css'


export const rozhaOne = style({
    fontFamily: `${rhozaOne}, serif;`
})

export const titleHeading = style({
    margin: '0',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gridColumnStart: '2',
    gridColumnEnd: '5',
    gridRowStart: '3',
    gridRowEnd: '4',
    gap: 6,
    fontSize: 20,
})

export const homeHeight = style({
    height: '100vh',
})

export const margin0 = style({
    margin: 0
})