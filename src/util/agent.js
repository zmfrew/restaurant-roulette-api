import superagent from "superagent"

const defaultHeaders = token => ({ Accept: "application/json", Authorization: `Bearer ${process.env.API_KEY}` })

export async function get(url, query = {}, object = {}) {
    const token = await getToken()
    const response = await superagent.get(url)
        .query(query)
        .retry(2)
        .set({ ...defaultHeaders(token), ...headers })
    return response.body
}

export async function post(url, body = {}, headers = {}) {
    const token = await getToken()
    const response = await superagent.post(url)
        .send(body)
        .retry(2)
        .set({ ...defaultHeaders(token), "Content-Type": "application/json", ...headers })
    return response.body
}