export default defineEventHandler(async event => {
    const dataBody = await readBody(event)
    try {
        const result: { results?: any } = await kakuyomuApi().uploadEpisode(dataBody.bookId)
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