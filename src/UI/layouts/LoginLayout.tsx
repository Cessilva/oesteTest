import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import '../../style/style.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: theme.spacing(3),
    },
  }),
);

interface Props extends RouteComponentProps {
    children: any;
  window?: () => Window;
}

const LoginLayout = (props: Props) => {

  const classes = useStyles();

  return (
    <div className="Button">
      <CssBaseline />
      <main className={classes.content}>
        {props.children}
      </main>
    </div>
  );
}

export default withRouter(LoginLayout);