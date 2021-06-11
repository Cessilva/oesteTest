import { Component } from 'react';
import DatosForm from '../../UI/DatosForm';

class Login extends Component{
    list= [["Email","Password"],["Enviar"]];
    render( ) { return <DatosForm list={this.list}/> }
}

export default Login;