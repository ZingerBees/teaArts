let path = require("path");
module.exports = {
	publicPath:'./',
	//代理
	devServer: {
      host: '192.168.1.109',
	  proxy: {
	    '/api': {
	      target: "http://localhost:3000",
	      changeOrigin: true,
	      pathRewrite: {
	        '^/api': '/api'
	      }
	    }
	  },
	},
	configureWebpack: (config) => {
  		config.resolve = {
			extensions: ['.js', '.json', '.vue'],
			alias: {
				'@': path.resolve(__dirname, './src'),
			}
		}
	}
}