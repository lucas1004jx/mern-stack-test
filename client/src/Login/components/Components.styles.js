import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  inputArea: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonWrapper: {
    textAlign: 'right',
    marginTop: theme.spacing(4),
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
