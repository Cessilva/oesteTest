import { Component } from 'react';
import DatosForm from '../../UI/DatosForm';

class Crear extends Component {
    render() {
        return (  <DatosForm />     );
    }
    componentDidMount() {
        console.log('componentCrearDidMount');
    }
}

export default Crear