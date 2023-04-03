export default defineEventHandler(async event => {
    const dataBody = await readBody(event)
    console.log('body=====>', dataBody)
    const result = await $fetch(`http://192.168.163.143:8000/books/detail?pageHref=${dataBody.pageHref}`, { method: 'GET' })
    return {
        code: 200,
        msg: 'success',
        data: JSON.parse(result as string)
    }
})