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
  button: {
    background: theme.palette.info.light,
    marginLeft: theme.spacing(2),
  },
}));

export default useStyles;
