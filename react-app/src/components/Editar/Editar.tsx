import axios from '../../axios';
import EditarForm from '../../UI/Forms/EditarForm';
import MyProgressBar from '../../UI/MyProgressBar';
import { Component } from 'react'
import {Persona} from '../../components/Crear/Crear'


class Editar extends Component {
    //Representes in which state belong:loading,successfull or error 
    state = { loading: false, data: null, error: null };
    data = { nombre: '', edad: '', sexo: '',codigo:''};

    render() {//THIS IS NOT GOING TO SHOW NOTHING
        return <EditarView {...this.state} cambiaDataHandler={this.cambiaDataChangeHandler} botonGenerarCodeHandler={this.GenerarClickHandler} botonBuscarClickHandler={this.searchClickHandler} botonActualizarHandler={this.onActualizarClickHandler} botonEliminarHandler={this.onEliminarClickHandler} />
    }

    onActualizarClickHandler = async (id:string , nombre: string, edad: number, sexo: string) => {
        console.log("Acttualizar")
        axios.patch(`/api/users/${id}`,this.data)
            .then(response => {
                console.log(`Elemento actualizado`, response.data);
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
        this.data={ nombre: '', edad: '', sexo: '' , codigo: ''}
        this.setState({ loading: false, data: data, error: null })
    }

    searchClickHandler = (id: string) => {
            axios.get(`/api/users/${id}`)
                .then(response => {
                    console.log(response.data)
                    this.setState({ loading: false, data: response.data, error: null })
                    this.data={ nombre:response.data.nombre, edad: response.data.edad, sexo: response.data.sexo ,codigo: response.data.codigo}
                })
                .catch(error => console.log("error de conexion", error))
    }

    GenerarClickHandler = (event: any) => {
        const persona=new Persona();
        const codigo= persona.generarCodigo()
        this.data.codigo=codigo
        this.setState({ loading: false, data: this.data, error: null })
    }
    cambiaDataChangeHandler=(valor:string,datoCambiado:string)=>{
        if(valor==='nombre'){
            console.log("Entre")
            this.data.nombre=datoCambiado
        }else if(valor==='edad'){
            this.data.edad=datoCambiado
        }else if(valor==='sexo'){
            this.data.sexo=datoCambiado
        }
        this.setState({ loading: false, data: this.data, error: null })
    }
    componentDidMount() {
        console.log('componentStarredDidMount');
        this.setState({ loading: false, data: this.data, error: null })
        console.log(this.state)
    }
}
interface IProps2 {
    botonActualizarHandler: any;
    botonEliminarHandler: any;
    botonBuscarClickHandler: any;
    botonGenerarCodeHandler:any;
    cambiaDataHandler:any;
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
        const dataJSX = <EditarForm data={this.props.data} cambiaDataHandler={this.props.cambiaDataHandler}  botonBuscarClickHandler={this.props.botonBuscarClickHandler} botonActualizarHandler={this.props.botonActualizarHandler} botonEliminarHandler={this.props.botonEliminarHandler} botonGenerarCodeHandler={this.props.botonGenerarCodeHandler}/>
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

