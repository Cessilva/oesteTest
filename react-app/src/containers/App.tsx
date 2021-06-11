import { Component } from 'react';
import MasterLayout from '../UI/layouts/MasterLayout';
import {Switch,Route} from 'react-router-dom';


import HomePage from '../containers/HomePage/HomePage';
import AdminPage from '../containers/AdminPage/AdminPage';
import LoginPage from '../containers/LoginPage/LoginPage';
import NotFoundPage from '../containers/NotFoundPage/NotFoundPage';


class App extends Component {

  render() {
    return (
      <MasterLayout>
        <Switch>
          <Route path="/" exact component={HomePage}></Route> 
          <Route path="/home"  component={HomePage}></Route> 
          <Route path="/admin" component={AdminPage}></Route> 
          <Route path="/login" component={LoginPage}></Route> 
          <Route render={()=><NotFoundPage />}></Route> 
        </Switch>    
      </MasterLayout>
      
    );
  }
}

export default App;
