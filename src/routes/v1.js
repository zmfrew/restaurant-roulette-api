import { Router } from "express"
import { getRestaurantsForSearchTerm } from "../controllers/restaurantsController"

const router = Router()

https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}

router.get("/restaurants/term=:term&latitude=:latitude&longitude=:longitude", getRestaurantsForSearchTerm)

export default router