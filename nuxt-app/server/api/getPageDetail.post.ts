export default defineEventHandler(async event => {
    const dataBody = await readBody(event)
    try {
        const result = JSON.parse(await kakuyomuApi().getPageDetail(dataBody.pageHref))
        return autoResponseBody({ ...result })
    } catch (error) {
        return autoResponseBody({ data: {}, code: 500, msg: String(error) })
    }
})