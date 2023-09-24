import 'express-async-errors'
import routes from './routes'
import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import { errorMiddleware } from './middleware/error'

export const app = express()
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

const PORT = process.env.PORT || 3000

routes(app)
app.use(errorMiddleware)
const server = app.listen(PORT, () => console.log(`Servidor rodando na rota http://localhost:${PORT}`))
process.on('SIGINT', () => {
    console.log('Servidor encerrado')
    server.close()
})