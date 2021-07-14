swiper_index: 3
cover: 'https://adguard.com/img/products/home/home.png'
title: AdGuardHome使用方法
author: Hacamer
tags:
  - AdGuardHome
categories: []
date: 2021-06-07 13:51:00
---
{% folding , 前言 %}
看了看酷安里的很多教程，有部分都不完整
所以，我写这篇算比较完整的，如有疑问请在评论回复

AdGuardHome改密码教程：[🔗链接](https://www.coolapk.com/feed/27158171?shareKey=ZjkyM2RlMDgzYjExNjBiMWE2ZTM~&shareUid=4065587&shareFrom=com.coolapk.market_11.2.2)

任何平台：Android(已root或magisk)  Windows  路由器(openwrt等)
一些酷安教程：
[🔗查看链接](https://www.coolapk.com/feed/20748381?shareKey=ZTE1MDI0NmFjNTlmNjA4Mzk4Yjc~&shareUid=4065587&shareFrom=com.coolapk.market_11.1.5-beta3)
[🔗查看链接](https://www.coolapk.com/feed/20243472?shareKey=YzEwMDBlNTQzOWVmNjA4MzliNzE~&shareUid=4065587&shareFrom=com.coolapk.market_11.1.5-beta3)
[🔗查看链接](https://www.adgk.net/archives/20)

还有一篇比较全的：[🔗查看链接](https://www.coolapk.com/feed/22322257?shareKey=ZTg2OGZhOTlkMDU1NjBiMWE4Njc~&shareUid=4065587&shareFrom=com.coolapk.market_11.2.2)
{% endfolding %}

本文以Android(magisk模块)为例子
{% folding , 环境前提 %}
需要：
magisk20.4+
arm64
灵活的大脑😜
magisk模块：
@Hacamer 的模块：
[链接](https://www.coolapk.com/feed/26525782?shareKey=OTdhM2IzNzMxNjM5NjA4MzliYzk~&shareUid=4065587&shareFrom=com.coolapk.market_11.1.5-beta3)
或者其他的也行)
@top大佬 的模块（~模块更新频繁，适合多个方面~）：[链接](https://www.coolapk.com/feed/27076098?shareKey=MjIzZGQwMjE0YTIxNjBiMWEyZDQ~&shareUid=4065587&shareFrom=com.coolapk.market_11.2.2)
@爱痴子 的模块（支持实时控制）：[链接](https://www.coolapk.com/feed/26590868?shareKey=ZmUwMWJlNDVhMWExNjBiMWEyZDQ~&shareUid=4065587&shareFrom=com.coolapk.market_11.2.2)


刷入即可

![](https://cdn.jsdelivr.net/gh/hacamer/IMG@main/adgh/1626221997000.jpg)
{% endfolding %}

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
![](https://hacamer.coding.net/p/lite/d/text/git/raw/master/dns.png)
### 推荐使用并行请求
使用以下DNS
```dns
https://doh.pub/dns-query
https://dns.alidns.com/dns-query
```




# 规则设置（自行适当增减）
![规则](https://cdn.jsdelivr.net/gh/hacamer/IMG@main/adgh/1626223266000.jpg)
![白名单](https://cdn.jsdelivr.net/gh/hacamer/IMG@main/adgh/1626223223000.jpg)


{% folding , 广告规则 %}

http://file.trli.club/dns/ad-hosts.txt (搭配白名单使用)

http://file.trli.club/dns/whitelist.txt  (白名单,放进允许清单)

http://file.trli.club/dns/ad-adblock.txt  (与 http://file.trli.club/dns/ad-hosts.txt 任一即可,但都要搭配白名单)

~上面这些规则以一抵十233~

~https://hacamer.coding.net/p/lite/d/AdBlock-Rules-Mirror/git/raw/master/AdGuard-Simplified-Domain-Names-Filter.txt~

~https://raw.fastgit.org/privacy-protection-tools/anti-AD/master/anti-ad-adguard.txt~

~https://cdn.jsdelivr.net/gh/o0HalfLife0o/list@master/ad-pc.txt~

~https://banbendalao.coding.net/p/adgk/d/ADgk/git/raw/master/ADgk.txt~

~https://raw.fastgit.org/AdAway/adaway.github.io/master/hosts.txt~

~https://hacamer.coding.net/p/adgurd/d/adrules/git/raw/master/rules-admin.txt~
{% endfolding %}


### 其他待补充

