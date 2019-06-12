const express = require('express')
const routes = new express.Router()
const multer = require('multer')
const PostController = require('./controller/PostController')
const LikeController = require('./controller/LikeController')
const uploadConfig = require('./config/upload')

const upload = multer(uploadConfig)

routes.post('/posts', upload.single('image') ,PostController.store)
routes.get('/posts', PostController.index)

routes.post('/posts/:id/like', LikeController.store)



module.exports = routes