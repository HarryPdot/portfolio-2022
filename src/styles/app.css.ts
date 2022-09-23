import { style, globalStyle } from '@vanilla-extract/css';

export const test = style({
  border: '1px solid red',
});

export const container = style({
  margin: '0 auto 0 auto',
  width: '100vw',
  overflowX: 'hidden',
  backgroundColor: 'rgb(19, 22, 30)',
});

export const gridLayout = style({
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: 'repeat(6, 1fr)',
});

export const appContainer = style({
  margin: 0,
  height: '100vh',
});

export const gap = style({
  height: '10em',
});

export const subHeight = style({
  height: '80%',
});
