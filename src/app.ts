import { Action, createExpressServer, useContainer } from 'routing-controllers';
import swaggerUi from "swagger-ui-express";
import dotenv from 'dotenv';
import { spec } from './swagger';
//import { Container } from 'typedi';
import { sequelize } from './core/db/init';
import { BooksController } from './controllers/BooksController';
import { UserController } from './controllers/UsersController';

dotenv.config();

const controllers = [BooksController, UserController]

const appConfig = {
    cors: true,
    controllers,
    routePrefix: process.env.ROUTE_PREFIX,
    authorizationChecker: async (action: Action, permissions: string[]) => {
        const token: string = action.request.headers['authorization'];

        //const user = await getEntityManager().findOneByToken(token);
        return true;
    },
}

//useContainer(Container);

const app = createExpressServer(appConfig);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(spec(appConfig)));


// run express application on port 3000
console.log(`server is listening on port ${process.env.PORT}`);
app.listen(process.env.PORT);
sequelize.sync();
