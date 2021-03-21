import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  landingImg: {
    padding: 0,
    height: 'calc(100vh - 64px)',
    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    },
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    '& > button': {
      marginRight: theme.spacing(2),
    },
    '& > button:last-child': {
      marginRight: 0,
    },
  },

}));

export default useStyles;
