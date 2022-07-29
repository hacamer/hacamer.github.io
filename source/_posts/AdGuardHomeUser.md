---
swiper_index: 3
cover: 'https://adguard.com/img/products/home/home.png'
title: AdGuardHome使用方法
author: Hacamer
tags:
  - AdGuardHome
categories: []
abbrlink: 807
date: 2021-06-07 13:51:00
---
# AdGuardHome使用方法

推荐配置

# 常规设置

![](https://hacamer.coding.net/p/lite/d/text/git/raw/master/jichushezhi.jpeg)  
简单介绍下功能

过滤器更新间隔：DNS 过滤清单默认更新间隔，一般为1小时~24小时

使用 AdGuard “浏览安全” 网页服务：作用与 Chrome 网页安全性检查类似，开启后，当用户访问存在潜在威胁的网站时，AdGuard 会主动拦截并弹出提示，（不建议启用，会拖慢网速）

使用 AdGuard “家长控制” 服务：如果家中有尚未成年的孩子，建议开启，避免访问不良网站，（不建议启用，会拖慢网速）

强制安全搜索：隐藏 Bing、Google、Yandex、YouTube 网站上 NSFW 等不适宜的内容，（不建议启用，会拖慢网速）

查询记录保留时间：AdGuard Home 服务端采用 Sqlite 文件数据库存储日志，长时间保留可能会降低运行速度，同时占用大量的储存空间，~家庭用户一般保留 24 小时 - 7 天即可~(不建议保留,日志多了，会使AdGuardHome崩溃！)

统计数据保留时间：用于仪表盘的数据展示，一般保留 24 小时 - 7 天即可，(~除非你像本人一样有强迫症~)




# DNS设置(Important!)
### 推荐使用并行请求
使用以下DNS
```https
https://a.passcloud.xyz/cdn
https://a.passcloud.xyz/dns-query
tls://c.passcloud.xyz
https://public.dns.iij.jp/dns-query
https://i.233py.com/dns-query
```

# 规则设置
![image.png](https://dd-static.jd.com/ddimg/jfs/t1/114633/13/23148/116689/62369669E40a284e6/30f427a038f059a0.png)

## 规则
**AdRules DNS List**
```https
https://adrules.top/dns.txt
```
**FastHosts List**
```https
https://raw.iqiq.io/hacamer/filtering/master/hosts
```
**1hosts (Lite)**
```
https://ghproxy.futils.com/https://github.com/badmojr/1Hosts/blob/master/Lite/adblock.txt
```
额外的规则  
**OISD Blocklist Full**
```https
https://raw.iqiq.io/ookangzheng/dbl-oisd-nl/master/abp.txt
```
**Notrack-blocklist**
```https
https://gitlab.com/quidsup/notrack-blocklists/-/raw/master/trackers.list
```
### 其他待补充
