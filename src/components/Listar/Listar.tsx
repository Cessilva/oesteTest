import  { Component } from 'react';
import MyTable from '../../UI/MyTable';
class Listar extends Component{
  componentDidMount( ){
      
  }
  
  render( ) { return <MyTable />}
}

// export default Listar;

// import React, { Component } from 'react';
// import axios from 'axios';

// import MyTable from '../../UI/Table';
// import MyProgressBar from '../../UI/MyProgressBar';

// interface IProps {
//     loading: boolean;
//     data: any;
//     error: any;
// }

// class Listar extends Component {
//     // Estado inicial
//     state = { loading: true, data: null, error: null };

//     render() {//THIS IS NOT GOING TO SHOW NOTHING
//         return <UsersView {...this.state} />
//     }
//     componentDidMount() {
//         console.log('componentListarDidMount');
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(response => {
//                 //MOdifying the data that is going to be sent to table
//                 console.log(response.data);
//                 const users: any[] = response.data;
//                 const modUsers = users.map((user: any) => {
//                     return { User: user.name, Email: user.email, City: user.address.city, Phone: user.phone, Company: user.company.name };
//                 })
//                 this.setState({ loading: false, data: modUsers, error: null })
//             })
//             .catch(error => {
//                 console.log(error);
//                 this.setState({ loading: false, data: null, error: error })
//             })
//     }
// }



export default Listar;







// function createData(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number) {
//     throw new Error('Function not implemented.');
// }
// class Users extends Component {
//     //Representes in which state belong:loading,successfull or error 
//     state = { loading: true, data: null, error: null };
//     render() {//THIS IS NOT GOING TO SHOW NOTHING
//         return <UsersView {...this.state} />
//     }
//     componentDidMount() {
//         console.log('componentStarredDidMount');
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(response => {
//                 //MOdifying the data that is going to be sent to table
//                 console.log(response.data);
//                 const users: any[] = response.data;
//                 const modUsers = users.map((user: any) => {
//                     return { User: user.name, Email: user.email, City: user.address.city, Phone: user.phone, Company: user.company.name };
//                 })
//                 this.setState({ loading: false, data: modUsers, error: null })
//             })
//             .catch(error => {
//                 console.log(error);
//                 this.setState({ loading: false, data: null, error: error })
//             })
//     }
// }

// class UsersView extends Component<IProps>{

//     renderLoading() {
//         // const dataJSX=<h3>Loading...</h3>;
//         const dataJSX = <MyProgressBar />
//         return dataJSX;
//     }
//     renderSuccessfull() {
//         const dataJSX = <MyTable rows={this.props.data} />
//         return dataJSX;
//     }
//     renderError() {
//         const dataJSX = <h3>Error...</h3>;
//         return dataJSX;
//     }

//     render() {
//         if (this.props.loading) {
//             return (this.renderLoading());
//         } else if (this.props.data) {
//             return (this.renderSuccessfull());
//         } else {
//             return (this.renderError());
//         }
//     }
// }

// export default Users;