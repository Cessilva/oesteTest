import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../UI/layouts/Layout';
const useStyles = makeStyles((theme) => ({
  heightLayout: {
    height:'100%',
  },
}));
const LoginPage =()=> {
  const classes = useStyles();
    return(
      // const dataJSX = '';
      <Layout className={classes.heightLayout}>
        <p> Login page Component!</p>
      </Layout>
    );
  }
  
  export default LoginPage;