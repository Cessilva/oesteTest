import { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class Listar extends Component {
    render() {
        console.log("index render")
        return (
            <div >
                <Paper elevation={3} style={{height:"100%",padding:"5px"}}>
                    <Typography variant="h5" gutterBottom>Listar</Typography>
                    <br/>
                    <Typography variant="body1" gutterBottom>
                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography><br/>
                    <Typography variant="body2" gutterBottom>
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
                </Paper>
            </div>
        );
    }
    componentDidMount() {
        console.log('componentListarDidMount');
    }
}



export default Listar