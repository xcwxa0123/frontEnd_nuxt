export default defineEventHandler(async event => {
    const dataBody = await readBody(event)
    try {
        const result = await chatMiddleApi().getChatCompletions(dataBody.msgData)
        // const resData = JSON.parse(result)
        console.log('result=======>', result);
        const text = `如果你想尝试一些新鲜的食物，我有几个推荐：        `

        // 1. 日式料理：寿司、烤鳗鱼、炸蛤蜊等，日本菜色的选择非常多，而且口感和外观都相当精致。
        
        // 2. 墨西哥菜：墨西哥卷饼、玉米饼、炸玉米片等，墨西哥菜色通常具有浓郁的香料和辣味。
        
        // 3. 泰国菜：泰式咖喱、炒河粉、柠檬草鸡等，泰国菜以其独特的酸辣口味而闻名，可以尝试一下。
        
        // 4. 中东菜：烤肉串、鹰嘴豆沙拉、椰果甜点等，中东菜色集合了地中海、阿拉伯和北非的风味，味道丰富而多样。
        
        // 希望这些推荐能够帮到你，祝你晚餐愉快！`

        // event.node.res.setHeader('Content-Type', 'text/plain')
        // event.node.res.setHeader('Transfer-Encoding', 'chunked')
        // event.node.res.write(text); 
        // event.node.res.end();
        // 将 setTimeout 的回调函数改为 async 函数，以便使用 await
        // setTimeout(async () => {
        //     // 模拟逐个字符发送
        //     for (const char of text) {
        //         event.node.res.write(char); // 写入每个字符
        //         await new Promise(resolve => setTimeout(resolve, 100)); // 延迟一段时间
        //     }
            
        //     event.node.res.end(); // 发送完所有字符后，结束响应
        // }, 1000);
        return result
        // return autoResponseBody({ ...resData })
    } catch (error) {
        return autoResponseBody({ data: dataBody.msgData, code: 500, msg: String(error) })
        // return autoResponseBody({ data: {}, code: 500, msg: String(error) })
    }
})