---
title: 1-2、隱藏之術，封裝皮卡丘
date: 2020-03-01 09:30:08
author: twelvefish
img: /images/program/pokemon/02/00.jpeg
top: false
cover: false
toc: true
mathjax: false
summary: 從上一章我們創建出皮卡丘的Class以及建立了兩個皮卡丘的物件，但實際上我們因為方便，而只為這兩隻皮卡丘物件創建各自的...
categories: 成為Pokémon大師之路
tags:
    - java
    - OOP
---

> **《每日一句》**It's lucky to gain and fated to miss.
> 
> 得知，我幸。不得，我命。

![](/images/program/pokemon/02/00.jpeg)

## 前言

從上一章我們創建出皮卡丘的Class以及建立了兩個皮卡丘的物件，但實際上我們因為方便，而只為這兩隻皮卡丘物件創建各自的名字和招式方法，而其餘在Class中的HP、攻擊、速度...等都沒有特別去附值，就請讀者以此類推就能產生出相對應的屬性了。



## 封裝

現在我們有一個皮卡丘的Class，裡面包含了眾多屬性，例如HP、攻擊、速度...，如果我們現在想讓這些屬性的數值都是正數，也就是大於0的數字，但這個觀念如果在每次創建皮卡丘物件時都要特別去記住、去撰寫這個規則，是否麻煩了點，而現在只是規定大於0，那如果是更複雜的邏輯，例如 : 依照等級不同，最低的血量值是多少，那每次創建時都需要請開發者寫一份邏輯，是否過於沒有效率，而這種邏輯其實是皮卡丘物件通用型的，因此我們可以將之邏輯寫進皮卡丘Class，而在創建物件時就可以直接調用，調用時我們不用了解邏輯是如何實作的，只需要使用它即可，這就是封裝的第一個概念。



## public、protected、private 修飾詞

雖然我們已經將這些判斷邏輯寫進class裡面了，但是開發者依舊可以直接用點屬性 (.)的方法取得這些屬性並賦予值，因此我們可以設定public、protected、private 修飾詞，讓開發者無法去直接調用參數這就是封裝的第二個概念。



| 修飾符       | 內部Class | 同個package | 不同包的Class | 相同專案 |
| --------- | ------- | --------- | --------- | ---- |
| private   | Yes     |           |           |      |
| (沒寫)      | Yes     | Yes       |           |      |
| protected | Yes     | Yes       | Yes       |      |
| public    | Yes     | Yes       | Yes       | Yes  |

而各個修飾符所賦予的權限就如表所示，但通常通常通常...大家在定義Class時，會將參數給private，而功能 (function) 會 public。



## setXxx()  和 getXxx()

由於我們已經將參數給私有化 (private)，因此開發時是永遠調用不到此屬性，因此我們可以藉由功能 (function)去調用他，而國際認證標準命名方式通常是使用setXxx() 和 getXxx()去實現對此參數的調用，藉由set function，將屬性附值，藉由get function 取得屬性的值。



如此這般的好處 : 

- 我們可以隱藏一個Class不需要對外提供實現細節

- 開發者只能通過制定好的功能(set、get) 去訪問屬性參數，可以更方便加入邏輯控制，防止開發者對屬性的不合理操作

- 如有更動，只需對Class進行修改，即可對全部new出來的物件進行維護



## 結論

- 為啥麼我們需要封裝的概念?
  
  - 如同我們看電視，我們只要按下開關，而不用去知道他的內部構造是如何組裝

- 程式設計追求 高內聚、低耦合
  
  -  高內聚 : Class 的內部屬性 (property) 操作細節自己完成，不允許外部干擾
  
  -  低耦合 : 只提供最少量的功能 (function) 提供外部使用

- 提高擴展性、維護性
  
  -  隱藏內部的複雜性，只對外提供簡單的功能 (function)調用

        

總而言之，<font color=red>封裝的設計思想</font>就是





 <div style="color:red;font-size: 40px;text-align: center;">把該隱藏的隱藏起來，該暴露的暴露出來 </div>


