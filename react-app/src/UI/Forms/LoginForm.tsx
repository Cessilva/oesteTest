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
    window?: () => Window;
}

export default function CrearForm(props: Props) {
    const classes = useStyles();

    const [userName, setuserName] = useState(``);
    const [password, setPassword] = useState(0);

    const userNameChangeHandler = (event: any) => {
        setuserName(event.target.value);
    }
    const passwordChangeHandler = (event: any) => {
        setPassword(event.target.value);
    }
    const botonClickHandler = (event: any) => {
            props.botonHandler(userName,password);
    }

    return (
        <Paper elevation={3} >
            <form className={classes.root} noValidate autoComplete="off">
                <Input className={classes.display} placeholder="User Name" inputProps={{ 'aria-label': 'description' }} onChange={userNameChangeHandler}/>
                <Input className={classes.display} placeholder="Password" inputProps={{ 'aria-label': 'description' }} onChange={passwordChangeHandler}/>
                <div ><Button fullWidth variant="contained" color="primary" onClick={botonClickHandler}>Login</Button> </div>
            </form>
        </Paper>
    );

}