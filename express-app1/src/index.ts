
import 'dotenv/config';
import Server from './server';
import {Route} from './routes/index.route'
import {Service} from './services/index.service'
import User from './models/user.entity'

// initialize server
const userRoute=new Route().register('/api/users',new Service(User));
const server = new Server( 
    [
        userRoute
    ]
);
// Run server 
server.listen();