import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(50),
                padding: theme.spacing(2)
            },
        },
        display: {
            display: 'block',
            marginTop: theme.spacing(1),
            alignContent: 'center'
        }
    }),
);
interface Props {
    botonActualizarHandler: any;
    botonEliminarHandler: any;
    botonBuscarClickHandler: any;
    botonGenerarCodeHandler: any;
    data?: any
    window?: () => Window;
}

export default function EditarForm(props: Props) {
    console.log("Editar form data ", props.data)

    const classes = useStyles();
    const [nombre, setNombre] = useState(``);
    const [edad, setEdad] = useState(0);
    const [sexo, setSexo] = useState(``);
    const [id, setId] = useState();

    const nombreChangeHandler = (event: any) => {
        setNombre(event.target.value);
    }

    const edadChangeHandler = (event: any) => {
        setEdad(event.target.value);
    }

    const sexoChangeHandler = (event: any) => {
        setSexo(event.target.value);
    }

    const idChangeHandler = (event: any) => {
        setId(event.target.value);
    }

    const botonGenerarCodeClickHandler = (event: any) => {
        props.botonGenerarCodeHandler(event.target.value);
    }

    const botonActualizarClickHandler = (event: any) => {
        if (isNaN(edad)) {
            console.log("No recibi un numero")
            props.botonActualizarHandler(id, nombre, 0.5, sexo);
        } else {
            props.botonActualizarHandler(id, nombre, Number(edad), sexo);
        }
    }

    const botonEliminarClickHandler = (event: any) => {
        props.botonEliminarHandler(id);
    }

    const botonBuscarClickHandler = (event: any) => {
        if (event.key === `Enter`) {
            props.botonBuscarClickHandler(id);
        }
    }
    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper elevation={3} >
                    <div className={classes.root}>
                        <TextField id="standard-basic" placeholder="Presiona enter para buscar" label="Search Id" onChange={idChangeHandler} onKeyDown={botonBuscarClickHandler} />
                    </div>
                    {(props.data.nombre !== null) ?
                        <form className={classes.root} noValidate autoComplete="off">
                            <Input className={classes.display} value={props.data.nombre} placeholder="Nombre" inputProps={{ 'aria-label': 'description' }} onChange={nombreChangeHandler} />
                            <Input className={classes.display} value={props.data.edad} placeholder="Edad" inputProps={{ 'aria-label': 'description' }} onChange={edadChangeHandler} />
                            <Input className={classes.display} value={props.data.sexo} placeholder="Sexo" inputProps={{ 'aria-label': 'description' }} onChange={sexoChangeHandler} />
                            <div ><Button fullWidth variant="contained" color="primary" onClick={botonActualizarClickHandler}>Actualizar</Button> </div>
                            <div ><Button fullWidth variant="contained" color="primary" onClick={botonEliminarClickHandler}>Eliminar</Button> </div>
                        </form>
                        :
                        <form className={classes.root} noValidate autoComplete="off">
                            <Input className={classes.display} placeholder="Nombre" inputProps={{ 'aria-label': 'description' }} onChange={nombreChangeHandler} />
                            <Input className={classes.display} placeholder="Edad" inputProps={{ 'aria-label': 'description' }} onChange={edadChangeHandler} />
                            <Input className={classes.display} placeholder="Sexo" inputProps={{ 'aria-label': 'description' }} onChange={sexoChangeHandler} />
                            <div ><Button fullWidth variant="contained" color="primary" onClick={botonActualizarClickHandler}>Actualizar</Button> </div>
                            <div ><Button fullWidth variant="contained" color="primary" onClick={botonEliminarClickHandler}>Eliminar</Button> </div>
                        </form>
                    };
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={3} >
                    {(props.data.nombre !== null) ?
                        <form className={classes.root} noValidate autoComplete="off">
                            <Input className={classes.display} value={props.data.codigo} placeholder="Codigo" inputProps={{ 'aria-label': 'description' }} />
                            <div ><Button fullWidth variant="contained" color="primary" onClick={botonGenerarCodeClickHandler}>Generar Código</Button> </div>
                        </form>
                        :
                        <form className={classes.root} noValidate autoComplete="off">
                            <Input className={classes.display} placeholder="Codigo" inputProps={{ 'aria-label': 'description' }} />
                            <div ><Button fullWidth variant="contained" color="primary" onClick={botonGenerarCodeClickHandler}>Generar Código</Button> </div>
                        </form>
                    };
                </Paper>
            </Grid>
        </Grid>
    );
}