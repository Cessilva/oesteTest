import { Component } from 'react';
import MasterLayout from '../UI/layouts/MasterLayout';
import HomePage from '../containers/HomePage/HomePage';
import AdminPage from '../containers/AdminPage/AdminPage';
import LoginPage from '../containers/LoginPage/LoginPage';
import {Switch,Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <MasterLayout>
        <Switch>
          <Route path="/" exact component={HomePage}></Route> 
          <Route path="/Admin" component={AdminPage}></Route> 
          <Route path="/Login" component={LoginPage}></Route> 
        </Switch>    
      </MasterLayout>
      
    );
  }
}

export default App;
