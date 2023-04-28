export default defineEventHandler(async event => {
    const dataBody = await readBody(event)
    try {
        const bookResult = JSON.parse(await kakuyomuApi().getBookDetail(dataBody.bookId))
        const episodeResult = JSON.parse(await kakuyomuApi().getEpisodeList(dataBody.bookId))
        const result = ''
        // return autoResponseBody({ ...result })
    } catch (error) {
        return autoResponseBody({ data: {}, code: 500, msg: String(error) })
    }
})