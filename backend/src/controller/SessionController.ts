import * as express from 'express'
import User from '../model/User'

const sessionStore = async ({ body:{ email } }: express.Request , res: express.Response) => {
    let user = await User.findOne({ email })
    if(!user) await User.create({ email })
    return res.json(user)
}

export { sessionStore }