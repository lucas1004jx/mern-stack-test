import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    display: 'flex',
  },
  logo: {
    height: theme.spacing(7),
  },
}));

export default useStyles;
