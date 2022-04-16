---
title: JAVA筆記
date: 2020-02-24 20:37:12
author: twelvefish
summary: 學習筆記
categories: 筆記
comments: false  # 評論關閉
tags:
    - note
    - JAVA
---
## 前言

## 第一階段_基本語法
## 第二階段_物件導向 #174

## 第四階段_執行緒 (thread) #415

主要學習思路
有幾種方式來創建多線程 => 四種
有幾種方式解決線程安全問題 => 三種

### program、process、thread 的基本概念

- 程序(program) : 完成特定任務，用某種語言編寫的指令集合。<span style="color:red">即指一段靜態的代碼</span>，靜態對象

- 進程(process) : 指程序的一次執行過程，或是<span style="color:red">正在運行的一个程序</span>。他有屬於自身的產生、存在和消亡的過程 => <span style="color:red">生命周期</span>

    - <span style="color:red">program是静態的，process是動態的</span>

- 線程(thread) : process可進一步细分為thread，是指一个program内部的一條執行路徑

    - 若一個process同一時間並行執行多個thread，就是支持多thread的

    - 每個thread 擁有獨立的運行棧和程序計數器(pc)

    - 一個process中的多個thread共享相同的内存單元、内存地址空間。但多個thread操作共享的系统資源可能會<span style="color:red">帶來安全的隱患</span>

    - <span style="color:red">一個 Java 應用程序 java.exe，至少有三個thread</span>，main()主thread、gc()垃圾回收thread、異常處理thread，如果其餘thread發生異常，會影響主thread

- 並行與並發

    - 並行：多個CPU同时執行多個任务。例如：多個人同时做不同的事

    - 並發： 一個CPU(採用時間片)同時執行多個任务。例如：搶票、多個人同时做一件事

- 使用多thread的優點

    - 提高應用程序的響應，對圖形化界面更有意義，可增强用戶體驗

    - 提高計算機器統 CPU 的利用率

    - 改善程序結構，將複雜的 process 分為多個 thread，獨立運行，利於理解和修改

- 何時需要多thread

    - program 需要同時執行兩個或多個任務

    - 程序需要實現一些需要等待的任務時，如用戶輸入、文件讀寫操作、網路操作、搜索等

    - 需要後台運行 program 時

### thread 的創建和使用

- Java 語言的 JVM 允許程序運行多个 thread，它通過 java.lang.Thread　類来實現

- Thread 類的特性

    - 每個 thread 都是通過某個特定 Thread 的 run() 方法來完成操作的，經常把 run() 方法的主體稱為線程體

    - 通過該 Thread 對象的 start() 方法 来啟動這個線程，而非直接調用 run()

- API 中創建 thread 的兩種方式

    - <span style="color:red">方式一：繼承於 Thread 類</span>

        1、創建一個繼承於 Thread 類的子類

        2、重寫Thread類的run() --> 將此線程執行的操作聲明在run()中

        3、創建Thread類的子類的對象

        4、通過此對象調用start()

```java
/**
 * 多線程的創建，方式一：繼承於 Thread 類
 * 1、創建一個繼承於 Thread 類的子類
 * 2、重寫Thread類的run() --> 將此線程執行的操作聲明在run()中
 * 3、創建Thread類的子類的對象
 * 4、通過此對象調用start()
 * <p>
 * 例子：遍例100以内的所有的偶数
 *
 * @create 2020-03-09 下午 08:33
 */

//1、創建一個繼承於 Thread 類的子類
class MyThread extends Thread {
    //2、重寫Thread類的run()
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            if (i % 2 == 0) {
                System.out.println(Thread.currentThread().getName() + " : " + i);
            }
        }
    }
}

public class ThreadTest {
    public static void main(String[] args) {
//      3、創建Thread類的子類的對象
        MyThread myThread = new MyThread();
//      4、通過此對象調用start()
        myThread.start();

        //以下操作仍然是在main線程中執行的
        for (int i = 0; i < 100; i++) {
            if (i % 2 == 0) {
                System.out.println(Thread.currentThread().getName() + ":" + i);
            }
        }
    }
}
```

- 注意點：

    1、如果自己手動調用 run() 方法，那麼就只是普通方法，沒有啟動多 thread 模式

    2、run 方法由 JVM 調用，什麼時候調用，執行的過程控制都有操作系统的 CPU 調度決定

    3、想要啟動多thread，必須調用 start 方法
4.
一 个线程对象只能调用一次 start() 方法启动，如果重复调用了，则将抛出以上
的异常“ IllegalThreadStateException

    ![](/images/note/java/thread01.PNG)