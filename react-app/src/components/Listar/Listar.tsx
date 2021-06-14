import { Component } from 'react';
import axios from '../../axios';
import MyTable from '../../UI/MyTable';
import MyProgressBar from '../../UI/MyProgressBar';
import { Redirect } from 'react-router';



class Listar extends Component {
    //Representes in which state belong:loading,successfull or error 
    state = { loading: true, data: null, error: null };
    render() {//THIS IS NOT GOING TO SHOW NOTHING
        return <ListarView {...this.state} botonHombresHandler={this.botonHombresClickHandler} botonMujeresHandler={this.botonMujeresClickHandler} botonTodosHandler={this.botonTodosClickHandler} editeHandler={this.editeBotonClickHandle} />
    }
    editeBotonClickHandle = (event: any) => {
        console.log(event.target.value)
        return <Redirect to={`/home/listar`} />
    }
    fetchUsers = (route: string) => {
        axios.get(route)
            .then(response => {
                //modify data here
                const users: any[] = response.data;
                const modUsers = users.map((user: any) => {
                    return { User: user.name, Email: user.email, City: user.address.city, Phone: user.phone, Company: user.company.name };
                });
                this.setState({ loading: false, data: modUsers, error: null })
            }).catch(error => this.setState({ loading: false, data: null, error: error }))
    }

    botonTodosClickHandler = (event: any) => {
        console.log("Pulse el boton todos ")
        // if (event.key === `Click`) {
        //     console.log(`Users searchKeyPressHandler : `, event.target.value);
        //     const getOption = event.target.value;
        //     this.fetchUsers(`/api/users?name=${getOption}`)
        // }
    }
    botonMujeresClickHandler = (event: any) => {
        console.log("Pulse el boton mujeres ")
    }
    botonHombresClickHandler = (event: any) => {
        console.log("Pulse el boton hombres ")
    }
    componentDidMount() {
        console.log('componentStarredDidMount');
        axios.get('/api/users')
            .then(response => {
                //MOdifying the data that is going to be sent to table
                console.log(response.data);
                const users: any[] = response.data;
                const modUsers = users.map((user: any) => {
                    return { Id: user.id, Nombre: user.nombre, Edad: user.edad, Sexo: user.sexo, Codigo: user.codigo };
                })
                this.setState({ loading: false, data: modUsers, error: null })
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false, data: null, error: error })
            })
    }
}
interface IProps {
    loading: boolean;
    data: any;
    error: any;
    editeHandler: any;
    botonTodosHandler: any;
    botonMujeresHandler: any;
    botonHombresHandler: any;
}

class ListarView extends Component<IProps>{
    renderLoading() {
        const dataJSX = <MyProgressBar />
        return dataJSX;
    }
    renderSuccessfull() {
        const dataJSX = <MyTable botonHombresHandler={this.props.botonHombresHandler} botonMujeresHandler={this.props.botonMujeresHandler} botonTodosHandler={this.props.botonTodosHandler} editeHandler={this.props.editeHandler} rows={this.props.data} />
        return dataJSX;
    }
    renderError() {
        const dataJSX = <h3>No hay datos....</h3>;
        return dataJSX;
    }

    render() {
        if (this.props.loading) {
            return (this.renderLoading());
        } else if (this.props.data) {
            return (this.renderSuccessfull());
        } else {
            return (this.renderError());
        }
    }
}

export default Listar;





