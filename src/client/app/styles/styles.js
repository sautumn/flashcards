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
  maxWidth: '300px',
  height: '80%',
  // width: '100%',
};
styles.cardContainer = cardContainer;

export default styles;
