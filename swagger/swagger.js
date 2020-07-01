const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: `Swagger Test APIs`,
            description: 'API documentation for the Swagger Testing',
            version: '1.0.0',
        },
        components: {
            securitySchemes: {
                CookieAuth: {
                    type: 'apiKey',
                    in: 'cookie',
                },
            },
        },
        security: [
            {
                CookieAuth: [],
            },
        ],
        servers: [
            {
                url: 'http://localhost:5000',
                description: 'Local server',
            }
        ],
    },
	/**
     * List of files to be processed.
     * Exact file path or globs can be added
     * e.g. './routes/*.js' (for globs)
     */
    apis: ['./swagger/*.yaml']
};

const specs = swaggerJsdoc(options);

var uiOptions = {
    swaggerOptions: {
        docExpansion: "none"
    }
};

exports.specs = specs;
exports.uiOptions = uiOptions;
