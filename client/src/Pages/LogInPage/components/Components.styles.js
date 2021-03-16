import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  inputArea: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  buttonWrapper: {
    textAlign: 'right',
    marginTop: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(2),
  },
  errorWrapper: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
