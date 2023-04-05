## Linux & Shell

## 簡介

Linux & Shell 的學習筆記

- 這門筆記主要以 CentOS 7.9作為學習Linux的版本

## 第1章、入門篇

### Linux介紹、環境安裝

- Linux主要分為下圖版本，但現今主流是以CentOS和Ubuntu較為流行
- 兩者差別為CentOS有更好的執行效能，Ubuntu有較好的圖形化介面
- CentOS主要為RedHat公司將要收費的RedHat Enterprise Linux(RHEL)(企業版)，其中穩定且開源部分的功能，抽出來成CentOS版本
- 目前RedHat公司提供的CentOS 8 只維護到2021年底，而CentOS 7.9預計於2024/6停止維護，後續將以 CentOS Stream取代，不再是穩定更新版本號的發行版本，採用滾動更新，將尚未穩定的功能就釋出，請廣大的鄉民幫忙驗測，因此性能和穩定上受到質疑
- CentOS 下載網址 : https://www.centos.org/download/
- Linux是作業系統，因此學習前，可先模擬出一台虛擬電腦，在此虛擬電腦上安裝Linux，進行學習，模擬虛擬電腦的軟體是 VMware或是 VirtualBox，VMware 相較 VirtualBox 支援較多功能
![](/img/Linux&Shell/01.PNG)

### 創建一台虛擬機

- VMware安裝部分，因為就下一步下一步，在此就不演示了
- 創建一台虛擬機
![](/img/Linux&Shell/02.PNG)
- 自定義客製化，學習細節
![](/img/Linux&Shell/03.PNG)
- 稍後安裝作業系統，學習先裝機器，再裝作業系統
![](/img/Linux&Shell/04.PNG)
- 下圖電腦CPU有6個核心、12線程，可決定要借用多少來安裝虛擬機，但最多只能選12，因為你只有12，下圖選2插槽、3核心、6線程來做為虛擬機配置
![](/img/Linux&Shell/05.PNG)
![](/img/Linux&Shell/06.PNG)
- 網路類型，選擇預設NAT，外部不容易知道虛擬機的IP位置
![](/img/Linux&Shell/07.PNG)
- 最終此次虛擬機配置結果
![](/img/Linux&Shell/08.PNG)
- 配置 CentOS7.9 Linux作業系統
![](/img/Linux&Shell/09.PNG)
- 正常應該配置英文版的，但學習還是使用中文版的舒服
![](/img/Linux&Shell/10.PNG)
- 預設只有cmd介面，第一次學習選擇有桌面的UI環境
![](/img/Linux&Shell/11.PNG)
- 都配置完成後，進行安裝並重啟系統
![](/img/Linux&Shell/12.PNG)
- 輸入root帳密後，進入桌面成功且網路有通
![](/img/Linux&Shell/13.PNG)

## 第2章、基礎篇

### Linux 終端機
- Ctrl + Alt + F1 回到圖形化介面
- Ctrl + Alt + F2~F8 回到終端機介面
![](/img/Linux&Shell/14.PNG)

### Linux 目錄結構

- Linux 底下目錄結構
![](/img/Linux&Shell/15.PNG)
![](/img/Linux&Shell/16.PNG)

### Vim編輯器

- 服務器上通常不會裝桌面環境，所以使用Vim編輯器來進行編輯
- 使用 i 進行插入，:q 進行退出，:w 保存，:wq 進行保存退出，u 可復原操作
- 可分為 一般模式、編輯模式、指令模式
![](/img/Linux&Shell/17.PNG)
![](/img/Linux&Shell/18.PNG)
![](/img/Linux&Shell/19.PNG)
![](/img/Linux&Shell/20.PNG)


### 網路配置

- 當前虛擬機網路位置
![](/img/Linux&Shell/21.PNG)
- 若網路設置使用NAT模式，會新增一張VMnet8網卡，此為 VMware在本機虛擬一張網卡，IP會跟虛擬機中的IP同一網段，用於網路溝通
- VMWare提供的三種網路配置
![](/img/Linux&Shell/22.PNG)
    - 橋接模式 : IP需配置和電腦主機同一網段，可被外網+同網段的其他主機看到，相對來說不安全和IP個數被占用
    - NAT模式  : 經由NAT轉換，虛擬機的IP可於其他網段，但需於本機建立其他張網卡，用於設置主機和NAT的IP網段一致，進行溝通
    - 主機模式 : 會於本機虛擬出一張VMnet網卡，用於和虛擬機內部網路溝通，但此法虛擬機內部無法和外網聯繫
![](/img/Linux&Shell/23.PNG)
- 但目前虛擬機的IP都是使用DHCP動態分配，可能機器重啟後，IP就會被更改，因此調整成靜態IP設定
- 編輯 vim /etc/sysconfig/network-scripts/ifcfg-ens33，修改此文件，將虛擬機設定為靜態IP
![](/img/Linux&Shell/24.PNG)
- 重啟網路後，IP將變更為設定的靜態IP，實際設置為 192.168.200.100，第三碼需配合整個VMWare子網路配置
![](/img/Linux&Shell/25.PNG)
- 可使用hostname指令查詢主機名稱
- 編輯 vim /etc/hostname，修改此文件，可設置虛擬機 主機名，方便記憶和訪問時可不用記憶IP訪問，想要生效必須重啟系統
- hostnamectl指令可看到當前主機相關資訊，可直接使用hostnamectl set-hostname XXX(主機名)，直接讓主機名稱更改生效
![](/img/Linux&Shell/26.PNG)
- 但需要一個專門文件，設置虛擬機集群，虛擬機主機名稱對應IP，讓彼此虛擬機能夠方便互相通信，位置在 vim /etc/hosts
![](/img/Linux&Shell/27.PNG)
- 但windows主機也需要和這些虛擬機通訊，因此修改windows主機的host配置，直接將hostTable貼在後面即可，之後就能在windows主機下，使用ping 虛擬機名稱進行訪問了
![](/img/Linux&Shell/28.PNG)

### 遠程登入y

## 第3章、實操篇
## 第4章、擴展篇