import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

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
    list: any[];
    botonHandler:any;
    window?: () => Window;
}

export default function DatosForm(props: Props) {
    const classes = useStyles();

    const inputs = props.list[0]
    const botones = props.list[1]

    const botonClickHandler = ( event: any) => {
        props.botonHandler();
      }
    
    return (
        <Paper elevation={3} >
            <form className={classes.root} noValidate autoComplete="off">
                {
                    inputs.map((input: string) => {
                        
                        return (
                            <Input className={classes.display} placeholder={input} inputProps={{ 'aria-label': 'description' }} />
                        )
                    })
                }
                {
                    botones.map((boton: string) => {
                        return (
                            <div ><Button fullWidth variant="contained" color="primary"  onClick={botonClickHandler}>{boton}</Button> </div>
                        )
                    })
                }
            </form>
        </Paper>
    );

}