import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  formWrapper: {
    width: 400,
    padding: theme.spacing(2),
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      height: 48,
      marginRight: theme.spacing(1),
    },
  },
  signUp: {
    textAlign: 'right',
    marginTop: theme.spacing(1),
  },
}));

export default useStyles;
