---
title: 1-1：就決定是你了，物件皮卡丘
date: 2020-02-23 11:26:19
author: twelvefish
img: /images/program/pokemon/01/00.jpg
top: false
cover: false
toc: true
mathjax: false
summary: 物件導向(Object Oriented Programming)簡稱OOP，是指程式設計的過程中，使用物件的方式，進行設計，而何謂物件?
categories: 成為Pokémon大師之路
tags:
    - java
    - OOP
---

> **《每日一句》**To program without reflecting is like eating without digesting.
> 
> 寫程式而不思考，等於吃飯而不消化

![](/images/program/pokemon/01/00.jpg)

## 何謂物件導向(OOP)

物件導向(Object Oriented Programming)簡稱OOP，是指程式設計的過程中，使用物件的方式，進行設計，而何謂物件?物件就是...，這樣介紹物件導向太...，讓我們換個說法。

現在我們要做一個Pokémon遊戲，那麼舉凡其中的寶可夢、神奇寶貝球、招式機...等等都算是一種元素，也是一個個的物體，而物件導向就是指我們程式設計的方式都是用這些物體去進行設計，使他們彼此互相關聯，產生愛恨情仇的糾葛XD。

## 物件(Object)

現在我們想要一隻皮卡丘，那麼這隻皮卡丘就是我們的物件，而現在我們想要一隻小火龍，那麼這隻小火龍也是我們的物件，物件可以算是一種帶有多種屬性、多種功能的物體，以皮卡丘舉例，每隻皮卡丘的三圍都不同，它們的屬性HP、攻擊、防禦、特功...等數值都會因為不同隻皮卡丘而有所不同，而每隻皮卡丘所學會的招式也不相同，這反映在物件的功能上，畢竟真正的皮神只有一個。

所以拉回來，何謂物件，物件算是一種物體，在程式設計中我們稱為物件或是也有人稱為<font color=red>實例(instance)</font>，而這些實例，都會擁有自己專屬的<font color=red>屬性（properties）</font>或<font color=red>功能（functions)</font>。

## 類別(class)

話說回來，我們實作出這麼多隻不同屬性、不同IV值、會不同招式的皮卡丘，但是每隻實作時都要記得它需要哪些屬性欄位或是功能，是否太不方便了呢?如果這時有個設計稿，能讓我們依循設計稿實作，一來可以統一定義皮卡丘這個物件，二來也能告訴別人皮卡丘物件就是長安內啦~

這就是類別class，用來形成物件object的設計稿。

## 建立皮卡丘類別，和產生物件

建立 Pikachu class，可依照需求自由設計出相對應的屬性和功能。

關鍵字 : class + 類別名稱

```java
**
 * 建立皮卡丘類別
 * @Description
 * @author twelvefish
 * @date 2020年2月23日上午11:16:05
 */
public class Pikachu {
	public String name = "皮卡丘";	// 名稱
	public String Abilities;		// 能力
	public String types = "電系";	// 屬性
	public int HP;					// 血量
	public int attack;				// 攻擊力
	public int defense;				// 防禦力
	public int spAtk;				// 特攻
	public int spDef;				// 特防
	public double speed;			// 速度
	public String move;				// 招式
	
	// 使出攻擊招式
	public void attackMove() {
		System.out.println(name + " 使出 " + move);

	}	
}
```

產生物件，可建立出不同的皮卡丘物件，使出不同招式。

關鍵字 :  new 類別名稱()

```java
public class PikachuTest {
    @Test

	public void test() {
		Pikachu pikachuA = new Pikachu();	// 產生物件A
		pikachuA.name = "皮卡丘A";			// 替物件A命名
		pikachuA.move = "電光一閃";			// 物件A會使用的招式
		pikachuA.attackMove();
		System.out.println("==========");
		Pikachu pikachuB = new Pikachu();	// 產生物件B
		pikachuB.name = "皮卡丘B";
		pikachuB.move = "十萬伏特";
		pikachuB.attackMove();
	}
}
```
![](/images/program/pokemon/01/01.png)
---

這一章節，我們介紹了物件和類別的知識，並且建立了皮卡丘class和物件，下一章節將介紹物件導向的三大特徵之一封裝…
如果你喜歡我的創作，請大力地給我拍拍手 🐊 🐊 🐊
