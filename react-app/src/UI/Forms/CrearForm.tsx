import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';

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
        }
    }),
);
interface Props {
    botonHandler: any;
    data:any;
    window?: () => Window;
}

export default function CrearForm(props: Props) {
    const classes = useStyles();

    const [nombre, setNombre] = useState(``);
    const [edad, setEdad] = useState();
    const [sexo, setSexo] = useState(``);

    const nombreChangeHandler = (event: any) => {
        setNombre(event.target.value);
    }
    const edadChangeHandler = (event: any) => {
        setEdad(event.target.value);
    }
    const sexoChangeHandler = (event: any) => {
        setSexo(event.target.value);
    }
    const botonClickHandler = (event: any) => {
        if(event){
            if(edad){
                props.botonHandler(nombre,Number(edad), sexo);
            }else{
                props.botonHandler(nombre,undefined, sexo);
            }
        }
    }

    return (
        <Paper elevation={3} >
            <form className={classes.root} noValidate autoComplete="off">
                <Input className={classes.display} placeholder="Nombre" inputProps={{ 'aria-label': 'description' }} onChange={nombreChangeHandler}/>
                <Input className={classes.display} placeholder="Edad" inputProps={{ 'aria-label': 'description' }} onChange={edadChangeHandler}/>
                <Input className={classes.display} placeholder="Sexo" inputProps={{ 'aria-label': 'description' }} onChange={sexoChangeHandler}/>
                <p>{props.data}</p>
                <div ><Button fullWidth variant="contained" color="primary" onClick={botonClickHandler}>Guardar</Button> </div>
            </form>
            
        </Paper>
    );

}