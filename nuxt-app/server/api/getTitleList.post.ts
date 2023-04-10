export default defineEventHandler(async event => {
    try {
        const result = JSON.parse(await kakuyomuApi().getTitleList())
        return autoResponseBody({ ...result })
    } catch (error) {
        return autoResponseBody({ data: {}, code: 500, msg: String(error) })
    }
})