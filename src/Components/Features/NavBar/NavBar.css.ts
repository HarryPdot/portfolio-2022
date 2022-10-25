import { style } from '@vanilla-extract/css';

const container = style({
  height: '4em',
  width: '100%',
  backgroundColor: 'rgb(19, 22, 30)',
  color: 'rgb(216, 230, 238)',
  borderBottom: '1px solid rgb(216, 230, 238)',
  position: 'fixed',
  top: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const name = style({
  fontSize: '2em',
  margin: 0,
});

export { container, name };
