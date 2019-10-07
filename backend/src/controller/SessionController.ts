import { Request, Response } from 'express'
import User from '../model/User'

export const saveUser = async ({ body:{ email } }: Request , res: Response) => {
    let user = await User.findOne({ email })
    if(!user) user = await User.create({ email })
    return res.json(user)
}