const express = require('express')
const app = express()
const cors = require("cors")
const config = require('./src/config/config.env')
require('./src/config/mongo.config')

app.use(express.json())
const corsOptions = {
    origin:  '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));


//routers
const index = require('./src/routers/index.router')
const routerAddProduct = require('./src/routers/add.product.controller')
app.use(index)
app.use(routerAddProduct)


app.listen(config.api.port, () => {
    console.log(`Server en linea en el port: ${config.api.port}`)
})