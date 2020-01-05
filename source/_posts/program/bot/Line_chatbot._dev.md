---
title: 給我滿滿的推播大平台-01：申請 Line2.0官方帳號
date: 2020-01-05 18:51:52
author: twelvefish
img: /images/program/pushCenter/01/00.png
top: false
cover: false
toc: true
mathjax: false
summary: 2017、18、19年可以說是聊天機器人的時代，隨著FB、Line紛紛釋出聊天機器人的API，各家新創也紛紛看準這個趨勢...
categories: 給我滿滿的推播大平台
tags:
    - pushCenter
    - chatobt
    - Line
---

> **《每日一句》**Many people start a career with a dream,then get busy forgetting it
> 
> 很多人一開始為了夢想而忙，後來忙得忘了夢想

![圖片來源自UnDraw](/images/program/pushCenter/01/12.png)

2017、18、19年可以說是聊天機器人的時代，隨著FB、Line紛紛釋出聊天機器人的API，各家新創也紛紛看準這個趨勢，打造出自家的推播平台，何謂推播平台呢 ? 簡單來說就是結合各種通訊頻道，Line、Wechat、FB messenger...等等，進行各種自動化訊息發送，利用平台發送給不同使用通訊軟體習慣的消費者，店家資訊、促銷活動等，那麼現在先來認識一下在建立推播平台之前，如何串接Line官方帳號，打造一個屬於自己的對話機器人。

## Line官方網站

> [Line Developers](https://developers.line.biz/en/) 官網

點選右上角Log in按鈕登入，使用Line帳號登入官網

![](/images/program/pushCenter/01/01.png)

## 創建Provider

一進去會看到Provider，同一組Provider底下的官方帳號，針對同樣的user會給予相同的Line ID，Line ID為機器人識別user身分的唯一ID，而同一人使用不同組Provider底下的官方帳號，Line ID則不相同，因此可以藉由在相同Provider底下創建兩個官方帳號，一個做為上線環境，一個做為開發環境。

![](/images/program/pushCenter/01/02.png)

點選 Create New Provider 創建新的Provider

![](/images/program/pushCenter/01/03.png)

點選 Confirm button 創建成功

## 建立官方帳號

開始建立官方帳號，分為三種類型，在此文選擇 <font color=red>**Messaging API**</font>

LINE Login ：以Line帳號驗證登入網站，剛剛的官網就是最好的例子，如同 Google、FB一樣，提供第三方帳號登入，對開發者來說可以免去管理使用者帳密，而對使用者來說，可以不用特別去記憶小型網站的帳密(使用Oauth2認證)。

Messaging API： 透過Messaging API將自己的服務內容串聯到LINE@上，建立屬於自己的官方帳號。

Clova Skill：Line提供的語音智慧助理

![](/images/program/pushCenter/01/04.png)

根據表單，填寫官方帳號所需的icon、name等等…
ps.官方帳號的名稱一旦設定，七天後才能再次更改
ps.官方帳號的icon一旦設定，一小時後才能再次更改

![](/images/program/pushCenter/01/05.png)

Privacy policy URL、Terms of use URL 可之後再進行設定
再次確認資訊後，點選已閲讀並同意使用條款，才算創建成功

![](/images/program/pushCenter/01/06.png)

點選創建好的Line官方帳號，拉到下面Messaging settings，設置以下內容
以下內容皆可之後重新進行設定

![](/images/program/pushCenter/01/07.png)

將 Channel access token旁的Issue按鈕按下，設置token失效時間為0，即可設置永久token

![](/images/program/pushCenter/01/08.png)

Use webhooks：設置為 Enabled，才可串接webhooks，開發對話機器人
Webhook URL：必須使用https協定，下一章節將下載ngrok來進行設定
Allow bot to join group chats：是否允許將機器人拉至群組中，可自行決定，2.0版本會跳至Line Manager進行設置

![](/images/program/pushCenter/01/09.png)

掃描下面QRcode，即可看到剛剛創立好的機器人

![](/images/program/pushCenter/01/10.png)

![](/images/program/pushCenter/01/11.jpeg)

---

這一章節，純粹建立Line官方帳號，下一章節將串接Webhook，讓我們自己的Server端接收到使用者的訊息…
如果你喜歡我的創作，請大力地給我拍拍手 🐊 🐊 🐊

> 參考資料: http://at-blog.line.me/tw/messaging_api_intro


