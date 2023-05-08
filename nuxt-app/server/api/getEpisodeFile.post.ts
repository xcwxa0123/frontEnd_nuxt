export default defineEventHandler(async event => {
    
    const dataBody = await readBody(event)
    try {
        const result = await kakuyomuApi().getEpisodeFile(dataBody.bookId, dataBody.episodeId)
        // const reader = new FileReader();
        // reader.readAsText(result);
        // reader.onload = () => {
        //     console.log('看看========》', reader)
        // }
        // 触发点击事件，开始下载
        // console.log('看看返回=======》', result instanceof Blob);
        console.log('看看返回result=======》', result);
        // URL.createObjectURL(result)
        // const arrayBuffer = new ArrayBuffer(result.size)
        // let view = new Uint8Array(arrayBuffer);
        // for (var i = 0; i < result.size; ++i) {
        //     view[i] = result[i];
        // }
        // const blob = new Blob([view], {
        //     type: 'text/plain'
        // });
        // console.log('看看blob=====>', blob)
        // return view
        return URL.createObjectURL(result)
        
        // 文件流形式，不需要组装

    } catch (error) {
        // return autoResponseBody({ data: {}, code: 500, msg: String(error) })
    }
})