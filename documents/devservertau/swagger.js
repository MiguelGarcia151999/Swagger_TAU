const { SERVERS } = require("../../src/model/constants");

module.exports = {
    openapi: "3.0.0",
    info: {
        description: "Documentacion correspondiente de las Apis realizadas en el desarrollo del proyeco DevServer_TAU",
        version: "1.0.0",
        title: "DevServer TAU",
        termsOfService: "http://swagger.io/terms/",
        contact: {
			email: "eibonsbook151999@gmail.com",
		},
        
    },
    servers: [
        { url: SERVERS.DEV_SERVERAWS_TAU, },
		{ url: SERVERS.DEV_SERVERLH_TAU, },
    ], 
    tags: [
        {
            name: "Mongo",
            description: "Apis que hacen peticiones a la base de mongobd",
        },
    ],
    paths: {
        "/api/medicexp/": {
            get: {
                tags: ["Mongo"],
                summary: "Hacer una peticion get a la base de datos en mongobd",
                description: "Esta api trae todos los registros que se encuentran dentro de la base de datos de mongobd",
                operationId: "consultarRegistros",
                responses: {
                    200: { description: "Peticion realizada exitosamente"},
                    500: { description: "Error interno de servidor"}
                }
            },
        },
        "/api/medicexp/:id": {
            get: {
                tags: ["Mongo"],
                summary: "Hacer una petion para traer un registro por id",
                description: "Esta api trae un archivo de datos mientras se le mande un _id de mongodb",
                operationId: "consultarRegistro",
                parameters: [
                    {
                        in: 'header',
                        name: "id",
                        required: true,
                        type: "integer",
                    }
                ],
                responses: {
                    200: { description: "Peticion realizada exitosamente"},
                    400: {description: "Error de peticion del usuario"},
                    500: { description: "Error interno de servidor"}
                }
            }
        },
        "/api/medicexp/insert": {
            post: {
                tags: ["Mongo"],
                summary: "Insertar datos a mongobd",
                description: "Esta api es para registar expedientes medicos a mongodb",
                operationId: "registarExpediente",
                produces: ["application/json"],
                parameters: [
                    {
                        in: 'body',
                        name: "datos",
                        required: true,
                        schema: {
                            $ref: "#/definitions/registroExpedientes"
                        }
                    }
                ],
                responses: {
                    200: { description: "Peticion realizada exitosamente"},
                    400: {description: "Error de peticion del usuario"},
                    500: { description: "Error interno de servidor"}
                }
            }
        }
    },
    definitions: {
        registroExpedientes: {
            example: {
                numExp: "0000000004",
                nombre: "Samael Garcia",
                tipoSanguineo: "+A",
                alergias: "Mariscos",
                operaciones: "GastroIntestinal",
                enfCronicas: "Asma",
                equipBiomedico: "Ninguno",
                donante: "No"
            }
        }
    }
}