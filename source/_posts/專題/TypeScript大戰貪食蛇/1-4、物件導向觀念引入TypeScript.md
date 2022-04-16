---
title: 1-4、物件導向觀念引入TypeScript
date: 2021-01-09 14:21:13
author: twelvefish
img:
top: false # 推薦文章至頂
cover: false # 文章加到首頁輪播
# coverImg: /images/1.jpg
# password: 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
toc: true # 文章內部目錄
mathjax: false
summary: 將物件導向觀念引入TypeScript
categories: TypeScript大戰貪食蛇
tags:
  - TypeScript
---
> **《每日一句》**if you want something done,do it yourself.
> 
> 靠誰都不如靠自己。

此系列文章介紹如何使用TypeScript撰寫自動化貪食蛇小遊戲                                                             

本系列前半部參考影片[尚硅谷TypeScript快速上手](https://www.youtube.com/playlist?list=PLmOn9nNkQxJGwOhSsQ5H9JTPmiXGmy8Zw)，後半部則是筆者將貪食蛇遊戲更進一步改為自動覓食版本

## 物件導向簡介

- 物件導向是程式設計中一個重要思想，簡單而言就是程式中所有的操作都是需要透過物件來完成。
  - 操作瀏覽器要使用window物件
  - 操作網頁要使用document物件
  - 操作控制台要使用console物件

- 所以物件到底是什麽呢？程式的本質就是對現實事物的抽象，現實事物是具體的，而程式是抽象的，現實中的一個人、一條狗、一把槍、一顆子彈等等所有的事物，在抽象的程式中就變成了一個個物件。

- 程式中所有的物件都被分成了兩個部分，數據和功能，以人為例，人的姓名、性別、年齡、身高、體重等屬於數據，人可以說話、走路、吃飯、睡覺這些屬於人的功能。數據在物件中被稱為<font color=red>屬性</font>，而功能就被稱為<font color=red>方法</font>。所以簡而言之，在程式中<font color=red>萬物皆物件</font>。

## class 類

- 在操作物件之前，要先擁有他，要如何擁有它呢? 必須先創建他，要創建物件必須<font color=red>要先定義類(class)</font>
- 類(class)可以理解為物件的模型，根據class創建指定的物件，不同的類可以用來創建不同的物件。
    - 通過Person類來創建人的物件
    - 通過Dog類創建狗的物件
    - 通過Car類來創建汽車的對象
- 物件主要包含了兩個部分：
    - 屬性
    - 方法
- 使用static開頭的屬性是靜態屬性（類屬性），無需創建物件，可以直接通過類去訪問
    - static age: number = 18;
    - Person.age
- 使用readonly開頭的屬性表示為只能讀取的屬性無法修改
    - readonly sex: string = "男";     
    ```typescript
        class Person{
            // readonly name: string = '大帥哥';
            name = '大帥哥';
            // static開頭的屬性是靜態屬性（類屬性），可以直接通過類去訪問
            static readonly age: number = 18;
            // readonly開頭的屬性表示為只能讀取的屬性無法修改
            readonly sex: string = "男";           
            sayHello(){
                console.log('Hello 大家好！');
            }
        }
        const per = new Person();
        console.log(per.name, per.sex);
        console.log(Person.age);
        per.sayHello();
    ```

## constructor 構造器

- 由於一個class不會只創建一個物件，因此可以使用Constructor來創建不同屬性的物件
- new XXX()意味著Constructor 功能被調用
- 創建物件時，可以將參數藉由Constructor傳進去，在方法中可以通過this來表示當前調用方法的物件
    - const p = new Person('大帥哥', 18);
    - const p1 = new Person('大美女', 17);
    ```typescript
    // 構造器會在物件創建時調用
    class 類名 {
    	屬性名: 類別;    	
    	constructor(參數: 類別){
            // 在物件方法中，this就表示當前要新建的物件
            // 可以通過this向新建的物件中添加屬性
    		this.屬姓名 = 參數;
    	}    	
    	方法名(){
    		// 在方法中可以通過this來表示當前調用方法的物件
            console.log(this.屬性名);
    	}    
    }
    ```
    ```typescript
    class Person{
        name: string;
        age: number;
        // 將參數藉由Constructor傳進去，賦予屬性
        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }
        sayHello(){
            console.log(`大家好，我是${this.name}`);
        }
    }
    ```
    ```typescript
    // 創建物件時，在將參數藉由Constructor傳進去
    const p = new Person('大帥哥', 18);
    p.sayHello();
    ```

## extends 繼承

- 通過繼承可以將其他class中的屬性和方法引入到當前class中
- 通過繼承可以在不修改類的情況下完成對類的擴展
- 繼承的關鍵字 extends，class 子類別 extends 父類別
- 重寫
    - 發生繼承時，如果子類中的方法會替換掉父類中的同名方法，這就稱為方法的重寫
- Dog extends Animal
    - 此時，Animal被稱為父類，Dog被稱為子類
    - 使用繼承後，子類將會擁有父類所有的方法和屬性
    - 通過繼承可以將多個類中共有的代碼寫在一個父類中，這樣只需要寫一次即可讓所有的子類都同時擁有父類中的屬性和方法
    - 如果希望在子類中添加一些父類中沒有的屬性或方法直接加就行
    - 如果在子類中添加了和父類相同的方法，則子類方法會覆蓋掉父類的方法，這種子類覆蓋掉父類方法的形式，我們稱為方法重寫
    ```typescript
    // 父類別，將相同的屬性、方法抽出來放在父類別中 
    class Animal{
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        sayHello(){
            console.log('動物在叫~');
        }
    }
    ```
    ```typescript
    // 子類別繼承父類別，屬性、方法皆會被繼承
    class Dog extends Animal{
        // 可以額外增加子類別沒有的方法
        run(){
            console.log(`${this.name}在跑~~~`);
        }
        // 可以重寫父類別的方法
        sayHello() {
            console.log('汪汪汪汪！');
        }
    }
        // 定義一個表示貓的類
        // 使Cat類繼承Animal類
        class Cat extends Animal{
            sayHello() {
                console.log('喵喵喵喵！');
            }
        }
    ```
    ```typescript
    // 調用使用到的類別
    const dog = new Dog('小白', 5);
    const cat = new Cat('咪咪', 3);
    console.log(dog);
    dog.sayHello();
    dog.run();
    console.log(cat);
    cat.sayHello();
    ```

## super 關鍵字

- 在類的方法中 super就表示當前類的父類，可以調用父類別的方法，也可以額外增加方法裡的功能
- 如果在子類中寫了構造器，在子類構造器中必須對父類的構造器進行調用，反之，如果子類別沒寫構造器，則會自動繼承父類別的
```typescript
...略...
constructor(name: string, age: number) {
    // 如果在子類中寫了構造函數，在子類構造函數中必須對父類的構造函數進行調用
    super(name); // 調用父類的構造函數
    this.age = age;
}
sayHello() {
    // 在類的方法中 super就表示當前類的父類
    super.sayHello();
}
...略...
```

## abstract 抽象

- 主要用來禁止一個類被用來創建物件，專門用在被繼承的class上
- 以 abstract開頭的類是抽象類，抽象類和其他類區別不大，只是不能用來創建對象
- 抽象類添加抽象方法，使用 abstract開頭，沒有方法體
- 在抽象類中還有抽象方法，抽象方法只能定義在抽象類中，子類必須對抽象方法進行實現，否則會出錯
```typescript
// 抽象Animal class
abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // 定義一個抽象方法
    // 抽象方法使用 abstract開頭，沒有方法體
    // 抽象方法只能定義在抽象類中，子類必須對抽象方法進行重寫
    abstract sayHello():void;
}
class Dog extends Animal{
    sayHello() {
        console.log('汪汪汪汪！');
    }
}
class Cat extends Animal{
    sayHello() {
        console.log('喵喵喵喵！');
    }
}
```

## interface 接口

- interface 主要是對於class 去定義規範
- interface 用來定義一個類的結構，用來定義一個類中應該包含哪些屬性和方法，同時接口也可以當成類型聲明去使用
    - type 和 interface 都可以拿來當作一個class的類別宣告
    - type XXX 只能寫一次，interface XXX 可以合併多組屬性
    ```typescript
    // 描述一個物件的類型
    type myType = {
        name: string,
        age: number
    };
    interface myInterface {
        name: string;
        age: number;
    };
    interface myInterface {
        gender: string;
    }
    // 調用interface 的class時，必須寫上所有屬性
    const obj: myInterface = {
        name: 'sss',
        age: 111,
        gender: '男'
    };
    ```
- 接口只定義對象的結構，而不考慮實際值
- 在接口中所有的方法都是抽象方法，而接口本身就是抽象類
- 定義類時，可以使類去實現一個接口，實現接口就是使類滿足接口的要求
    - class去實現接口，必須實現接口裡面定義的屬性和方法
    - class 類 implements 接口
    ```typescript
    interface myInter{
        name: string;
        sayHello():void;
    }
    // class去實現接口，必須實現接口裡面定義的屬性和方法
    class MyClass implements myInter{
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHello(){
            console.log('大家好~~');
        }
    }
    ```

## 封裝

- 上述範例，屬性或方法可以任意的被修改，如果可以任意被修改將會導致物件中的參數和方法變得非常不安全
- TS可以在屬性和方法前添加修飾符
    -   public 修飾的屬性可以在任意位置操作，沒寫修飾符 public 為默認值
    -   private 私有屬性，私有屬性只能在類內部進行操作，可以通過在類中添加get、set方法使得私有屬性可以被外部訪問
    -   protected 受包含的屬性，只能在當前類和當前類的子類中操作
- 屬性的存取器
    - getter方法用來讀取屬性
    - setter方法用來設置屬性，利用set來控制傳入的參數是否合理 
```typescript
class Person{
    // private私有參數，外部類無法直接調用此屬性參數
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
    getName(){
        return this._name;
    }    
    // 定義方法，用來設置name屬性
    setName(value: string){
        this._name = value;
    }    
    getAge(){
        return this._age;
    }    
    setAge(value: number){
        // 判斷年齡是否合法
        if(value >= 0){
            this._age = value;
        }
    }
}
// 給name屬性賦值
per.setName('大美女');
console.log(per.getName());
```
- 但其實在TS中有更簡單的方法設置get、set
    - 利用get XXX、set XXX，而變數呼叫時只需要<font color=red>物件變數.XXX</font>，系統自動判斷是呼叫get還是set
```typescript
class Person{
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
    // TS中設置getter方法的方式
    get name(){
        console.log('get name()執行了！！');
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    get age(){
        return this._age;
    }
    set age(value){
        if(value >= 0){
            this._age = value
        }
    }
}
const per = new Person('大帥哥', 18);
// per.name 等同於去調用 set name的方法，給name屬性賦值
per.name = '大美女';
// 同理調用 set age的方法
per.age = -33;
// 調用get name方法，去讀取name屬性的值
console.log(per.name);
```
- 可以將屬性定義於構造器中，省去些程式碼
```typescript 
// 這兩個class的例子功能相同
class C{
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class C{
    // 可以將屬性修是符定義於構造器中
    constructor(public name: string, public age: number) {
    }
}
```

- protected 為受包含的屬性，只能在當前類和當前類的子類中操作，否則會報錯
![](/images/technology/snake/22_protected.PNG)

## 泛型

- 在定義函數或是類時，如果遇到類型不明確就可以使用泛型，如果使用any反而會關閉TS的類型檢查
- 泛型可以用大寫英文字母代替，設置泛型後即可在函數中使用此大寫英文字母來表示該類型
```typescript
// 泛型
function fn<T>(a: T): T{
    return a;
}
// 可以直接調用具有泛型的函數
let result = fn(10); // 不指定泛型，TS可以自動對類型進行推斷
let result2 = fn<string>('hello'); // 指定泛型
// 泛型可以同時指定多個參數
function fn2<T, K>(a: T, b: K):T{
    console.log(b);
    return a;
}
fn2<number, string>(123, 'hello');
// 宣告接口
interface  Inter{
    length: number;
}
// T extends Inter 表示泛型T必須是Inter實現類（子類）
function fn3<T extends Inter>(a: T): number{
    return a.length;
}
// 類中同樣可以使用泛型
class MyClass<T>{
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}
const mc = new MyClass<string>('大帥哥');
```