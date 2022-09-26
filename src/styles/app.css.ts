import { style, globalStyle } from '@vanilla-extract/css';

const gridLayout = style({
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: 'repeat(6, 1fr)',
});

const mainContainer = style({
  margin: '0 auto 0 auto',
  width: '100vw',
  overflowX: 'hidden',
  backgroundColor: 'rgb(19, 22, 30)',
});

export { gridLayout, mainContainer };
