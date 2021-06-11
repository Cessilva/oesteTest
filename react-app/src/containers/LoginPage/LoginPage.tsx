import  {Component} from 'react';
import Login from '../../components/Login/Login'

import LoginLayout from '../../UI/layouts/LoginLayout';


class LoginPage extends Component {
 
  
    render() {
      return (
        <LoginLayout >
            <Login/>
        </LoginLayout>
      );
    }
  }
  
export default LoginPage;