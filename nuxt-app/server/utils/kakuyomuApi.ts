// type kakuyomuApiText = keyof KakuyomuApiClass
class KakuyomuApiClass{
    // 获取列表
    public async getTitleList(): Promise<any>{
        return await $fetch(`${process.env.API_BASE_URL}/implapi/books/list`, { method: 'GET' })
    }

    // 获取列表
    public async getBookDetail(book_id: string): Promise<any>{
        return await $fetch(`${process.env.API_BASE_URL}/implapi/books/list/${book_id}`, { method: 'GET' })
    }

    // 获取列表
    public async getEpisodeList(book_id: string): Promise<any>{
        return await $fetch(`${process.env.API_BASE_URL}/implapi/episode/viewlist/?book_id=${book_id}`, { method: 'GET' })
    }
}
export default () => {
    return new KakuyomuApiClass()
}