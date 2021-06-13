
import 'dotenv/config';
import Server from './server';
import User from './models/user.entity'
import UsersService from './services/user.service';
import UsersRoute from './routes/user.route';

// initialize server
const userRoute = new UsersRoute().register(`/api/users`, new UsersService(User));
const server = new Server( 
    [
        userRoute,
    ]
);
// Run server 
server.listen();