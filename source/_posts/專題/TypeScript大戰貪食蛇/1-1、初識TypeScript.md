---
title: 1-1、初識TypeScript
date: 2021-01-02 22:35:33
author: twelvefish
img:
top: false # 推薦文章至頂
cover: false # 文章加到首頁輪播
# coverImg: /images/1.jpg
# password: 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
toc: true # 文章內部目錄
mathjax: false
summary: 學習TypeScript和JavaScript的差異及型別                                                         
categories: TypeScript大戰貪食蛇
tags:
  - TypeScript
---
> **《每日一句》**Dreams without execution are nothing.
> 
> 夢想不付出行動，等於白扯。

此系列文章介紹如何使用TypeScript撰寫自動化貪食蛇小遊戲        

本系列前半部參考影片[尚硅谷TypeScript快速上手](https://www.youtube.com/playlist?list=PLmOn9nNkQxJGwOhSsQ5H9JTPmiXGmy8Zw)，後半部則是筆者將貪食蛇遊戲更進一步改為自動覓食版本

## TypeScript 介紹

- TypeScript(TS) 為強型別的 javaScript(JS)，<font color=red>主要增加類型class的概念</font>
- 瀏覽器只看得懂JS，因此撰寫完TS還是必須通過編譯成JS，才能執行
- 任何的JS語法都可在TS使用
- 由於TS有類別型態，因此可以在編譯前完成程式的語法檢查，減少JS出錯的機率
- TS可以編譯成任何版本的JS，解決不同JS環境的兼容問題
- 由於TS有類別型態，相較於JS的程式碼在後期更加容易維護
- 可藉由config配置檔，對於TS的語法嚴格性進行控制

## TypeScript 開發環境

- 安裝Node.js是為了去使用TypeScript的編譯器typeScript
- 官網下載 [Node.js](https://nodejs.org/en/)，下載左邊當前LTS穩定版本，至於右邊則是最新、但有可能有bug的版本
![](/images/technology/snake/01_nodejs.PNG)
- 安裝 Node.js，一直下一步...
- 打開cmd，<font color=red>輸入node -v 指令確認安裝成功</font>，如果先前已安裝過，可自由選擇是否升級到最新穩定版本
PS. 由於網上找到的升級nodejs版本屢試不成，筆者建議直接將當初安裝的nodejs資料夾直接刪除，重新安裝，當然要記得將之前安裝在全域的package.json套件記錄下來，重新安裝
![](/images/technology/snake/02_version.PNG)
- npm 是 Node.js 裡面package管理器，使用npm可以去安裝node下面各種套件
- 而要安裝TypeScript的編譯器，打開cmd，輸入 <font color=red>npm install -g typescript</font>，沒有錯誤訊息即正確安裝
npm        : 使用npm套件指令開頭
install    : 安裝，可用i簡寫，npm i
g         : 使用全域安裝，沒添加的話就是在當前專案安裝
typescript : 想安裝的套件名稱
![](/images/technology/snake/03_typescript正確安裝.PNG)
- 在cmd中輸入 <font color=red>tsc</font>，確認TypeScript編譯器安裝成功，如下圖出現tsc相關指令
![](/images/technology/snake/04_tsc.PNG)
- 創建一個副檔名為.ts的文件，輸入console.log("hello");
PS: JS語法能完全相容於TS文件
![](/images/technology/snake/05_hello.PNG)
- 瀏覽器只能解析js文件，因此將ts進行編譯，在相對應的資料夾目錄打開cmd，<font color=red>輸入tsc xxx.ts</font>
![](/images/technology/snake/06_complier.PNG)
- 在相同路徑下，產生相同檔名的 xxx.js，即編譯成功
![](/images/technology/snake/07_newJS.PNG)

## TypeScript 語法說明
- 在變數後面增加宣告型別，可讓編譯器自動檢測出型別正確與否
![](/images/technology/snake/08_errorType.PNG)
- 同時對變數宣告和賦值，則TS可以自動對變數進行類型檢測，所以有時可以省略掉類型宣告
![](/images/technology/snake/09_errorType1.PNG)
- 可對function的傳入參數和輸出參數給與型別
```typescript
function sum(a: number, b: number): number{
    return a + b;
}
//語法
let 變數: 型別;
let 變數: 型別 = 值;
function fn(參數: 型別, 參數: 型別): 傳回型別{
    ...
}
type myType = {
    name: string,
    age: number
}
```

## TypeScript 類別型態

|  型別   |       例子        |              描述              |
| :-----: | :---------------: | :----------------------------: |
| number  |    1, -33, 2.5    |            任意數字            |
| string  | 'hi', "hi", \`hi\`  |           任意字串             |
| boolean |    true、false    |       布林值true或false        |
|  常數   |      其本身       |         限制變數的值           |
|   any   |         *         |            任意型別            |
| unknown |         *         |         型別安全的any          |
|  void   | 空值（undefined） |     沒有值（或undefined）      |
|  never  |      沒有值       |          不能是任何值          |
| object  |  {name:'豬八戒'}  |          任意的JS物件          |
|  array  |      [1,2,3]      |           任意JS陣列           |
|  tuple  |       [4,5]       |       TS新增類型，固定長度陣列 |
|  enum   |    enum{A, B}     |       枚舉，TS中新增型別       |

- 常數
    - 可以藉由數值去決定變數的類型
```typescript
let a: 10;
// b被宣告只能給與male或是female的值，給於其他值會出錯，| or的意思
let b: "male" | "female";
b = "male";
b = "female";
// c被宣告為可以賦予boolean型別或是string型別
let c: boolean | string;
c = true;
c = 'hello';
```
- any
    - 為任意型別，當變數設置型別為any或是未設置型別，代表此變數關閉了TS類型檢測
```typescript
// 不建議使用any型別
let d;
d = 10;
d = 'hello';
d = true;
```

- unknown
    - 表示未知型別的值，不能直接赋值给其他變數，可藉由判斷式將值賦予其餘變數
```typescript
let e: unknown;
let s:string;
e = 10;
e = "hello";
// s = e; 未判斷型別時會出錯
// 判斷e為string型別時，才將e賦值給s
if(typeof e === "string"){
    s = e;
}
// 類型斷言，可以用來告訴解析器變數的實際型別
s = e as string;
s = <string>e;
```

- void
    - 用來表示空值，以function為例，表示回傳值為null或undefined
```typescript
function fn(): void{
}
```

- never
    - 表示永遠不會有回傳值，使用時機為exception拋出例外
```typescript
function fn2(): never{
    throw new Error('拋出例外！');
}
```

- object
    - 表示為任意JS物件
```typescript
// 通常不會直接給予object型別，因為在JS中萬物皆物件
let a: object;
a = {};
a = function () {
};
// 可以使用{}來指定物件必須包含哪些屬性，此案例表示必須要有name變數且string型別
let b: {name: string};
b = {name: '孫悟空'};
// 使用?表示此屬性是可選的
let b1: {age?: number};
b1 = {age: 18};
// [propName: string]: any，表示後面可填入任意個數、任意型別的參數
// propName 純粹一個變數名稱，可替換為其他字串
let c: {name: string, [propName: string]: any};
c = {name: '豬八戒', age: 18, gender: '男'};
// 設置function的類別宣告：
// 語法：(變數:型別, 變數:型別 ...) => 回傳值
let d: (a: number ,b: number)=>number;
d = function (n1: number, n2: number): number{
    return 10;
}
```
- array陣列
    - 有兩種宣告方式，型別[]、Array<型別>
```typescript
let e: string[];
e = ['a', 'b', 'c'];
let g: Array<number>;
g = [1, 2, 3];
```

- tuple
    - 固定長度的陣列，此例就只能有兩個數值且第一個必須為string，另一個為number
```typescript
let h: [string, number];
h = ['hello', 123];
```

- enum
    - 枚舉，管理多個同系列的常數
```typescript
enum Gender{
    Male,
    Female
}
let i: {name: string, gender: Gender};
i = {
    name: '孫悟空',
    gender: Gender.Male
}
```
- 別名
    - 可以將類型另外取別名，讓多個變數共用類型，type XXX = 類別
```typescript
// 假設一種類型為 1 | 2 | 3 | 4 | 5
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;
k = 2;
```