import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      background: '#FFFFFF',
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
      borderRadius: '8px',
      padding: 0,
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
    tHead: {
      backgroundColor: '#F4F2FF',
    },
    tHeadText: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '15px',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: '#6E6893',
    },
    tMainText: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',
      color: '#25213B',
      marginBottom: '5px',
    },
    tSecondaryText: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeigh: 'normal',
      fontSize: '14px',
      lineHeight: '17px',
      letterSpacing: '0.05em',
      color: '#6E6893',
      margin: 0,
    },
    address: {
      width: '150px',
    },
    pLeft: {
      paddingLeft: '65px',
    },
    status: {
      backgroundColor: '#E6E6F2',
      width: '88px',
      borderRadius: '10px',
      padding: '5px',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '15px',
      color: '#4A4AFF',
      marginBottom: '5px',
    },
    dot: {
      paddingRight: '5px',
    },
    dots: {
      color: '#8B83BA',
    },
  })
);
