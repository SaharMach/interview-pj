import express from 'express'
import cookieParser from 'cookie-parser'
import cors  from 'cors'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import http from 'http'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import { logger } from './services/logger.service.js'
logger.info('server.js loaded...')

const app = express()
const server = http.createServer(app)

app.use(cookieParser())
app.use(express.json())
app.use(express.static('public'))


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
    console.log('__dirname: ', __dirname)
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:5173', 'http://localhost:5173','http://127.0.0.1:3000', 'http://localhost:3000','http://localhost:5174'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

import { msgRoutes } from './api/board/msgs.routes.js'
import { setupSocketAPI } from './services/socket.service.js'


import { setupAsyncLocalStorage } from './middlewares/setupAls.middleware.js'
import { log } from 'console'
app.all('*', setupAsyncLocalStorage)

app.use('/api/msgs', msgRoutes)
setupSocketAPI(server)





app.get('/**', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})

// const port = process.env.PORT || 3030
// server.listen(port, () => {
//     logger.info('Server is running on port: ' + port)
// })

// import { logger } from './services/logger.service.js'

// Listen will always be the last line in our server!
const port = process.env.PORT || 3030
server.listen(port, () => {
    logger.info(`Server listening on port http://127.0.0.1:${port}/`)
})









