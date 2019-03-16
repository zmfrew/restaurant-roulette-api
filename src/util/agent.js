const superagent = require("superagent")

async function get(url, query = {}, object = {}) {
    const response = await superagent.get(url)
        .set({ "Content-Type": "application/json", "Authorization": `Bearer ${process.env.API_KEY}` })
        .query(query)
        .retry(2)
    return response.body
}

module.exports.get = get