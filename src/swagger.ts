// swagger.ts
import { getMetadataArgsStorage } from "routing-controllers";
import { routingControllersToSpec } from "routing-controllers-openapi";

const options = {
    exposeRoute: true,
};

const spec = (appConfig: { controllers: Function[], routePrefix: string | undefined }) => routingControllersToSpec(getMetadataArgsStorage(), { ...options, ...appConfig }, {
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                in: 'header',
                name: 'Authorization',
                description: 'Bearer token to access these api endpoints',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        }
    },
    security: [
        {
            bearerAuth: [],
        },
    ],
});

export { spec };
