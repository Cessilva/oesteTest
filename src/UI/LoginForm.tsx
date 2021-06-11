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
        padding:theme.spacing(1)
      },
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    }
  }),
);

export default function LoginForm() {
  const classes = useStyles();

    return (
        <Paper elevation={3} >
        <form className={classes.root} noValidate autoComplete="off">
          <Input placeholder="Email" inputProps={{ 'aria-label': 'description' }} /><br />
          <Input placeholder="Password" inputProps={{ 'aria-label': 'description' }} /><br />
          <div className={classes.wrapper}>
            <Button fullWidth variant="contained" color="primary" >Enviar</Button>
            </div>
        </form>
      </Paper>
    );

}