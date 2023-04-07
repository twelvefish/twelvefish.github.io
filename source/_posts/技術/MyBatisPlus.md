## MyBatisPlus

## 簡介

## 1、引入依賴
![](/img/MyBatisPlus/06.PNG)

## 2、application.yml配置

- spring boot 2.1及以上（内置jdbc8驅動），驅動類使用 driver-class-name: com.mysql.cj.jdbc.Driver
- spring boot 2.0（内置jdbc5驅動），驅動類使用：driver-class-name: com.mysql.jdbc.Driver
- MySQL5.7版本的url : jdbc:mysql://localhost:3306/mybatis_plus?characterEncoding=utf-8&useSSL=false
- MySQL8.0版本的url：jdbc:mysql://localhost:3306/mybatis_plus?serverTimezone=GMT%2B8&characterEncoding=utf-8&useSSL=false
- 於MyBatisPlus中配置log-impl會於日誌中自動產生使用的SQL語法
    - mybatis-plus.configuration.log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
![](/img/MyBatisPlus/07.PNG)

## 3、lombok

- 在bean上面設置@NoArgsConstructor，會自動生成無參構造器
- @AllArgsConstructor，會自動生成有參構造器
- @Getter，會自動生成getter
- @Setter，會自動生成setter
- @EqualsAndHashCode，會自動生成equal和HashCode
- 以上全部可以用一個 @Data替代，但是無有參構造
![](/img/MyBatisPlus/01.PNG)
![](/img/MyBatisPlus/02.PNG)

## 4、BaseMapper

- 掃描mapper接口所在的包，在Spring Boot啟動類中添加@MapperScan("com.twelvefish.MyBatisPlus.mapper")
- 藉由繼承BaseMapper來使用MyBatisPlus所提供的各種方法，而泛型能夠映射資料庫，將對應的表資料結構取出
- BaseMapper是MyBatisPlus提供的模板mapper，其中包含了基本的CRUD方法，泛型為操作的實體類型
- IDEA在 userMapper 報錯，因為找不到注入的對象，因为類是動態創建，但是編譯可以正常執行，但想避免報錯，可以在mapper接口上添加 @Repository 注解
- 下述截圖範例為使用UserMapper去查詢資料庫中的資料，並query全部資料回來，通過條件構造器查詢一個list集合，若沒有條件，則可設置為null
![](/img/MyBatisPlus/03.PNG)
![](/img/MyBatisPlus/04.PNG)
![](/img/MyBatisPlus/05.PNG)

## 5、多表查詢

- 自定義的SQL語句預設放在resources/mapper底下的xml，或是在yml中自定義路徑
![](/img/MyBatisPlus/08.PNG)
- 在繼承BaseMapper的類下增加自定義方法
![](/img/MyBatisPlus/09.PNG)
- 自定義方法可自己撰寫SQL語法，搭配xml的id匹配對應的方法名稱
![](/img/MyBatisPlus/10.PNG)

## 6、Service

- MyBatis-Plus中有一個接口 IService和實現類 ServiceImpl，封裝了常見的業務層邏輯
- UserService繼承IService模板提供的基礎功能
- ServiceImpl實現了IService，提供了IService中基礎功能的實現
- 若ServiceImpl無法滿足業務需求，則可以使用自定的UserService定義方法，並在實現類中實現
![](/img/MyBatisPlus/11.PNG)
![](/img/MyBatisPlus/12.PNG)

## 7、常用註解

- @TableName
   - 在實體類類型上添加@TableName("XXXX")，即可標識實體類對應的資料庫表名稱，預設則為第一字母小寫
   - 或是也可以直接在application.yml進行全域配置table-prefix，針對每張表都進行前缀處理，就可以不用每張表都增加@TableName
- @TableId
   - MyBatisPlus默認將 "id" 作為主鍵，可以使用@TableId此參數，告訴MyBatisPlus此張表的主鍵字串是哪個欄位
   - 但也可以透過@TableId的value屬性，指定表中的主鍵字串，@TableId(value="uid")
   - @TableId(type=IdType.ASSIGN_ID)（默認），基於雪花算法的策略生成數據id，與資料庫id是否設置自增無關
   - @TableId(type=IdType.AUTO)，使用資料庫的自增策略，注意，該類型請確保資料庫設置了id自增，
否則無效
   - 設置統一(每張表)的主鍵生成策略，id-type
- @TableField
   - mybatis會自動將資料庫裏面的欄位字串，如果有底線，當轉換成資料表時，會進行駝峰轉換，ex: 資料庫裡面user_name，轉換成程式裡面的資料表時，可以取名為userName
   - 可利用 @TableField 於程式碼裡面指定所對應的資料庫欄位
- @TableLogic
   - 邏輯刪除，針對某個欄位設定為0、1，在select時，針對這欄位去判斷，來讓資料感覺上被刪除了，但實際上資料還存在
   - 呼叫查詢方法時，會只查詢此欄位為0的資料，呼叫刪除方法時，只會將此欄位從0變成1，不會真的將資料刪除
![](/img/MyBatisPlus/13.PNG)
![](/img/MyBatisPlus/15.PNG)
![](/img/MyBatisPlus/14.PNG)



