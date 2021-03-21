import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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

}));

export default useStyles;
