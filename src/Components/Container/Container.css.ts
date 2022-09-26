import { style } from '@vanilla-extract/css';

const container = style({
  margin: '0 auto 0 auto',
  width: '60%',
  overflowX: 'hidden',
  backgroundColor: 'rgb(19, 22, 30)',
  '@media': {
    'screen and (min-width: 750px)': {
      display: 'grid',
      gridTemplateColumns: 'repeat(10,minmax(0,1fr))',
    },
  },
});

export { container };
