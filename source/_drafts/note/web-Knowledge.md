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

## 關係選擇器

/* 
            为div的子元素span设置一个字体颜色红色
            （为div直接包含的span设置一个字体颜色）

            子元素选择器
                作用：选中指定父元素的指定子元素
                语法：父元素 > 子元素
         */

        /* div.box > span{
            color: orange;
        } */

        /* 
            后代元素选择器：
                作用：选中指定元素内的指定后代元素
                语法：祖先 后代
         */
         /* div span{
             color: skyblue
         } */

         /* div > p > span{
             color: red;
         } */

         /* 
            选择下一个兄弟
                语法：前一个 + 下一个
            选择下边所有的兄弟
                语法：兄 ~ 弟
          */

          p + span{
              color: red;
          }


          p ~ span{
              color: red;
          }

          */

## 屬性選擇器

          /* 
            [属性名] 选择含有指定属性的元素
            [属性名=属性值] 选择含有指定属性和属性值的元素
            [属性名^=属性值] 选择属性值以指定值开头的元素
            [属性名$=属性值] 选择属性值以指定值结尾的元素
            [属性名*=属性值] 选择属性值中含有某值的元素的元素
         */
        /* p[title]{ */
        /* p[title=abc]{ */
        /* p[title^=abc]{ */
        /* p[title$=abc]{ */
        p[title*=e]{
            color: orange;
        }

## 偽類選擇器

伪类（不存在的类，特殊的类）
            - 伪类用来描述一个元素的特殊状态
                比如：第一个子元素、被点击的元素、鼠标移入的元素...
            - 伪类一般情况下都是使用:开头
                :first-child 第一个子元素
                :last-child 最后一个子元素
                :nth-child() 选中第n个子元素
                    特殊值：
                        n 第n个 n的范围0到正无穷
                        2n 或 even 表示选中偶数位的元素
                        2n+1 或 odd 表示选中奇数位的元素

                    - 以上这些伪类都是根据所有的子元素进行排序

                :first-of-type
                :last-of-type
                :nth-of-type()
                    - 这几个伪类的功能和上述的类似，不通点是他们是在同类型元素中进行排序

            - :not() 否定伪类
                - 将符合条件的元素从选择器中去除
 */
        /* ul > li:first-child{
            color: red;
        } */
    
        /* ul > li:last-child{
            color: red;
        } */

        /* ul > li:nth-child(2n+1){
            color: red;
        } */

        /* ul > li:nth-child(even){
            color: red;
        } */

        /* ul > li:first-of-type{
            color: red;
        } */

        ul > li:not(:nth-of-type(3)){
            color: yellowgreen;
        }

## a元素的偽類

/* 
            :link 用来表示没访问过的链接（正常的链接）
			超連結獨有
         */
        a:link{
            color: red;
            
        }

        /* 
            :visited 用来表示访问过的链接
            由于隐私的原因，所以visited这个伪类只能修改链接的颜色
			超連結獨有
        */
        a:visited{
            color: orange; 
            /* font-size: 50px;   */
        }

        /* 
            :hover 用来表示鼠标移入的状态
			任何元素皆有
         */
         a:hover{
             color: aqua;
             font-size: 50px;
         }

         /*
            :active 用来表示鼠标点击
			任何元素皆有
         */
         a:active{
             color: yellowgreen;
             
         }

## 偽元素選擇器

/* 
            伪元素，表示页面中一些特殊的并不真实的存在的元素（特殊的位置）
                伪元素使用 :: 开头

                ::first-letter 表示第一个字母
                ::first-line 表示第一行
                ::selection 表示选中的内容
                ::before 元素的开始 
                ::after 元素的最后
                    - before 和 after 必须结合content属性来使用
        */
        p::first-letter{
            font-size: 50px;
        }

        p::first-line{
            background-color: yellow; 
        }

        p::selection{
            background-color: greenyellow;
        }

        /* div::before{
            content: 'abc';
            color: red;
        }

        div::after{
            content: 'haha';
            color: blue;
        } */

        div::before{
            content: '『';
         }

        div::after{
            content: '』';
        }

## !important

可以在某一个样式的后边添加 !important ，则此时该样式会获取到最高的优先级，甚至超过内联样式，
                注意：在开发中这个玩意一定要慎用！

