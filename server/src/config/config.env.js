require('dotenv').config()

module.exports = {
    db: {
        url_db: process.env.URL_DB
    },
    api: {
        secretJWT: process.env.SECRET_JWT,
        port: process.env.PORT,
        apiKey: process.env.APIKEY,
        host_api: process.env.HOST_API,
        path_api: process.env.PATH_API,
        host_cors: process.env.HOST_CORS
    },
}