class ChatMiddleApiClass{
    // API_BASE_URL = process.env.API_BASE_URL || 'http://www.yuri.services';
    API_BASE_URL = 'http://www.yuri.services';
    public async getChatCompletions(msgData: object): Promise<any>{
        return await $fetch(`${this.API_BASE_URL}/chatmiddleApi/api/getChatCompletions`, { method: 'POST', body: { msgData } })
    }
}
export default () => {
    return new ChatMiddleApiClass()
}