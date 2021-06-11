//import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MyAppBar from '../MyAppBar';


//********-------ESTA ES LA FORMA BASE DE NUESTRO PROYECTO CON HEADER Y FOOTER-------*********
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const MasterLayout = ( props: any ) => {
  const classes = useStyles();
//Forma del layout : header, footer y body
  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="column" justify="space-between" alignItems="stretch" >
      <Grid item xs={12} >     {/* Grid de 12 --- Header*/}
          <MyAppBar></MyAppBar>
      </Grid>
        <Grid item xs={12} >{/* Grid de 12 --- Body*/}
          {props.children}
        </Grid>
        <Grid item xs={12}>{/* Grid de 12 --- Footer*/}
          <Paper elevation={2} className={classes.paper}>Copyright 2021</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default MasterLayout;