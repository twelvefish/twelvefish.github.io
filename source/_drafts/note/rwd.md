---
title: 六角筆記
date: 2020-02-24 20:37:12
author: twelvefish
summary: 學習筆記
categories: 筆記
tags:
    - note
    - RWD
---

## RWD

### viewport

width=device-width 瀏覽器顯示寬度 = 裝置的寬度
initial-scale=1.0 縮放比為1

```html
<!-- 手機端、寬度等於手機設備寬、手機縮放1.0不縮放 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

emmet快速鍵生成，meta:vp

### @media

電腦=>平板=>手機 從大到小吃

```css
@media(max-width:768px){
    
}
```

最小設計到320px

RWD絕對不能出現X軸 ，max-width:600px，設置最大寬度，當螢幕寬小於最大寬度時，可不用擔心出現X軸

### %

跟從父元素的寬度去算%數
