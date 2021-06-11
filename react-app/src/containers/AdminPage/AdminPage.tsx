
import { Component } from 'react';
import CenterLayout from '../../UI/layouts/CenterLayout';
import {Switch,Route} from 'react-router-dom';
import Documentacion from '../../components/Documentacion/Documentacion'

class AdminPage extends Component {
  list = [{ text: 'Documentacion', path: '/admin/documentacion' }];
  render() {
    return (
       <CenterLayout  list={this.list} >
       <Switch>
        <Route path="/admin" exact component={Documentacion}></Route>
      </Switch>
     </CenterLayout>
    );
  }
}
export default AdminPage;