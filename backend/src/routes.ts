import { Router } from 'express'
import multer from 'multer'
import { uploadConfig } from './config/upload'
import { saveBookingToSpot } from './controller/BookingController'
import { saveUser } from './controller/SessionController'
import { findByTech, findByUser, saveSpot } from './controller/SpotController'

const routes = Router()
const upload = multer(uploadConfig)

routes.post('/users', saveUser)
routes.get('/spots', findByTech)
routes.post('/spots', upload.single('thumbnail') ,saveSpot)
routes.post('/spots/:spotId/booking', saveBookingToSpot)
routes.get('/spots/me', findByUser)

export default routes