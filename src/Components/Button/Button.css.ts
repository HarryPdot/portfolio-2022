import { style } from '@vanilla-extract/css'
import { firaCode, testFont } from '../../assets/fonts/fonts.css'

export const button = style({
    border: '2px solid #26cfca',
    fontSize: 20,
    padding: '5px 10px',
    width: 'fit-content',
    fontFamily: `${testFont}`
})