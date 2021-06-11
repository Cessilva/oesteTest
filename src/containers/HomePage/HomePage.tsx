import Layout from '../../UI/layouts/CenterLayout';
import {Switch,Route} from 'react-router-dom';
import { Component } from 'react';
// Componentes
import Crear from '../../components/Crear/Crear'
import Editar from '../../components/Editar/Editar'
import Listar from '../../components/Listar/Listar'

class HomePage extends Component {
  list= [{text:'Crear',path:'/home/crear'}
    , {text:'Editar',path:'/home/editar'}
    ,{text:'Listar',path:'/home/listar'}];
    render(){
      return(
        <Layout  list={this.list} >
          <Switch>
            <Route path="/" exact component={Crear}></Route> 
           <Route path="/home/crear" exact component={Crear}></Route> 
           <Route path="/home/editar" exact component={Editar}></Route>  
            <Route path="/home/listar" exact component={Listar}></Route>  
          </Switch>  
        </Layout>
      );
    }
  }
  export default HomePage;