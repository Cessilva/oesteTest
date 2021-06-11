import express from 'express';

import {IRoute} from '../routes/index.route';
const registerRoutegMiddleware = ( server: express.Application, routes: IRoute[] ) => {

    // register routes
    routes.forEach( (route: IRoute) => {
        server.use(route.api, route.router);
    });

}

export default registerRoutegMiddleware;