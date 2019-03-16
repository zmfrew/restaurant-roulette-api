const { getRestaurants } = require("../serviceClients/yelp")

async function getRestaurantsForSearchTerm(req, res) {
    try {
        const term = req.params.term
        const latitude = req.params.latitude
        const longitude = req.params.longitude
        const restaurants = await getRestaurants(term, latitude, longitude)

        res.json(restaurants)
    } catch (error) {
        console.log(`Error getting restaurants: ${error}`)
    }
}

module.exports.getRestaurantsForSearchTerm = getRestaurantsForSearchTerm