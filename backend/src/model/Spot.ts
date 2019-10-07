import { model, Schema } from "mongoose"

export default model('Spot',
    new Schema({ 
        thumbnail: String,
        company: String,
        price: String,
        techs: [String],
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        } 
    }))