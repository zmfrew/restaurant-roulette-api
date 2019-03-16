const { get } = require("../util/agent")

const url = `https://api.yelp.com/v3/businesses/search` //term=${term}&latitude=${latitude}&longitude=${longitude}

async function getRestaurants(term, latitude, longitude) {
    try {
        const queryParams = {
            "term": term,
            "latitude": latitude,
            "longitude": longitude
        }

        try {
            const body = await get(url, queryParams)
            return body
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        res.send(json({ response: "Yelp error occurred", statusCode: 500 }))
    }
}

module.exports.getRestaurants = getRestaurants