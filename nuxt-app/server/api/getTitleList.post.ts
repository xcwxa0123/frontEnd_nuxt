export default defineEventHandler(async event => {
    try {
        const result: { results?: any } = await kakuyomuApi().getTitleList()
        const resData = {
            data: result['results'],
            code: 200,
            msg: 'success'
        }
        return autoResponseBody({ ...resData })
    } catch (error) {
        return autoResponseBody({ data: { apiAdress: process.env.API_BASE_URL }, code: 500, msg: String(error) })
    }
})