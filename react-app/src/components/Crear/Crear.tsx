import { Component } from 'react';
// , Length 
import { IsString} from 'class-validator';
import axios from '../../UI/axios';
import CrearForm from '../../UI/Forms/CrearForm';
import {dataValidation} from '../../shared/validation';


export class AuthUserValidator {

    @IsString({message: `El nombre debe ser un string`})
    nombre?: string;

    edad?: string;
    
    @IsString({message: `El sexo debe ser un string`})
    // @Length(1,1,{message: `Puede ser F o M`})
    sexo?: string;

} 

interface Iprops {

}

class Crear extends Component <Iprops> {
    codigo=`xxxx`;
    
    onCreateClickHandler = async ( nombre: string, edad:string,sexo:string) => {
        const errors = await dataValidation(AuthUserValidator, {nombre,edad,sexo});
    if ( errors ) { 
         console.log(`Data Valitation failed `, errors)
    } else {
        axios.post(`/api/users`, {nombre: nombre, edad:edad, sexo:sexo, codigo:this.codigo})
        .then(response => {
            if ( response.data.length ){
                console.log(`API Validation succesful, user found: `, response.data[1].token, response.data[0] );
            } else{
                console.log(`API Validation unsuccesful, no user found: `, response.data);
            }
            
        })
        .catch(error => {
            console.log(`Error al crear : `, error)
            })
    } 
}
    render( ) { return <CrearView {...this.props} botonHandler={this.onCreateClickHandler}/> }   
}

interface IProps2{
      botonHandler: any;
}
class CrearView extends Component <IProps2> {
    render( ) {
    return (
        <CrearForm  botonHandler={this.props.botonHandler}></CrearForm>
        );
    }
}

export default Crear;
