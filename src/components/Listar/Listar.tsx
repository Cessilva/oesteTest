import { Component } from 'react';
import axios from '../../UI/axios';
import MyTable from '../../UI/MyTable';
import MyProgressBar from '../../UI/MyProgressBar';

interface IProps {
    loading: boolean;
    data: any;
    error: any;
}

class Listar extends Component {
    //Representes in which state belong:loading,successfull or error 
    state = { loading: true, data: null, error: null };
    render() {//THIS IS NOT GOING TO SHOW NOTHING
        return <ListarView {...this.state} />
    }
    componentDidMount() {
        console.log('componentStarredDidMount');
        axios.get('/users')
            .then(response => {
                //MOdifying the data that is going to be sent to table
                console.log(response.data);
                const users: any[] = response.data;
                const modUsers = users.map((user: any) => {
                    return { Nombre: user.name, Edad: user.email, Sexo: user.address.city, Codigo: user.phone };
                })
                this.setState({ loading: false, data: modUsers, error: null })
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false, data: null, error: error })
            })
    }

}


class ListarView extends Component<IProps>{
    renderLoading(){
        const dataJSX=<MyProgressBar/>
        return dataJSX;
    }
    renderSuccessfull(){
        const dataJSX= <MyTable rows={this.props.data}/>
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

export default Listar;