## 长度单位：
                    像素
                        - 屏幕（显示器）实际上是由一个一个的小点点构成的
                        - 不同屏幕的像素大小是不同的，像素越小的屏幕显示的效果越清晰
                        - 所以同样的200px在不同的设备下显示效果不一样

                    百分比
                        - 也可以将属性值设置为相对于其父元素属性的百分比
                        - 设置百分比可以使子元素跟随父元素的改变而改变

                    em
                        - em是相对于元素的字体大小来计算的
                        - 1em = 1font-size
                        - em会根据字体大小的改变而改变

                    rem
                        - rem是相对于根元素 (html) 的字体大小来计算
                        html{
                            font-size
                        }

## 颜色单位：
                    在CSS中可以直接使用颜色名来设置各种颜色
                        比如：red、orange、yellow、blue、green ... ...
                        但是在css中直接使用颜色名是非常的不方便

                    RGB值：
                        - RGB通过三种颜色的不同浓度来调配出不同的颜色
                        - R red，G green ，B blue
                        - 每一种颜色的范围在 0 - 255 (0% - 100%) 之间
                        - 语法：RGB(红色,绿色,蓝色)

                    RGBA:
                        - 就是在rgb的基础上增加了一个a表示不透明度
                        - 需要四个值，前三个和rgb一样，第四个表示不透明度
                            1表示完全不透明   0表示完全透明  .5半透明
                            background-color: rgba(106,153,85,0.5);

                    十六进制的RGB值：
                        - 语法：#红色绿色蓝色
                        - 颜色浓度通过 00-ff
                        - 如果颜色两位两位重复可以进行简写  
                            #aabbcc --> #abc
                            background-color: #ff0000;
                    
                    HSL值 HSLA值
                        H 色相(0 - 360)
                        S 饱和度，颜色的浓度 0% - 100%
                        L 亮度，颜色的亮度 0% - 100%
                        background-color: hsla(98, 48%, 40%, 0.658);

## layout

### 文档流（normal flow）
            - 网页是一个多层的结构，一层摞着一层
            - 通过CSS可以分别为每一层来设置样式
            - 作为用户来讲只能看到最顶上一层
            - 这些层中，最底下的一层称为文档流，文档流是网页的基础
                我们所创建的元素默认都是在文档流中进行排列
            - 对于我们来元素主要有两个状态
                在文档流中
                不在文档流中（脱离文档流）

            - 元素在文档流中有什么特点：
                - 块元素
                    - 块元素会在页面中独占一行(自上向下垂直排列)
                    - 默认宽度是父元素的全部（会把父元素撑满）
                    - 默认高度是被内容撑开（子元素）

                - 行内元素
                    - 行内元素不会独占页面的一行，只占自身的大小
                    - 行内元素在页面中左向右水平排列，如果一行之中不能容纳下所有的行内元素
                        则元素会换到第二行继续自左向右排列（书写习惯一致）
                    - 行内元素的默认宽度和高度都是被内容撑开
## 盒模型、盒子模型、框模型（box model）
            - CSS将页面中的所有元素都设置为了一个矩形的盒子
            - 将元素设置为矩形的盒子后，对页面的布局就变成将不同的盒子摆放到不同的位置
            - 每一个盒子都由一下几个部分组成：
                内容区（content）
                内边距（padding）
                边框（border）
                外边距（margin）

内容区（content），元素中的所有的子元素和文本内容都在内容区中排列  
                    内容区的大小由width 和 height两个属性来设置
                        width 设置内容区的宽度
                        height 设置内容区的高度

                        
                边框（border），边框属于盒子边缘，边框里边属于盒子内部，出了边框都是盒子的外部
                    边框的大小会影响到整个盒子的大小
                要设置边框，需要至少设置三个样式：
                    边框的宽度 border-width，默认值，一般都是 3个像素
                        可以用来指定四个方向的边框的宽度
                        值的情况
                            四个值：上 右 下 左
                            三个值：上 左右 下
                            两个值：上下 左右
                            一个值：上下左右

                    边框的颜色 border-color，border-color也可以省略不写，如果省略了则自动使用color的颜色值
                    边框的样式 border-style
                        solid 表示实线
                        dotted 点状虚线
                        dashed 虚线
                        double 双线

                        border-style的默认值是none 表示没有边框

                    border简写属性，通过该属性可以同时设置边框所有的相关样式，并且没有顺序要求

                    除了border以外还有四个 border-xxx
                        border-top
                        border-right
                        border-bottom
                        border-left

