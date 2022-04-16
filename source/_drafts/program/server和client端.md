# server端 和 Client端

## Client端

Client 端表示模擬使用者要連線到Server所需的操作。

1、輸入網址(url)連到 Server端

2、建立HttpClient 連線

3、由於怕server端遲遲沒有返回連線資訊，因此我們在這邊設置setSoTimeout(2000)，代表當連線超過2ms時，Client端會自動斷開連結、斷開鎖鏈

4、接著就開始進行連線動作，用try catch 包住，可以將Server端傳回的 Exception 進行例外處理

5、我們在這邊連線開始時和結束時，有進行System.currentTimeMillis()，相減之後就能知道此次連線所花費時長

6、catch 住 SocketTimeoutException，可以收到連線延遲的例外

```java
// Client端
@Test
public void Client() throws Exception {
    
    String url = "http://localhost:8000/";

	HttpClient httpclient = new HttpClient();
	httpclient.getHttpConnectionManager().getParams().setSoTimeout(2000);
	GetMethod method = new GetMethod(url);

	try {
		long startTime = System.currentTimeMillis(); // 獲取開始時間
		int statusCode = httpclient.executeMethod(method);

		if (statusCode == HttpStatus.SC_OK) {
			System.out.println("SUCCESS");
		} else {
			System.out.println("ERR");
		}
		long endTime = System.currentTimeMillis(); // 獲取結束時間
		System.out.println("程式執行時間：" + (endTime - startTime) + "ms");

	} catch (HttpException e) {
		System.err.println("Fatal protocol violation: " + e.getMessage());
	} catch (SocketTimeoutException e) {
		System.out.println("延遲了  " + e);
		e.printStackTrace();

	} finally {
		// Release the connection.
		method.releaseConnection();
	}
}
```

## Server端

Server 端表示在本機環境開啟伺服器供Client進行連線

1、選擇要開啟的port號，常用得有8080和4200，當然8081...隨便用，只要目前電腦此port沒有被其他Server占用

2、Server端是持續運行的，會有不同Client 端使用者進來

3、我們可以拋出一個網頁畫面Clinet端做反應



```JAVA
// server端
        public class ServerTest {
            final static String CRLF = "\r\n";

            public static void main(String[] args) throws Exception  {
                int port = 8000;
                ServerSocket serverSocket = new ServerSocket(port);
                System.err.println("啟動服務，綁定端口： " + port);

                while (true) {

                    Socket clientSocket = serverSocket.accept();
                    System.err.println("有客戶端進來了");

                    BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
                    PrintWriter out = new PrintWriter(new BufferedWriter( new OutputStreamWriter(clientSocket.getOutputStream())),true);
                    
                    String data = "";
                    String s;
                    while ((s = in.readLine()) != null) {
                        s += CRLF;  // 很重要，默认情况下\r\n被去掉了
                        data = data + s;
                        if (s.equals(CRLF)){ 
                            break;
                        }
                    }
                    System.out.println(data);

                    try{
                        Thread.sleep(65000);
                    }catch (InterruptedException e){

                    }

                    System.err.println("響應");
            
                    out.write("HTTP/1.0 200 OK\r\n");
                    out.write("Server: Apache/0.8.4\r\n");
                    out.write("Content-Type: text/html\r\n");
                    out.write("\r\n");
                    out.write("<TITLE>Exemple</TITLE>");
                    out.write("<h1>Hello World</h1>");
                    out.flush();
                    
                    System.err.println("結束");
                    out.close();
                    in.close();
                    clientSocket.close();
                }
    }
```
