import { style } from '@vanilla-extract/css'
import { firaCode, rhozaOne } from '../../assets/fonts/fonts.css'

export const button = style({
    border: '2px solid #26cfca',
    fontSize: 20,
    padding: '5px 10px',
    width: 'fit-content',
    fontFamily: `${rhozaOne}`,
    backgroundColor: 'rgb(19, 22, 30)',
    color: '#22b4c7',
    cursor: 'pointer'
})