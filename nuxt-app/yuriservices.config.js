module.exports = {
    apps: [
        {
            name: 'yuriservices',
            port: '3000',
            exec_mode: 'fork',
            instances: '1',
            script: './yuriservices/server/index.mjs'
        }
    ]
}