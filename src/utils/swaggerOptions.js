import swaggerJsDoc from "swagger-jsdoc"
export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API for exchange rates",
            version: "1.0.0",
            description: "A simple Express API for exchange rates",
        },
        servers: [
            {
                url: `https://exchange-rates-itsoft.herokuapp.com`,
            },
            {
                url: `http://localhost:5001`,
            },
        ],
    },
    apis: ["./src/*.js"],
};

export const specs = swaggerJsDoc(options);
