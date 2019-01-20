# BaiduPCS-Go 百度网盘客户端 WEB UI

这个是 project 只提供 UI 部分， 核心代码在 https://github.com/iikira/BaiduPCS-Go

## 截图

![image](docs/Capture.JPG)

## 前言

本人自用的 UI，只提供简单的链接。可以放在远程服务器里面快速实现离线下载。

## 配置

配置你的登录密码 docker compose

修改docker-compose.yml 里面的password 默认为`YourPassword`

## Option1 安装(docker compose)

安装教程 https://docs.docker.com/compose/install/

```bash
sudo docker-compose up -d
```

## Option2 安装(npm)
安装包下载 https://nodejs.org/en/download/
``` bash
cd frontend
npm i
npm start &

cd ../backend
npm i
PASSWORD=YourPassword npm run serve
```

## 登录 非常重要

使用浏览器打开 http://localhost

在输入框里面输入以下内容，点击 run

``` bash
login -bduss=YOURBUDSS
```
教程 https://github.com/iikira/BaiduPCS-Go/wiki/%E5%85%B3%E4%BA%8E-%E8%8E%B7%E5%8F%96%E7%99%BE%E5%BA%A6-BDUSS

ls
得到目录内所有文件

## 下载

点击文件就可以在后台下载

文件下载完成后会在`/downloads` 找到， 如果使用docker

如果不使用docker可能会在`/用户名/Downloads`


## 核心代码更新

在这里下载 最新版本的`linux-amd64.zip`(docker环境下)并解压到根目录

https://github.com/iikira/BaiduPCS-Go/releases

记得运行 chmod u+x ./BaiduPCS-Go (如果不用docker)


## 如有问题或者需要什么新功能可以发issue
