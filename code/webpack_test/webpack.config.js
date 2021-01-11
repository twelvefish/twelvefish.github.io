const path = require('path');
// 引入html package
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入clean package
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack中的所有配置都應該寫在module.exports中
module.exports = {

    // 指定入口文件，通常放在src資料夾下
    entry: "./src/index.ts",

    // 指定打包文件所在目錄
    output: {
        // 指定打包文件的路徑，通常存放在dist資料夾下 
        // path:"./dist"
        path: path.resolve(__dirname, 'dist'),
        // 打包後文件的名字
        filename: "bundle.js",

        // 告訴webpack打包後的js文件不使用箭頭符號
        environment:{
            arrowFunction: false
        }
    },
    // 指定webpack打包時要使用的模組
    module: {
        // 指定要加載的規則，因為可能打包的各文件類型有ts、img、sas.....
        rules: [
            {
                // test表示對哪些文件規則生效
                test: /\.ts$/,  //匹配所有ts結尾的文件
                // 要使用的loader
                use: [
                    // 配置babel
                    {
                        // 指定加載器
                        loader:"babel-loader",
                        // 設置babel
                        options: {
                            // 設置預定義環境
                            presets:[
                                [
                                    // 指定環境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的瀏覽器版本
                                        targets:{
                                            "chrome":"88",
                                            "ie":"11"
                                        },
                                        // 指定corejs的版本
                                        "corejs":"3",
                                        // 使用corejs的方式 "usage" 表示按需加載
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },
    // 配置Webpack插建
    plugins: [
        new CleanWebpackPlugin(),
        // 自動生成html文件
        new HTMLWebpackPlugin({
            title: "自定義html文件title",
            // 指定生成出來的html都依照對應的模板
            template: "./src/index.html"
        }),
    ],
    // 設置引入模組的檔案類型
    resolve: {
        extensions: ['.ts', '.js']
    }

};