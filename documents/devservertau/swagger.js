const { SERVERS } = require("../../src/model/constants");

module.exports = {
    swagger: '2.0',
    info: {
        description: "Documentacion acerca de las API's desarrolladas para el proyecto TAU",
        version: '4.0.0',
        title: 'TAU DEVELOP',
        termsOfService: 'http://swagger.io/terms/',
        contact: {
            email: 'eibonsbook151999@gmail.com',
        },
    },
    host: SERVERS.DEV_SERVERLH_TAU,
    tags: [
        {
            name: 'ExpedientesMongoDB',
            description: 'Todo acerca de registrar expedientes medicos en mongo',
        },
    ],
    schemes: ['http','https'],
    paths: {
        '/api/medicexp/': {
            get: {
                tags: ['ExpedientesMongoDB'],
                summary: 'Consultar registros en Mongo',
                description: 'La API trae todos los registros de los expedientes que hay en mongo',
                produces: ['application/json'],
                responses: {
					200: {
						description: 'Peticion realizada exitosamente'
					},
					400: {
						description: 'Error de peticion del usuario'
					},
					500: {
						description: 'Error interno de servidor'
					},
				},
            },
        },
        '/api/medicexp/:id': {
            get: {
                tags: ['ExpedientesMongoDB'],
                summary: 'Consulta un registro a MongoDB por ID',
                description: 'Esta api trae un archivo de datos mientras se le mande un _id de mongodb',
                produces: ['application/json'],
                parameters: [
                    {
                        in: 'header',
                        name: 'id',
                        required: false,
                        type: 'Integer',
                        description: 'Valor del _id que que tiene el registro en mongo'
                    },
                ],
                responses: {
                    200: {
                        description: 'Peticion realizada exitosamente'
                    },
                    400: {
                        description: 'Error de peticion del usuario'
                    },
                    500: {
                        description: 'Error interno de servidor'
                    },
                },
            },
        },
        '/api/medicexp/insert': {
            post: {
                tags: ['ExpedientesMongoDB'],
                summary: 'Inserta un expediente a MongoDB',
                description: 'Esta api hace un insercion de un expediente a la base de datos de mongo',
                produces: ['application/json'],
                parameters: [
                    {
                        in: 'body',
                        name: 'object',
                        required: true,
                        schema: {
                            $ref: '#definitions/registroExpediente'
                        }
                    }
                ],
                responses: {
                    200: {
                        description: 'Peticion realizada exitosamente'
                    },
                    400: {
                        description: 'Error de peticion del usuario'
                    },
                    500: {
                        description: 'Error interno de servidor'
                    },
                },
            },
        },
        '/api/medicexp/delete': {
            delete: {
                tags: ['ExpedientesMongoDB'],
                summary: 'Elimina un expediente de MongoDB por ID',
                description: 'Esta api elimina un expediente dentro de la base de datos de mongo',
                produces: ['application/json'],
                parameters: [
                    {
                        in: 'header',
                        name: 'id',
                        required: false,
                        type: 'Integer',
                        description: '_id del registro que se va a borrar de mongo',
                    }
                ],
                responses: {
                    200: {
                        description: 'Peticion realizada exitosamente'
                    },
                    400: {
                        description: 'Error de peticion del usuario'
                    },
                    500: {
                        description: 'Error interno de servidor'
                    },
                },
            },
        },
        '/api/medicexp/update': {
            put: {
                tags: ['ExpedientesMongoDB'],
                summary: 'Actualiza un expediente de MongoDB por ID',
                description: 'Esta api actualiza todo un registro dentro de la base de datos ',
                produces: ['application/json'],
                parameters: [
                    {
                        in: 'header',
                        name: 'id',
                        required: false,
                        type: 'Integer',
                        description: '_id del registro al que se le van actualizar sus valores',
                    },
                    {
                        in: 'body',
                        name: 'object',
                        required: true,
                        schema: {
                            $ref: '#definitions/registroExpediente'
                        }
                    }
                ],
                responses: {
                    200: {
                        description: 'Peticion realizada exitosamente'
                    },
                    400: {
                        description: 'Error de peticion del usuario'
                    },
                    500: {
                        description: 'Error interno de servidor'
                    },
                },
            },
        },
    },
    definitions: {
        registroExpediente: {
            example: {
                "numExp": "00000000007",
                "nombre": "Thor Odinson",
                "tipoSanguineo": "+A",
                "alergias": "Pito",
                "operaciones": "Ninguna",
                "enfCronicas": "Asma",
                "equipBiomedico": "Ninguno",
                "donante": "No"
            },
        },
    },
}