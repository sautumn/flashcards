// Component inline styles, tweaks from Material-UI
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const styles = {};

export const myTheme = darkBaseTheme;
myTheme.fontFamily = '"Roboto Mono", monospace';
myTheme.palette.canvasColor = '#000000';

styles.myTheme = myTheme;

const outsideText = {
  color: '#ffffff',
  fontFamily: '"Roboto Mono", monospace',
  textTransform: 'uppercase',
  textAlign: 'center',
};

export const title = {
  ...outsideText,
  fontSize: '28px',
};
styles.title = title;

export const cardContainer = {
  margin: '0 auto',
  maxWidth: '600px',
  minHeight: '80%',
  position: 'absolute',
  left: '5%',
  right: '5%',
};
styles.cardContainer = cardContainer;

export const score = {
  textAlign: 'right',
  textTransform: 'uppercase',
}
styles.score = score;

// export const cardAnswer = {
//   textAlign: 'center',
// }
// styles.cardAnswer = cardAnswer;

export const cardActions = {
  width: '100%',
  textAlign: 'center',
  position: 'absolute',
  bottom: 0,
};
styles.cardActions = cardActions;

export default styles;
