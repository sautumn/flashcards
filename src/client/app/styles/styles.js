// Component inline styles, tweaks from Material-UI
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const styles = {};

export const myTheme = darkBaseTheme;
myTheme.fontFamily = "'Raleway', sans-serif";
// myTheme.palette.canvasColor = '#000000';
// myTheme.palette.primary1Color = '#FFFFFF';
// myTheme.palette.primary2Color = '#BADA55';
// myTheme.palette.accent3Color = '#000000',
    // accent3Color: grey500,

styles.myTheme = myTheme;

const outsideText = {
  marginBottom: '3%',
  fontFamily: "'Raleway', sans-serif",
  textAlign: 'center',
};

export const title = {
  ...outsideText,
  textAlign: 'center',
  fontSize: '40px',
  // color: '#ffffff',
  // color: '#a9bf65',
  fontWeight: '900',
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
  marginRight: '3%',
  marginTop: '1.5%',
}
styles.score = score;

export const cardActions = {
  width: '100%',
  textAlign: 'center',
  position: 'absolute',
  bottom: 0,
};
styles.cardActions = cardActions;

export const centerText = {
  textAlign: 'center, !important',
};
styles.centerText = centerText;

export const link = {
  ...centerText,
  color: '#bada55',
};
styles.link = link;

export default styles;
