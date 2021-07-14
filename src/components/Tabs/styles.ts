import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabs: {
    backgroundColor: '#E5E5E5',
    boxShadow: 'none',
    color: '#6E6893',
    marginBottom: '20px',
    borderBottom: '1px solid #C6C2DE',
  },
  indicator: {
    backgroundColor: '#25213b',
  },
  rightAlign: {
    opacity: '1!important',
    marginLeft: 'auto',
    textTransform: 'none',
  },
  tableHeadText: {
    textTransform: 'none',
  },
}));
