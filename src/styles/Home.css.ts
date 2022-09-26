import { style } from '@vanilla-extract/css';

const titleHeading = style({
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
});

const homeHeight = style({
  height: '100vh',
});

const margin0 = style({
  margin: 0,
});

export { titleHeading, homeHeight, margin0 };
