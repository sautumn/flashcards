// Component inline styles, tweaks from Material-UI
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const styles = {};

export const myTheme = darkBaseTheme;
myTheme.fontFamily = '"Roboto Mono", monospace';
myTheme.palette.canvasColor = '#000000';
myTheme.palette.primary1Color = '#e67e22';

styles.myTheme = myTheme;

const outsideText = {
  marginBottom: '3%',
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
  borderRight: 'solid 2px white',
  // borderBottom: 'solid 2px white',
};
styles.cardContainer = cardContainer;

export const score = {
  textAlign: 'right',
  textTransform: 'uppercase',
  marginRight: '3%',
}
styles.score = score;

export const cardActions = {
  width: '100%',
  textAlign: 'center',
  position: 'absolute',
  bottom: 0,
};
styles.cardActions = cardActions;

export const link = {
  color: '#e67e22',
};
styles.link = link;

export default styles;
