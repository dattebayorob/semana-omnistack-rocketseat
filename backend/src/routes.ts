import express from 'express'
import { sessionStore } from './controller/SessionController'

const routes = express.Router()

routes.get('/', (_req, response) => response.json({ message: "Hello World" }))
routes.post('/users', sessionStore)

export default routes