## 水平方向的布局
元素的水平方向的布局：
                    元素在其父元素中水平方向的位置由以下几个属性共同决定“
                        margin-left
                        border-left
                        padding-left
                        width
                        padding-right
                        border-right
                        margin-right

                    一个元素在其父元素中，水平布局必须要满足以下的等式
margin-left+border-left+padding-left+width+padding-right+border-right+margin-right = 其父元素内容区的宽度 （必须满足）

以上等式必须满足，如果相加结果使等式不成立，则称为过度约束，则等式会自动调整
                        - 调整的情况：
                            - 如果这七个值中没有为 auto 的情况，则浏览器会自动调整margin-right值以使等式满足
                    - 这七个值中有三个值和设置为auto
                        width
                        margin-left
                        maring-right
                        - 如果某个值为auto，则会自动调整为auto的那个值以使等式成立
                            0 + 0 + 0 + auto + 0 + 0 + 0 = 800  auto = 800
                            0 + 0 + 0 + auto + 0 + 0 + 200 = 800  auto = 600
                            200 + 0 + 0 + auto + 0 + 0 + 200 = 800  auto = 400

                            auto + 0 + 0 + 200 + 0 + 0 + 200 = 800  auto = 400


                            auto + 0 + 0 + 200 + 0 + 0 + auto = 800  auto = 300

                        - 如果将一个宽度和一个外边距设置为auto，则宽度会调整到最大，设置为auto的外边距会自动为0
                        - 如果将三个值都设置为auto，则外边距都是0，宽度最大
                        - 如果将两个外边距设置为auto，宽度固定值，则会将外边距设置为相同的值
                            所以我们经常利用这个特点来使一个元素在其父元素中水平居中
                            示例：
                                width:xxxpx;
                                margin:0 auto;

## 51-垂直布局

默认情况下父元素的高度被内容 ( 子元素 )撑开


子元素是在父元素的内容区中排列的，
                    如果子元素的大小超过了父元素，则子元素会从父元素中溢出
                    使用 overflow 属性来设置父元素如何处理溢出的子元素

                    可选值：
                        visible，默认值 子元素会从父元素中溢出，在父元素外部的位置显示
                        hidden 溢出内容将会被裁剪不会显示
                        scroll 生成两个滚动条，通过滚动条来查看完整的内容
                        auto 根据需要生成滚动条
                        
                overflow-x: 
                overflow-y:
                overflow: auto;

            垂直外边距的重叠（折叠）
                - 相邻的垂直方向外边距会发生重叠现象
                - 兄弟元素
                    - 兄弟元素间的相邻垂直外边距会取两者之间的较大值（两者都是正值）
                    - 特殊情况：
                        如果相邻的外边距一正一负，则取两者的和
                        如果相邻的外边距都是负值，则取两者中绝对值较大的

                    - 兄弟元素之间的外边距的重叠，对于开发是有利的，所以我们不需要进行处理


                - 父子元素
                    - 父子元素间相邻外边距，子元素的会传递给父元素（上外边距）
                    - 父子外边距的折叠会影响到页面的布局，必须要进行处理


## 行内元素的盒模型
                    - 行内元素不支持设置宽度和高度
                    - 行内元素可以设置padding，但是垂直方向padding不会影响页面的布局
                    - 行内元素可以设置border，垂直方向的border不会影响页面的布局
                    - 行内元素可以设置margin，垂直方向的margin不会影响布局

## display 用来设置元素显示的类型
                    可选值：
                        inline 将元素设置为行内元素
                        block 将元素设置为块元素
                        inline-block 将元素设置为行内块元素 
                                行内块，既可以设置宽度和高度又不会独占一行
                        table 将元素设置为一个表格
                        none 元素不在页面中显示

##  visibility 用来设置元素的显示状态
                    可选值：
                        visible 默认值，元素在页面中正常显示
                        hidden 元素在页面中隐藏 不显示，但是依然占据页面的位置

## 默认样式：
                - 通常情况，浏览器都会为元素设置一些默认样式
                - 默认样式的存在会影响到页面的布局，
                    通常情况下编写网页时必须要去除浏览器的默认样式（PC端的页面）

                    重置样式表：专门用来对浏览器的样式进行重置的
                            reset.css 直接去除了浏览器的默认样式
                            normalize.css 对默认样式进行了统一
                            <link rel="stylesheet" href="./css/reset.css"> -->
                            <link rel="stylesheet" href="./css/normalize.css">

    /* 去除项目符号 * /
            list-style:none; 

            /* *{
            margin: 0;
            padding: 0;
        } */