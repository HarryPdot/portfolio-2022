import { fontFace, style } from '@vanilla-extract/css'

const testFont = fontFace({
    src: `url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');`
})

export const rozhaOne = style({
    fontFamily: testFont
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
