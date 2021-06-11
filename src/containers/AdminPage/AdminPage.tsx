
import { Component } from 'react';
import Layout from '../../UI/layouts/Layout';
import {Switch,Route} from 'react-router-dom';
import Documentacion from '../../components/Documentacion/Documentacion'

class AdminPage extends Component {
  list = [{ text: 'Documentacion', path: '/admin/documentacion' }];
  render() {
    return (
       <Layout  list={this.list} >
       <Switch>
        <Route path="/admin/documentacion" exact component={Documentacion}></Route>
      </Switch>
     </Layout>
    );
  }
}

export default AdminPage;