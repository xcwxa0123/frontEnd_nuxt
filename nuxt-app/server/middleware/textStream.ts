// const EventSource = require('eventsource');
// export default function (req, res) {
//   res.setHeader('Content-Type', 'text/event-stream');
//   res.setHeader('Cache-Control', 'no-cache');
//   res.setHeader('Connection', 'keep-alive');

//   let count = 0;

//   const sendEvent = () => {
//     const message = `Message ${count}`;
//     res.write(`data: ${message}\n\n`);
//     count++;
//   };

//   // 每秒向客户端发送一条消息
//   const interval = setInterval(sendEvent, 1000);

//   // 当请求被关闭时停止发送消息
//   req.on('close', () => {
//     clearInterval(interval);
//     res.end();
//   });
// }

export default defineEventHandler(async (event) => {
//     console.log('New request: ' + await readBody(event))
})