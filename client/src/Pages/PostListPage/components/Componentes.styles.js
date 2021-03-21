import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  imgWrapper: {
    width: '100%',
    padding: theme.spacing(1),
    '& img': {
      width: '100%',
      objectFit: 'contain',
    },
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
