import { style } from '@vanilla-extract/css';

const container = style({
  margin: '0 auto 0 auto',
  width: '80%',
  overflowX: 'hidden',
  backgroundColor: 'rgb(19, 22, 30)',
  '@media': {
    'screen and (min-width: 768px)': {
      padding: 100,
    },
  },
});

const width100 = style({
  width: '100vw',
});

export { container, width100 };
