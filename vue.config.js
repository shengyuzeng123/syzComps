const path = require('path')

module.exports = {
    publicPath:'./',
    devServer: {
        host: 'localhost',
        port: 7080,
        proxy: {
            '/api': {
                target: 'https://mcm.meflourish.com',
                changeOrigin: true,
                secure:false
                // pathRewrite: {
                //     '^/api': ''
                // }
            }
        }
    }
}