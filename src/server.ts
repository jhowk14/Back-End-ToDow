import { app } from './app';
import routes from './routes'

const PORT = process.env.PORT || 3000
routes(app)
const server = app.listen(PORT, () => console.log(`Servidor rodando na rota http://localhost:${PORT}`))
process.on('SIGINT', () => {
    console.log('Servidor encerrado')
    server.close()
})