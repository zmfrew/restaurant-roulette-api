import { Request, Response, NextFunction } from "express"

import { getRestaurants } from "../serviceClients/yelp"
import { isNil } from "lodash"
export async function getRestaurantsForSearchTerm(req, res, next) {
    try {
        const { params } = req

        if (isNil(params.term) || isNil(params.latitude) || isNil(params.longitude)) {
            throw new Exception("Restaurant path parameter must be a non-empty string", 400)
        }

        const term = params.term
        const latitude = params.latitude
        const longitude = params.longitude
        const restaurants = await getRestaurants(term, latitude, longitude)

        res.json(restaurants)
    } catch (error) {
        next(error)
    }
}