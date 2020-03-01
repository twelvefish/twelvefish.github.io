---
title: web開發知識筆記
date: 2020-02-23 21:44:44
author: twelvefish
summary: 學習筆記
categories: 筆記
tags:
    - note
    - web
---
## HTTP META

meta標籤主要用來描述html檔裡面的屬性，關鍵字、描述...等資訊，用來提升瀏覽器、搜尋引擎去解析這個網站。
```html
<head>
    <!-- 網頁編碼 -->
    <meta charset="UTF-8">

    <!-- 網頁所使用的語言種類 -->
    <meta http-equiv="Content-Language" content="zh-TW">

    <!-- 手機端、寬度等於手機設備寬、手機縮放1.0不縮放 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="網頁簡短描述">
    <meta name="keywords" content="網頁關鍵字">	
    <meta name="author" content="作者姓名">
    <meta name="copyright" content="網頁版權">

    <!-- 禁止瀏覽器用快取開啟網頁 -->
    <meta http-equiv="Pragma" content="no-cache">

    <!-- 強制在單一視窗中顯示網頁 -->
    <meta http-equiv="windows-Target" content="_top">

    <!-- 將頁面重新導向到另一个網站， content : n秒之後 -->
    <meta http-equiv="refresh" content="3;url=https://www.mozilla.org"> 
        
</head>
```
description、keywords 盡可能寫清楚點，搜索引擎主要去查找這兩項去做網頁的排序。

生成meta工具，去FB轉發能夠依照自己想要秀出縮圖、介紹
https://www.heymeta.com/

