---
title: AdGuard使用教程
date: 2021-10-13 19:59:21
tags: 
   - AdGuard
   - 教程
---
AdGuard 使用教程

{% folding , 前言 %}
本文介绍AdGuard的使用，规则和设置只适用Windows，Mac与安卓端。

AdGuard是一款非常不错的软件，建议有能力可以入正支持

{% endfolding %}

# 一、设置-常规
自行设置，我个人使用设置如下

1.主题-系统默认

2.其它-打开AdGuard自启动（AdGuard随系统启动）

3.其它-更新-打开自动更新过滤器（更新时间为60分钟，即1小时），更新通道为稳定版

4.其它-通知设置-全部打开（手机端）

# 二、设置-内容拦截
自行设置，我个人使用设置如下

1.打开高品质过滤方式（手机端）

2.打开拦截所有应用内的广告（手机端）

3.过滤器设置（全平台）

自定义过滤器：见AdGuard规则篇

不建议添加太多自定义过滤器，一是会导致网页等打开速度变慢，二是可能误杀严重，使用体验变差。

若使用本人的规则，请关闭其他规则！避免规则重复！

# 三、设置-DNS
## 选择DNS服务器-添加自定义DNS服务器

复制下段内容添加，DNS服务器名为‘无污染‘’
```
https://i.passcloud.xyz/dns-query
https://a.passcloud.xyz/dns-query
tls://c.passcloud.xyz
https://public.dns.iij.jp/dns-query
```

## 启用dns过滤，订阅Dnsfilter规则
```
https://cats-team.coding.net/p/adguard/d/AdRules/git/raw/main/dns.txt
```


# 四、设置-隐身模式

## 启动所有选项（销毁第一方Cookie除外）

## 部分内容填写：

销毁第三方Cookie 设为0


隐藏UA（仅电脑端）：
```
Mozilla/5.0 (Macintosh; Intel Mac OS X 11_7_0) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/97.0.963.56 Safari/535.11
```

# 五、扩展

## 不推荐在AdGuard安装扩展

# 六、设置完成

## 尽情享受无广告的时光吧😊😘

# 七、部分关于AdGuard问题

## AdGuard常见问题Q&A：https://www.adgk.net/archives/112



