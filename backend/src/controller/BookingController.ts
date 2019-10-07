import { Request, Response } from "express";
import Booking from "../model/Booking";
import User from "../model/User";

export const saveBookingToSpot =  async ({ params, body, headers}: Request, response: Response) => {
    const { spotId } = params
    const { user_id: user } = headers
    const { date } = body

    const userById = await User.findById(user)
    if(!userById) return response.status(401).json({ error: 'Forbidden'})

    const booking = await Booking.create({
        user,
        spot: spotId,
        date
    })
    await booking.populate('user').populate('spot').execPopulate()

    return response.status(201).json({ booking })
}