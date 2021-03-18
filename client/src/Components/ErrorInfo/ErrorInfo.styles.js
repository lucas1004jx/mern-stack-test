import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  errorWrapper: {
    marginBottom: theme.spacing(2),
  },
  errorMsg: {
    color: theme.palette.error.main,
  },
}));

export default useStyles;
