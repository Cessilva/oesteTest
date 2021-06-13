
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withRouter} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const MyAppBar = (props:any)=> {
    const classes = useStyles();

    const homeButtonClickHandler=()=>{
      console.log('My AppBar homeButtonClickHandler')
      props.history.push({pathname: '/'})
    };
    const adminButtonClickHandler=()=>{
      console.log('My AppBar adminButtonClickHandler')
      props.history.push({pathname: '/Admin'})
    };
    const loginButtonClickHandler=()=>{
      console.log('My AppBar loginButtonClickHandler')
      props.history.push({pathname: '/Login'})
    };
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              AppOeste
            </Typography>
            <Button color="inherit" onClick={homeButtonClickHandler}>Home</Button>
            <Button color="inherit" onClick={adminButtonClickHandler}>Admin</Button>
            <Button color="inherit" onClick={loginButtonClickHandler}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
}
export default withRouter(MyAppBar);