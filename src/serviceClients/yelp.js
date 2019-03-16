import { get } from "../util/agent"

const url = `https://api.yelp.com/v3/businesses/search` //term=${term}&latitude=${latitude}&longitude=${longitude}

export async function getRestaurants(term, latitude, longitude) {
    try {
        const queryParams = {
            term: term,
            latitude: latitude,
            longitude: longitude
        }

        const body = await get(url, queryParams)

        if (body.Exception) {
            const message = `Yelp Error: ${body.Exception["@exceptionCode"]}: ${body.Exception.ExceptionText}`
            throw new Exception(message, 400)
        }

        return body.restaurants

    } catch (error) {
        throw new Exception(`Error calling Yelp to get restaurants: ${error.message}`, error.status || 500)
    }
}