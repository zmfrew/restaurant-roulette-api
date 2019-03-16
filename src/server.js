import express from "express"
import v1 from "./routes/v1"

const app = express()

app.get("/ping", (req, res) => res.json({ version }))
app.use("/v1", v1)

const port = process.env.PORT || 3339
const server = app.listen(port, () => {
    console.info(`App is running on port ${port}`)
})

export default server