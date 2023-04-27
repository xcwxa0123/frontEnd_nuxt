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
        return autoResponseBody({ data: {}, code: 500, msg: String(error) })
    }
})