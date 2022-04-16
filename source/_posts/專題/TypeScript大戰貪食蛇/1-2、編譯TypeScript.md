---
title: 1-2、編譯TypeScript
date: 2021-01-04 20:03:15
author: twelvefish
img:
top: false # 推薦文章至頂
cover: false # 文章加到首頁輪播
# coverImg: /images/1.jpg
# password: 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
toc: true # 文章內部目錄
mathjax: false
summary: 學習編譯TypeScript的配置文件 tsconfig.json  
categories: TypeScript大戰貪食蛇
tags:
  - TypeScript
---
> **《每日一句》**Just trust yourself,then you will know how to live.
> 
> 只要相信自己，你就會懂得如何去生活。

此系列文章介紹如何使用TypeScript撰寫自動化貪食蛇小遊戲                                                             

本系列前半部參考影片[尚硅谷TypeScript快速上手](https://www.youtube.com/playlist?list=PLmOn9nNkQxJGwOhSsQ5H9JTPmiXGmy8Zw)，後半部則是筆者將貪食蛇遊戲更進一步改為自動覓食版本

## 自動編譯 TypeScript 

- 編譯TS檔語法，tsc XXX.ts
- 但是每次修改檔案都要重新編譯過於麻煩，可以在後面下 <font color=red>tsc XXX.ts -w</font>，自動編譯文件
PS.出現如下畫面，及此XXX.ts一旦修改後儲存，及自動編譯對應的XXX.js文件
![](/images/technology/snake/11_w.gif)
- 直接使用tsc 指令，可將當前目錄下的所有TS文件編譯成JS文件，但這個前提是必須在當前目錄下創建TS的配置文件tsconfig.json
![](/images/technology/snake/12_tsc.gif)
- 因此指令如果下 <font color=red>tsc -w</font>，則能對當前目錄下的所有ts檔進行全部自動編譯

## tsconfig.json 配置說明

- tsconfig.json是TS編譯器的配置文件，TS編譯器可以根據tsconfig.json內容來對程式碼進行編譯
- 由於不一定在目錄下的所有檔案都要被編譯，因此可以使用include、exclude指令

- include
    - 指定哪些TS文件需要被編譯
PS.\** 表示任意目錄、\* 表示任意文件
```json
{
    // 此範例表示在src、test資料夾下的TS檔案和更裡面的資料夾裡面的TS檔案都會被編譯
    "include":["./src/**/*", "./test/**/*"]
}
```

- exclude
    - 不需要被編譯的文件目錄
PS.exclude默認值：["node_modules", "bower_components", "jspm_packages"]，此些本身默認不被編譯
```json
{
    // 此範例表示在src/hello資料夾下的TS檔案不需編譯
    "exclude":["./src/hello/*"]
}
```

- extends
    - 繼承其餘配置文件
```json
{
    // 此範例表示配置文件會自動包含configs目錄下的base.json配置文件
    "extends": "./configs/base.json"
}
```
- 此範例演示extends外部檔案base.json，而base.json裡面exclude hello.ts，因此運行之後，hello.js沒有被編譯出來
![](/images/technology/snake/13_exclude.gif)

- files
    - 和include類似，只是此需要將需編譯的TS文件一個個列出來
```json
    "files": [
        "core.ts",
        "sys.ts",
        "types.ts"
    ]
```

- compilerOptions
    - 配置文件中較多子選項的編譯配置
    - target
        - 設置TS編譯為JS的版本
        - ES3（默認）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext
        ```json
            "compilerOptions": {
                "target": "ES6"
            }
        ```

    - lib
        - 設置撰寫程式時，所包含的library，用於關鍵字的提示文字，默認有基本的，不需特別寫
        - ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ...
        ```json
            "compilerOptions": {
                "lib": ["ES6", "DOM"]
            }
        ```
    
    - module
        - 設置編譯後的JS使用的模塊化規範
        - CommonJS、UMD、AMD、System、ES2020、ESNext、None
        ```json
            "compilerOptions": {
                "module": "CommonJS"
            }
        ```
    
    - outDir
        - 編譯後JS文件所在目錄，通常將編譯後的JS檔存放於dist目錄下
        ```json
            "compilerOptions": {
                "outDir": "dist"
            }
        
    - outFile
        - 將所有TS文件編譯成一個JS文件，用不太到
        ```json
            "compilerOptions": {
                "outFile": "dist/app.js"
            }
        ```
        ![](/images/technology/snake/14_outDir.gif)

    - allowJs
        - 是否對JS文件進行編譯，默認是false不編譯
        ```json
            "compilerOptions": {
                "allowJs": "false"
            }
        ```
    
    - checkJs
        - 檢查JS文件是否符合與法規範，默認是false不檢查
        ```json
            "compilerOptions": {
                "checkJs": "false"
            }
        ```

    - removeComments
        - 編譯為JS後，是否移除TS的註釋，默認是false不移除
        ```json
            "compilerOptions": {
                "removeComments": "false"
            }
        ```

    - noEmit
        - 是否不生成編譯後的JS文件，通常用來只想檢查語法但不想用TS編譯的JS文件，默認是false要生成
        ```json
            "compilerOptions": {
                "noEmit": "false"
            }
        ```

    - noEmitOnError
        - TS程式碼有錯誤時，是否不生成編譯後的JS文件，默認是false就算錯誤也要生成
        ```json
            "compilerOptions": {
                "noEmitOnError": "false"
            }
        ```

    - strict
        - 所有嚴格檢查的總開關，設為true，則將所有嚴格檢查打開，建議設為true
        ```json
            "compilerOptions": {
                "strict": "true"
            }
        ```

    - alwaysStrict
        - 設置編譯後的JS文件是否使用嚴格模式，默認是false不使用，但如果TS有使用export語法，則自動使用嚴格模式
        ```json
            "compilerOptions": {
                "alwaysStrict": "false"
            }
        ```

    - noImplicitAny
        - 是否允許出現隱式的any類型，默認是false可出現
        ```json
            "compilerOptions": {
                "noImplicitAny": "false"
            }
        ```

    - noImplicitThis
        - 是否允許出現不明確類型的this，默認是false可出現
        ```json
            "compilerOptions": {
                "noImplicitThis": "false"
            }
        ```

    - strictNullChecks
        - 嚴格檢查變數是否可能為null，默認是false，可能出現null，但不報錯
        ```json
            "compilerOptions": {
                "strictNullChecks": "false"
            }
        ```
        ```typescript
        // box1有可能為null，而導致後面程式碼出錯
        let box1 = document.getElementById('box1');
        box1.addEventListener('click', function (){
            alert('hello');
        });
        // 可使用判斷式來避免出錯
        if(box1 !== null){
            box1.addEventListener('click', function (){
                alert('hello');
            });
        }
        // 或是用?表示
        box1?.addEventListener('click', function (){
            alert('hello');
        });
        ```

## 整檔tsconfig.json配置

- 可以直接創建tsconfig.json檔案將以下json字串複製貼上
- 或是打開cmd直接輸入<font color=red>tsc \--init</font>，自動初始化tsconfig.json文件

```json
{
    "include": ["./src/**/*"],
    "exclude": ["./src/hello/**/*"],
    "compilerOptions": {
        "target": "es6",
        "module": "es6",
        "outDir": "./dist",
        "allowJs": true,
        "checkJs": true,
        "removeComments": true,
        "noEmit": false,
        "noEmitOnError": true,
        "strict": true
    }
}
```