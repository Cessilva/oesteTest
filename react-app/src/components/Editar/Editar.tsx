import axios from 'axios';
import { Component } from 'react';
import DatosForm from '../../UI/Forms/DatosForm';

interface Iprops {

}

class Editar extends Component <Iprops> {
    onEditarClickHandler = async ( nombre: string, edad:string,sexo:string) => {
        axios.post(`/api/auth`, {nombre: nombre, edad:edad,sexo:sexo})
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
    render( ) { return <EditarView {...this.props} botonHandler={this.onEditarClickHandler}/> }
    
}
interface IProps2{
    botonHandler: any;
}
class EditarView extends Component<IProps2>{
    list= [["Nombre","Edad","Sexo"],["Actualizar","Eliminar"]];
    render( ) { return <DatosForm list={this.list} botonHandler={this.props.botonHandler}/> }
}

export default Editar;