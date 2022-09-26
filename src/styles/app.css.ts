import { style, globalStyle } from '@vanilla-extract/css';

const gridLayout = style({
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: 'repeat(6, 1fr)',
});

export { gridLayout };
