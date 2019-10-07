import multer, { Options } from 'multer'
import path from 'path'

export const uploadConfig: Options = {
    storage: multer.diskStorage({
            destination: path.resolve(__dirname,'..','..', 'uploads'),
            filename: (_req, file,cb) => {
                cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
            }
    })
}