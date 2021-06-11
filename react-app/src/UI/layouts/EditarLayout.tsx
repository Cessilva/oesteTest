
import Grid from '@material-ui/core/Grid';
import DatosForm from '../DatosForm';
import { Component } from 'react';

class EditarLayout extends Component{
  list= [["Nombre","Edad","Sexo"],["Actualizar","Eliminar"]];
  list2= [["codigo"],["Generar Codigo"]];
  render(){
    return (
        <div >
          <Grid container spacing={3}>
            <Grid item xs={6}>
                <DatosForm list={this.list} />  
            </Grid>
            <Grid item xs={6}>
                <DatosForm list={this.list2} /> 
            </Grid>
          </Grid>
        </div>
      );
  }
}

export default EditarLayout ;