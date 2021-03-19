import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  imgWrapper: {
    width: '100%',
    padding: theme.spacing(1),
    '& img': {
      width: '100%',
      objectFit: 'contain',
    },
  },
}));

export default useStyles;
