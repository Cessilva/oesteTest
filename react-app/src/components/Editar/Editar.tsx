import { Component } from 'react';
import EditarLayout from '../../UI/layouts/EditarLayout';

class Editar extends Component {
    render() {
        return (  <EditarLayout />     );
    }
    componentDidMount() {
        console.log('componentEditarDidMount');
    }
}

export default Editar