>參考資料:
[揭開HTML META的面纱](https://www.youtube.com/watch?v=V0d9dgn3mdc&list=PLK2w-tGRdrj7BxYFryNVGgAVD7nTzfSoA&index=7&t=0s)
https://www.wibibi.com/info.php?tid=415

## 文檔聲明

<  !DOCTYPE html  > 用來告訴瀏覽器當前版本，不區分大小寫，寫在html tag 前面

## HTML字符實體

& + 實體的名字 + 分號:
    &nbsp ; 空格符號
    &gt ; 大於符號
    &copy ; 版權符號

## blockquote、q 長短引用標籤

長引用 (blockquote)
短引用 (q)
```html
<!-- blockquote 表示一个長引用，引用別人的話 -->
老子說 : 
    <blockquote>
        这句话我是从来没有说过的！
    </blockquote>

<!-- q表示一个短引用 -->
    子曰<q>學而時習之，樂呵樂呵！</q>
```

## Content sectioning 布局標籤

h5之後產生的標籤

```html
<header></header> 網站頭部
<main></main> 網頁主體 (只能有一個)
<footer></footer> 網頁底部
<!-- 以下少用 -->
<nav></nav> 網頁中的導航
<aside></aside> 網頁和主體相關的內容 (側邊攔)
```

## 定義列表

定義列表，使用dl标签来创建一个定義列表
使用dt来表示定义的内容
使用dd来对内容进行解释说明

    <dl>
        <dt>结构</dt>
        <dd>结构表示网页的结构，结构用来规定网页中哪里是标题，哪里是段落</dd>
        <dd>结构表示网页的结构，结构用来规定网页中哪里是标题，哪里是段落</dd>
        <dd>结构表示网页的结构，结构用来规定网页中哪里是标题，哪里是段落</dd>
    </dl>

## 超連結

target属性，用来指定超链接打开的位置
可选值：
_self 默认值 在当前页面中打开超链接
_blank 在一个新的要么中打开超链接

    <a href="07.列表.html" target="_blank">超链接</a>

    <a href="#bottom">去底部</a>

    <br><br>
    <a href="#p3">去第三个自然段</a>

    <!-- 在开发中可以将#作为超链接的路径的展位符使用 -->
    <a href="#">这是一个新的超链接</a>

    <br><br>

    <!-- 可以使用 javascript:; 来作为href的属性，此时点击这个超链接什么也不会发生 -->
    <a href="javascript:;">这是一个新的超链接</a>

    <!-- 
        可以直接将超链接的href属性设置为#，这样点击超链接以后
            页面不会发生跳转，而是转到当前页面的顶部的位置

        可以跳转到页面的指定位置，只需将href属性设置 #目标元素的id属性值

        id属性（唯一不重复的）
            - 每一个标签都可以添加一个id属性
            - id属性就是元素的唯一标识，同一个页面中不能出现重复的id属性    
     -->

     <a id="bottom" href="#">回到顶部</a>

## 圖片標籤

img
         属性：
            src 属性指定的是外部图片的路径（路径规则和超链接是一样的）

            alt 图片的描述，这个描述默认情况下不会显示，有些浏览器会图片无法加载时显示
                搜索引擎会根据alt中的内容来识别图片，如果不写alt属性则图片不会被搜索引擎所收录

            width 图片的宽度 (单位是像素)
            height 图片的高度    
                - 宽度和高度中如果只修改了一个，则另一个会等比例缩放

            注意：
                一般情况在pc端，不建议修改图片的大小，需要多大的图片就裁多大
                但是在移动端，经常需要对图片进行缩放（大图缩小）


        图片的格式：
            jpeg(jpg)
                - 支持的颜色比较丰富，不支持透明效果，不支持动图
                - 一般用来显示照片
            gif
                - 支持的颜色比较少，支持简单透明，支持动图
                - 颜色单一的图片，动图
            png
                - 支持的颜色丰富，支持复杂透明，不支持动图
                - 颜色丰富，复杂透明图片（专为网页而生）
            webp
                - 这种格式是谷歌新推出的专门用来表示网页中的图片的一种格式
                - 它具备其他图片格式的所有优点，而且文件还特别的小
                - 缺点：兼容性不好

            base64 
                - 将图片使用base64编码，这样可以将图片转换为字符，通过字符的形式来引入图片    
                - 一般都是一些需要和网页一起加载的图片才会使用base64

            效果一样，用小的
            效果不一样，用效果好的

## 内联框架

        内联框架，用于向当前页面中引入一个其他页面
            src 指定要引入的网页的路径
            frameborder 指定内联框架的边框
< + iframe src="" width="800" height="600" frameborder="0"></iframe>

## 音頻

<!-- 
        audio 标签用来向页面中引入一个外部的音频文件的
            音视频文件引入时，默认情况下不允许用户自己控制播放停止

        属性：
            controls 是否允许用户控制播放
            autoplay 音频文件是否自动播放
                - 如果设置了autoplay 则音乐在打开页面时会自动播放
                    但是目前来讲大部分浏览器都不会自动对音乐进行播放 
            loop 音乐是否循环播放  
     -->
    <!-- <audio src="./source/audio.mp3" controls autoplay loop></audio> -->
    
    <!-- <audio src="./source/audio.mp3" controls></audio> -->


    <!-- 除了通过src来指定外部文件的路径以外，还可以通过source来指定文件的路径 -->
    以source寫法載入音頻，支持此標籤的瀏覽器就會出現音頻，而不支持的瀏覽器就會出現提示訊息
    <audio controls>
        <!-- 对不起，您的浏览器不支持播放音频！请升级浏览器！ --> 
        <source src="./source/audio.mp3">
        <source src="./source/audio.ogg">
        embed 支持IE8 會自動撥放
        <embed src="./source/audio.mp3" type="audio/mp3" width="300" height="100">
    </audio>

    <!-- 
        使用video标签来向网页中引入一个视频
            - 使用方式和audio基本上是一样的
     -->
    <video controls>
        <source src="./source/flower.webm">
        <source src="./source/flower.mp4">
        <embed src="./source/flower.mp4" type="video/mp4">
    </video>

    <iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=b00318l66nt" allowFullScreen="true" width="500" height="300"></iframe>
