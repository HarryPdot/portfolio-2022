import { style } from '@vanilla-extract/css';

const placeHolderImage = style({
  height: '300px',
  width: '100%',
  border: '1px solid green',
});

const aboutImage = style({
  width: '100%',
  '@media': {
    'screen and (min-width: 750px)': {
      maxWidth: '400px',
      // width: '400px',
    },
    'screen and (max-width: 749px)': {
      maxWidth: '350px',
    },
  },
});

const pictureContainer = style({
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  gridColumnStart: '1',
  gridColumnEnd: '6',
});

const aboutParagraph = style({
  '@media': {
    'screen and (min-width: 750px)': {
      gridColumnStart: '7',
      gridColumnEnd: '11',
    },
    'screen and (min-width: 1400px)': {
      gridColumnStart: '6',
      gridColumnEnd: '10',
    },
  },
});

export { placeHolderImage, aboutImage, aboutParagraph, pictureContainer };
