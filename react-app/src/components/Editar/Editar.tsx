import axios from '../../axios';
import EditarForm from '../../UI/Forms/EditarForm';
import MyProgressBar from '../../UI/MyProgressBar';
import {Component} from 'react'


class Editar extends Component {
    //Representes in which state belong:loading,successfull or error 
    state = { loading: false, data: null, error: null };
    render() {//THIS IS NOT GOING TO SHOW NOTHING
        return <EditarView {...this.state} botonBuscarClickHandler={this.searchClickHandler} botonActualizarHandler={this.onActualizarClickHandler} botonEliminarHandler={this.onEliminarClickHandler} />
    }
    onActualizarClickHandler = async (nombre: string, edad: number, sexo: string) => {
        console.log("Acttualizar")
        //     axios.post(`/api/auth`, {nombre: nombre, edad:edad,sexo:sexo})
        //     .then(response => {
        //         if ( response.data.length ){
        //             console.log(`API Validation succesful, user found: `, response.data[1].token, response.data[0] );
        //         } else{
        //             console.log(`API Validation unsuccesful, no user found: `, response.data);
        //         }

        //     })
        //     .catch(error => {
        //         console.log(`Error al crear : `, error)
        //         })
    }
    onEliminarClickHandler = async (nombre: string, edad: number, sexo: string) => {
        console.log("Elimino")
        // axios.post(`/api/auth`, {nombre: nombre, edad:edad,sexo:sexo})
        // .then(response => {
        //     if ( response.data.length ){
        //         console.log(`API Validation succesful, user found: `, response.data[1].token, response.data[0] );
        //     } else{
        //         console.log(`API Validation unsuccesful, no user found: `, response.data);
        //     }

        // })
        // .catch(error => {
        //     console.log(`Error al crear : `, error)
        //     })
    }
    searchClickHandler = ( event: any) => {
        if (event.key === `Enter`){
        const getOption = event.target.value;
        axios.get(`/api/users/${getOption}`)
        .then(response => {
            console.log(response.data)
            this.setState({ loading: false, data: response.data, error: null })
        })
        .catch(error => console.log("error de conexion",error))
        }
      }
    componentDidMount() {
        console.log('componentStarredDidMount');
        const data={ nombre: '', edad: '', sexo: '', codigo: '' }
        this.setState({ loading: false, data: data, error: null })
    }
}
interface IProps2{
    botonActualizarHandler: any;
    botonEliminarHandler: any;
    botonBuscarClickHandler: any;
    loading: boolean;
    data: any;
    error: any;
}
class EditarView extends Component<IProps2>{
    renderLoading(){
        const dataJSX=<MyProgressBar/>
        return dataJSX;
    }
    renderSuccessfull(){
        const dataJSX= <EditarForm data={this.props.data} botonBuscarClickHandler={this.props.botonBuscarClickHandler} botonActualizarHandler={this.props.botonActualizarHandler} botonEliminarHandler={this.props.botonEliminarHandler}/>
        return dataJSX;
    }
    renderError(){
        const dataJSX=<h3>Error...</h3>;
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

export default Editar;


// import axios from 'axios';
// import { Component } from 'react';
// import EditarForm from '../../UI/Forms/EditarForm';

// class Editar extends Component {
//     data?: any
    // onActualizarClickHandler = async (nombre: string, edad: number, sexo: string) => {
    //     console.log("Acttualizar")
    //     //     axios.post(`/api/auth`, {nombre: nombre, edad:edad,sexo:sexo})
    //     //     .then(response => {
    //     //         if ( response.data.length ){
    //     //             console.log(`API Validation succesful, user found: `, response.data[1].token, response.data[0] );
    //     //         } else{
    //     //             console.log(`API Validation unsuccesful, no user found: `, response.data);
    //     //         }

    //     //     })
    //     //     .catch(error => {
    //     //         console.log(`Error al crear : `, error)
    //     //         })
    // }
    // onEliminarClickHandler = async (nombre: string, edad: number, sexo: string) => {
    //     console.log("Elimino")
    //     // axios.post(`/api/auth`, {nombre: nombre, edad:edad,sexo:sexo})
    //     // .then(response => {
    //     //     if ( response.data.length ){
    //     //         console.log(`API Validation succesful, user found: `, response.data[1].token, response.data[0] );
    //     //     } else{
    //     //         console.log(`API Validation unsuccesful, no user found: `, response.data);
    //     //     }

    //     // })
    //     // .catch(error => {
    //     //     console.log(`Error al crear : `, error)
    //     //     })
    // }
    // onBuscarClickHandler = async (id: string) => {
    //     console.log("Buscar id:", id)
    //     axios.get('/api/users?name=w').then(response=>{
    //     console.log(response.data);
    //     }).catch(error=>{
    //     console.log(error);})
    // }
    // searchClickHandler = ( event: any) => {
    //     if (event.key === `Enter`){
    //       console.log(`Users searchKeyPressHandler : `, event.target.value);
    //       const getOption = event.target.value;
    //       console.log(getOption);
    //     //   axios.get(`/api/users?name=${getOption}`)
    //     //   .then(response => {
    //     //       console.log(response.data)
    //     //   })
    //     //   .catch(error => console.log(error))
    //     axios.get(`/api/users`)
    //     .then(response => { 
    //         console.log(response.data)
    //     })
    //     .catch(error => console.log("error de conexion",error))
    //     }
       

    //   }
//      componentDidMount() {
       
//     }

//     render() { return <EditarView {...this.props} data={this.data} botonBuscarClickHandler={this.searchClickHandler} botonActualizarHandler={this.onActualizarClickHandler} botonEliminarHandler={this.onEliminarClickHandler} /> }

// }
// interface IProps2 {
//     botonActualizarHandler: any;
//     botonEliminarHandler: any;
//     botonBuscarClickHandler: any;
//     data?: any;
// }
// class EditarView extends Component<IProps2>{
//     render() { return <EditarForm data={this.props.data} botonBuscarClickHandler={this.props.botonBuscarClickHandler} botonActualizarHandler={this.props.botonActualizarHandler} botonEliminarHandler={this.props.botonEliminarHandler} /> }
// }

// export default Editar;