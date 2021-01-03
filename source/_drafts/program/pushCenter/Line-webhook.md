---
title: 1-2：建置 Line Webhook
date: 2020-02-16 21:59:07
author: twelvefish
img: /images/program/pushCenter/02/00.png
top: false
cover: false
toc: true
mathjax: false
summary: 使用者在通訊軟體上傳遞訊息，訊息只會被這些通訊軟體的服務廠商catch到，因此我們需要提供一組API掛在...
categories: 給我滿滿的推播大平台
tags:
    - chatobt
    - Line
    - ngrok
    - TypeScript
---

> **《每日一句》**Don't let your pride leave you all along
> 
> 別讓你的驕傲使你孤獨一人

![](/images/program/pushCenter/02/00.png)

## 認識Webhook

> **Webhook**（Webhook）是一種通過自訂[回呼函式](https://zh.wikipedia.org/wiki/%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0 "回呼函式")來增加或更改[網頁](https://zh.wikipedia.org/wiki/%E7%B6%B2%E9%A0%81 "網頁")表現的方法。這些回呼可被可能與原始網站或應用相關的第三方用戶及開發者儲存、修改與管理。
> 
> 來源 :  [維基百科/Webhook](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E9%92%A9%E5%AD%90)

user在通訊軟體(Line、Messenger、Wechat...)上傳遞訊息，訊息只會被這些通訊軟體的服務廠商catch到，因此我們需要提供一組API掛在這些服務廠商上，每當User在chatbot上傳遞訊息，服務廠商就會依照這chatbot上配置的API將訊息傳遞過來，這就類似於訂閱的概念，只要訂閱的Youtuber發出新影片通知，我們Email就能第一時間接到通知，只要訂閱的chatbot接收到User的訊息，我們的webhook就能接到通知，webhook就是實現訂閱機制的關鍵橋梁。

## Line Message API

而各家通訊軟體都有各自相對應的webhook實現方式，依照Document就能輕鬆建立起來，而Line Message API就是建立Line Webook的官方文件。

> [Line Message API](https://developers.line.biz/zh-hant/docs/messaging-api/overview/)
> 
> [建立聊天機器人 (設定webhook)](https://developers.line.biz/zh-hant/docs/messaging-api/building-bot/)

而Line Webook只是屬於Line Message API裡面的一小部分，畢竟webhook只是訂閱機制的橋樑，我們care的終究是User的Message，而Message API就有介紹到不同訊息的格式，text、FlexMessage...，或是quick reply、rich menu，這些會在後面文章依序介紹。

## 使用Nodejs版本的Line SDK

> [LINE Messaging API SDK for nodejs](https://github.com/line/line-bot-sdk-nodejs)
> 
> [官網各版本的SDK文件](https://developers.line.biz/en/docs/messaging-api/line-bot-sdk/)

Line提供多種程式語言的SDK，能夠方便你使用自己熟悉的語言框架進行開發，而不用自己去Call http request，或是自己去注意跨網站存取...等，當然如果你本身使用的程式語言，Line沒有提供SDK，而且你對Oauth2協定，有一定的了解，那麼我想你一定可以自己嘗試Call http request取得連線。

## 使用Nodejs、Express框架開發

本教學系列使用Node.js搭配Express框架進行開發，搭配強型別的TypeScript，可以觀看我的nodejs系列文章進行基礎了解。

## Line middleware

```ts
Line.middleware({
    channelId: "XXXXXXXXXXXX",
    channelSecret: "XXXXXXXXXXXX",
    channelAccessToken: "XXXXXXXXXXXX"
})
```

middlewar是一種**中介軟體**，是指http發出請求的 request 之後， 到接收回應 response 這段途徑中，用來處理特定用途的程式，而Line middleware就是Line來用驗證這個webhook是否和這個chatbot相匹對，是否擁有資格去存取User的訊息。

## 使用ngrok測試Webhook

那由於不是每個人都有自己的網域也就是https的URL網址，因此我們可以借助ngrok這個工具，它可以提供我們一組隨機的https加密網址，我們可以將webhook掛在這串網址上，將其放置在chatbot的Webhook setting，已達成我們沒有自己網域的窘境。

> [ngrok官網下載](https://ngrok.com/download)

首先至官網下載ngrok，開啟ngrok，由於我們將本地端程式的http預設port為3000，因此在指令上輸入 ngrok http 3000，而不同程式語言相對應預設聽得port也不相同(也可自行設定)，只需要把後面數字參數替換掉即可，

![](/images/program/pushCenter/02/01.png)

按下enter之後，會出現一組https URL，並且顯示目前所開啟的port。

![](/images/program/pushCenter/02/02.png)

將這串URL放置到Line developers，你所建置的chatbot上，在Messaging API頁面。

![](/images/program/pushCenter/02/03.png)

並且開啟Use webhook，和將本地端的server run 起，按下網頁上的 Verify 即可收到Line打過來的測試訊息，並出現success畫面，即完成 Line webhook建置。

![](/images/program/pushCenter/02/04.png)

![](/images/program/pushCenter/02/05.png)

![](/images/program/pushCenter/02/06.png)

```ts
import express = require('express')
import * as Line from '@line/bot-sdk'

router.post('/webhook', Line.middleware(config.LineConfig), (req, res) => {
    const events: WebhookEvent[] = req.body.events
    events.forEach(event => {

        console.log(JSON.stringify(event, null, 4));
    })
})
```

---

這一章節，將Line Webhook建立起來，下一章節將介紹Line Webhook的各種event事件，例如將chatbot加入Line群組的事件、加chatbot好友的事件，藉由這些事件通知我們可以給予各種商業邏輯或是其他有創意的變化…
如果你喜歡我的創作，請大力地給我拍拍手 🐊 🐊 🐊

> 參考資料: 以上連結
