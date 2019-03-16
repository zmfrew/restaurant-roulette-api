const express = require("express")
const { getRestaurantsForSearchTerm } = require("../src/controllers/restaurantsController")
const app = express()
require('dotenv').config()

app.get("/ping", (req, res) => res.json({ "message": "pong" }))
//https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}
app.get("/yelp/:term/:latitude/:longitude", (req, res) => {
    getRestaurantsForSearchTerm(req, res)
})

// module.exports = router
const port = process.env.PORT || 3333
const server = app.listen(port, () => {
    console.info(`App is running on port ${port}`)
})

module.exports = server