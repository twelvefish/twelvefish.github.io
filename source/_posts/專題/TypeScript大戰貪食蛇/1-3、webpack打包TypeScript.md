---
title: 1-3、webpack打包TypeScript
date: 2021-01-05 20:31:01
author: twelvefish
img:
top: false # 推薦文章至頂
cover: false # 文章加到首頁輪播
# coverImg: /images/1.jpg
# password: 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
toc: true # 文章內部目錄
mathjax: false
summary: 使用webpack工具打包TypeScript
categories: TypeScript大戰貪食蛇
tags:
  - TypeScript
---
> **《每日一句》**No cross,no crown.
> 
> 不經歷風雨，怎麼見彩虹。

此系列文章介紹如何使用TypeScript撰寫自動化貪食蛇小遊戲                                                             

本系列前半部參考影片[尚硅谷TypeScript快速上手](https://www.youtube.com/playlist?list=PLmOn9nNkQxJGwOhSsQ5H9JTPmiXGmy8Zw)，後半部則是筆者將貪食蛇遊戲更進一步改為自動覓食版本

## 生成 package.json

- 實際工作中，都是使用整合工具進行打包編譯，在此介紹如何使用webpacke進行打包編譯
- 使用webpack，需要使用npm去管理我們的套件，因此要先生成package.json，打開cmd，輸入<font color=red>npm init -y</font>
![](/images/technology/snake/15_npm_init.PNG)
- 安裝使用webpack所需要的套件
    - <font color=red>npm i \--save-dev webpack webpack-cli typescript ts-loader</font>
    - <font color=red>npm i \--save-dev html-webpack-plugin clean-webpack-plugin</font>
    - <font color=red>npm i \--save-dev webpack-dev-server</font>
    - \--save-dev : 開發模式
    - webpack、webpack-cli : 打包工具、命令行工具
    - ts-loader : 將 webpack、typescript 整合
    - html-webpack-plugin : 打包時自動生成html文件
    - clean-webpack-plugin : 先將舊有檔案刪除，確保編譯後的檔案都是最新版本的
    - webpack-dev-server : 設置webpack內建服務器，當程式碼有修改時，修改內容會藉由服務器隨時顯示在html頁面上
    - 會看到剛剛所安裝的套件都出現在package.json中，由於是開發模式，會出現在devDependencies底下
![](/images/technology/snake/16_npm_package.PNG)

## webpack配置文件

- 編寫webpack配置文件，webpack.config.js
- 引入套件 HTMLWebpackPlugin，由webpack直接幫我們生成html文件
- 引入套件 CleanWebpackPlugin，確保編譯後的檔案是最新版本
- webpack後生成的JS，如果不想使用箭頭函數，要將arrowFunction設為false
```js webpack.config.js
// 引入path package
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
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },
    // 配置Webpack套件
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
```

- 光配置webpack.config.js之外，還需要配置tsconfig.json，用於對ts文件進行編譯，參考上一章節
- 可藉由在package.json中scripts語法配置dev命令直接執行webpack  \--mode development (開發模式) ，輸入指令<font color=red>npm run dev</font>
```json
{
  "name": "webpack_test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
	"dev": "webpack  --mode development"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "ts-loader": "^8.0.13",
    "typescript": "^4.1.3",
    "webpack": "^5.11.1",
    "webpack-cli": "^4.3.1"
  }
}
```
- 由於我們設定打包後的文件設置在dist資料夾下，因此出現dist資料夾和bundle.js，及成功
![](/images/technology/snake/17_wepackbuild.gif)
- 而如果有設定套用html模板，也會一起生成，並且自動幫你引入打包後文件的名字bundle.js
![](/images/technology/snake/18_htmltemplate.PNG)
- 可藉由在package.json中scripts語法配置start命令，<font color=red>npm start</font>運行webpack serve
- webpack serve為webpack內建服務器，當程式碼有修改時，修改內容會藉由服務器隨時顯示在html頁面上
```json
{
    ...略...
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack  --mode development",
    "start": "webpack serve --open chrome.exe"
    },
    ...略...
}
```
![](/images/technology/snake/19_webpack_servr.PNG)

## babel

- 主要用於生成不同JS的版本，以利於兼容不同版本的瀏覽器，ex: let 是ES6的語法，經過babel轉換為var
- 安裝套件：
     - <font color=red>npm i \--save -dev @babel/core @babel/preset-env babel-loader core-js</font>
       - @babel/core
         - babel的核心工具
       - @babel/preset-env
         - babel的預定義環境，兼容不同瀏覽器
       - @babel-loader
         - babel在webpack中的加載器
       - core-js
         - core-js用來使舊版本的瀏覽器支援新版ES語法
- 在webpack.config.js配置babel-loader，先使用ts-loader把TS代碼轉成JS，再用babel-loader把新版JS轉換成舊版JS
```js
{
    ...略...
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
                                        // 要兼容的目標瀏覽器版本
                                        targets:{
                                            "chrome":"87",
                                            "ie":"11"
                                        },
                                        // 指定corejs的版本
                                        "corejs":"3",
                                        // 使用corejs的方式 "usage" 表示按需加載，有使用到的才加載
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
    ...略...
}
```
- 配置規則中如果targets寫兼容於"chrome":"88"，那轉換出來後的JS依舊是ES6，因為chrome87版本支援ES6，而如果額外有寫"ie":"11"則因為IE11只支援ES3，就會轉換為ES3語法
![](/images/technology/snake/20_babelES6.PNG)
![](/images/technology/snake/21_babelES3.PNG)

- 至於corejs則是用來處理些不兼容的語法，ex: Promise，將Promise語法從ES6轉換為IE11可以支援的版本代碼