module.exports = {
    devServer: {
        proxy: {
            '/users': {
              target: 'http://localhost:80',
              changeOrigin: true
            },
        }
    }
}