import { Component } from 'react';
import { IsString, Length, IsDefined, IsNotEmpty} from 'class-validator';

import LoginForm from '../../UI/Forms/LoginForm';
import { dataValidation } from '../../shared/dataValidation';


export class AuthUserValidator {
    @IsDefined({ message: `El nombre debe ser definido` })
    @IsNotEmpty({ message: `El nombre no debe estar vacio` })
    @IsString({ message: `El nombre debe ser un string` })
    userName?: string;

    @IsDefined({ message: `Contraseña debe ser definida` })
    @IsNotEmpty({ message: `La contraseña no debe estar vacia` })
    @Length(1, 8, { message: `Contraseña entre 1-8 caracteres` })
    password?: string;
}

interface Iprops {

}

class Login extends Component<Iprops> {

    onCreateClickHandler = async (userName: string, password: string) => {
        const errors = await dataValidation(AuthUserValidator, { userName, password });
        if (errors) {
            console.log(`Data Valitation failed `, errors)
        } else {
            console.log(`UserName: `, userName,`Password: `,password)
        }
    }
    render() { return <LoginView {...this.props} botonHandler={this.onCreateClickHandler} /> }
}

interface IProps2 {
    botonHandler: any;
}
class LoginView extends Component<IProps2> {
    render() {
        return (
            <LoginForm botonHandler={this.props.botonHandler}></LoginForm>
        );
    }
}

export default Login;
