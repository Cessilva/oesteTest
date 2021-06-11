
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';
import Editar from '../../components/Editar/Editar';
import GenerarCode from '../../components/GenerarCode/GenerarCode';

class EditarLayout extends Component{
  render(){
    return (
        <div >
          <Grid container spacing={3}>
            <Grid item xs={6}>
                <Editar/>  
            </Grid>
            <Grid item xs={6}>
                <GenerarCode/> 
            </Grid>
          </Grid>
        </div>
      );
  }
}

export default EditarLayout ;