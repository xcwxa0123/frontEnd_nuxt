// type kakuyomuApiText = keyof KakuyomuApiClass
class KakuyomuApiClass{
    // 获取列表
    public async getTitleList(){
        return String(await $fetch(`${process.env.API_BASE_URL}/implapi/books/list`, { method: 'GET' }))
    }

    // 获取列表
    public async getPageDetail(pageHref: string){
        return String(await $fetch(`${process.env.API_BASE_URL}/implapi/books/detail?pageHref=${pageHref}`, { method: 'GET' }))
    }
}
export default () => {
    return new KakuyomuApiClass()
}