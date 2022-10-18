import { style } from '@vanilla-extract/css';

const projectName = style({
  gridColumnStart: '1',
  gridColumnEnd: '3',
  gridRowStart: '1',
  fontSize: 32,
  textDecoration: 'underline',
});

const description = style({
  gridColumnStart: '6',
  gridColumnEnd: '11',
  gridRowStart: '2',
  '@media': {
    'screen and (min-width: 750px)': {
      fontSize: '18px',
    },
  },
});

const projectContainer = style({
  cursor: 'default',
  '@media': {
    'screen and (min-width: 750px)': {
      display: 'grid',
      gridTemplateColumns: 'repeat(10,minmax(0,1fr))',
      gridTemplateRows: 'repeat(2,(0,1fr))',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

const projects100 = style({
  width: '100%',
});

export { description, projectName, projectContainer, projects100 };
