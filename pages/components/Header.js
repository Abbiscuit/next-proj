import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
  },
  title: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="default" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Hnyka Studio
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
