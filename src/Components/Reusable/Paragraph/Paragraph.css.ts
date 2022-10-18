import { style } from '@vanilla-extract/css';

export const ParagraphStyle = style({
  color: '#859ba8',
  padding: '0 5px 0 5px',
  '@media': {
    'screen and (min-width: 750px)': {
      fontSize: '18px',
    },
  },
});
