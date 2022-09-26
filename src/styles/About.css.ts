import { style } from '@vanilla-extract/css';

const placeHolderImage = style({
  height: '300px',
  width: '100%',
  border: '1px solid green',
});

const aboutImage = style({
  gridColumnStart: '1',
  gridColumnEnd: '5',
});

const aboutParagraph = style({
  gridColumnStart: '6',
  gridColumnEnd: '10',
});

export { placeHolderImage, aboutImage, aboutParagraph };
