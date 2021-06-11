import { Component } from 'react';
import DatosForm from '../../UI/DatosForm';

class Crear extends Component {
    list= [["Nombre","Edad","Sexo"],["Guardar"]];
    render() {
        return (  <DatosForm list={this.list} />     );
    }
    componentDidMount() {
        console.log('componentCrearDidMount');
    }
}

export default Crear