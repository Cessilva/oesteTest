import axios from '../../axios';
import EditarForm from '../../UI/Forms/EditarForm';
import MyProgressBar from '../../UI/MyProgressBar';
import { Component } from 'react'


class Editar extends Component {
    //Representes in which state belong:loading,successfull or error 
    state = { loading: false, data: null, error: null };

    render() {//THIS IS NOT GOING TO SHOW NOTHING
        return <EditarView {...this.state} botonGenerarCodeHandler={this.GenerarClickHandler} botonBuscarClickHandler={this.searchClickHandler} botonActualizarHandler={this.onActualizarClickHandler} botonEliminarHandler={this.onEliminarClickHandler} />
    }

    onActualizarClickHandler = async (id:string , nombre: string, edad: number, sexo: string) => {
        console.log("Acttualizar")
        axios.patch(`/api/users/${id}`, { nombre: nombre, edad: edad, sexo: sexo })
            .then(response => {
                if (response.data.length) {
                    console.log(`Actualizado `, response.data[1].token, response.data[0]);
                } else {
                    console.log(`No se pudo actualizar :C `, response.data);
                }

            })
            .catch(error => {
                console.log(`Error al crear : `, error)
            })
    }

    onEliminarClickHandler = async (id: string) => {
        console.log("Elimino")
        axios.delete(`/api/users/${id}`)
        console.log("Elemento eliminado")
        const data = { nombre: '', edad: '', sexo: '', codigo: '' }
        this.setState({ loading: false, data: data, error: null })
    }

    searchClickHandler = (id: string) => {
            axios.get(`/api/users/${id}`)
                .then(response => {
                    console.log(response.data)
                    this.setState({ loading: false, data: response.data, error: null })
                })
                .catch(error => console.log("error de conexion", error))
    }

    GenerarClickHandler = (id: string) => {
        axios.get(`/api/users/${id}`)
            .then(response => {
                console.log(response.data)
                this.setState({ loading: false, data: response.data, error: null })
            })
            .catch(error => console.log("error de conexion", error))
    }
    componentDidMount() {
        console.log('componentStarredDidMount');
        const data = { nombre: null, edad: null, sexo: null, codigo: null }
        this.setState({ loading: false, data: data, error: null })
        console.log(this.state)
    }
}
interface IProps2 {
    botonActualizarHandler: any;
    botonEliminarHandler: any;
    botonBuscarClickHandler: any;
    botonGenerarCodeHandler:any;
    loading: boolean;
    data: any;
    error: any;
}
class EditarView extends Component<IProps2>{
    renderLoading() {
        const dataJSX = <MyProgressBar />
        return dataJSX;
    }
    renderSuccessfull() {
        const dataJSX = <EditarForm data={this.props.data}  botonBuscarClickHandler={this.props.botonBuscarClickHandler} botonActualizarHandler={this.props.botonActualizarHandler} botonEliminarHandler={this.props.botonEliminarHandler} botonGenerarCodeHandler={this.props.botonGenerarCodeHandler}/>
        return dataJSX;
    }
    renderError() {
        const dataJSX = <h3>Error...</h3>;
        return dataJSX;
    }

    render() {
        if (this.props.loading) {
            return (this.renderLoading());
        } else if (this.props.data) {
            console.log("Render editar.tsx",this.props.data)
            return (this.renderSuccessfull());
        } else {
            return (this.renderError());
        }
    }
}

export default Editar;

