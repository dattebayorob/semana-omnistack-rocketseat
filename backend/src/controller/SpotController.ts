import { Response, Request } from "express";
import Spot from "../model/Spot";
import User from "../model/User";

export const findByUser = async ({ headers}: Request, response: Response) => {
    const { user_id } = headers
    const spots = await Spot.find( { user: user_id })

    response.json(spots)
}

export const findByTech = async ({ query}: Request, response: Response) => {
    const { tech } = query
    const spots = await Spot.find({ techs: tech })

    response.json(spots)
}

export const saveSpot =  async ({ file, body, headers}: Request, response: Response) => {
    const { filename: thumbnail } = file
    const { user_id: user } = headers

    const userById = await User.findById(user)
    if(!userById) return response.status(401).json({ error: 'Forbidden'})

    const spot = await Spot.create({
        user, thumbnail, ...body,
        techs: body.techs.split(',').map((tech: string) => tech.trim())
    })
    return response.status(201).json({ spot })
}