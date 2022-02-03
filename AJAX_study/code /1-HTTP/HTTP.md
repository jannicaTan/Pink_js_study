# HTTP
HTTP（hypertext transport protocol）协议『超文本传输协议』，协议详细规定了浏览器和万维网服务器之间互相通信的规则。
约定, 规则

## 请求报文——————浏览器发出内容request
重点是格式与参数
```
行      请求方式---URL---HTTP协议版本
	POST  /s?ie=utf-8  HTTP/1.1 
头      setHeader
        名字: 内容
        Host: atguigu.com
        Cookie: name=guigu
        Content-type: application/x-www-form-urlencoded
        User-Agent: chrome 83
空行
体      send
        GET:请求体可以为空/POST:不为空
        username=admin&password=admin
```

## 响应报文——————客户端返回内容response
```
行      协议版本---相应状态码---响应状态字符串
        HTTP/1.1  200  OK
头      同请求头
        Content-Type: text/html;charset=utf-8
        Content-length: 2048
        Content-encoding: gzip
空行    
体      返回的内容
        <html>
            <head>
            </head>
            <body>
                <h1>尚硅谷</h1>
            </body>
        </html>
```
* 404
* 403
* 401
* 500
* 200

