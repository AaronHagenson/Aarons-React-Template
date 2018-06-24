var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        'babel-polyfill',
        path.join(parentDir, 'index.js')
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"]
            }, {
                 test: /(\.css|\.scss|\.sass)$/, 
                 loader: 'style-loader!css-loader'
            }, {
                test: /\.(png|jp(e*)g|svg)$/,  
                 use: [{
                loader: 'url-loader',
                options: { 
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                } 
            }]
            }
        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    },
    devtool: "#eval-source-map"
}