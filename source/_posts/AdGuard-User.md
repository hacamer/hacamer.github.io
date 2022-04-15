---
title: AdGuard使用教程
date: 2021-10-13 19:59:21
tags: 
   - AdGuard
   - 教程
---

<h2 align="center"><strong>AdGuard 使用教程</strong></h2>
<br>

> 本文介绍AdGuard的使用，规则和设置只适用Windows，Mac与安卓端。
> AdGuard是一款非常不错的软件，建议有能力可以入正支持

# 一、设置-常规

自行设置，我个人使用设置如下

1.主题-系统默认

2.其它-打开AdGuard自启动（AdGuard随系统启动）

3.其它-更新-打开自动更新过滤器（更新时间为60分钟，即1小时），更新通道为稳定版

4.其它-通知设置-全部打开（手机端）

5.高级设置-重定向驱动模式（电脑端，win）

# 二、设置-内容拦截

自行设置，我个人使用设置如下

1.打开高品质过滤方式（手机端）

2.打开拦截所有应用内的广告（手机端）

<img style="max-width:100%;overflow:hidden;" src="https://dd-static.jd.com/ddimg/jfs/t1/97756/10/25971/8670/6258d114Edf5437e0/5b41c6f237ef315b.png" alt="image.png" title="image.png" />

3.过滤器设置（全平台）

自定义过滤器：

AdRules (For AdBlock)：

```https
https://cats-team.coding.net/p/adguard/d/AdRules/git/raw/main/adblock.txt
```

AdGuard合并规则：

```https
https://cats-team.coding.net/p/adguard/d/AdRules/git/raw/main/adguard.txt
```

Some-rule(admin):

```https
https://hacamer.coding.net/p/adgurd/d/adrules/git/raw/main/rules-admin.txt
```

Hacamer's URL Filter

```https
https://hacamer.coding.net/p/adgurd/d/adrules/git/raw/main/url-filter.txt
```

<img style="max-width:100%;overflow:hidden;" src="https://dd-static.jd.com/ddimg/jfs/t1/148267/40/27793/52653/6258d4b9Ea8148e59/089c9b2d1a2c9458.png" alt="image.png" title="image.png" />

**不建议添加太多自定义过滤器，一是会导致网页等打开速度变慢，二是可能误杀严重，使用体验变差。**

**若使用本人的规则，可关闭其他规则！避免规则重复！**

**一个问题，如果你的AdGuard拦截的跟踪器为0，请开启“AdGuard防跟踪过滤器”**

**一些额外可开启的过滤器**

隐私

- AdGuard防跟踪过滤器

烦人

- Fanboy 's Annoyances
- Web Annoyances Ultralist

安全

- 在线恶意URL拦截列表
- NoCoin过滤列表

## 关于用户过滤器

如遇到无法屏蔽的广告，可以自己写规则并添加到用户过滤器
![安卓](https://cdn.jsdelivr.net/gh/hacamer/IMG@main/MyBlog/1635501606000.png)

点右下角的加号添加

# 三、设置-DNS

**选择DNS服务器-添加自定义DNS服务器**

复制下段内容添加，DNS服务器名为‘无污染‘
Ps：DNS较多，请酌情剔除  
<img style="max-width:100%;overflow:hidden;" src="https://dd-static.jd.com/ddimg/jfs/t1/119498/14/24341/37515/6258d287E3c17f5d1/c54d7d2041a1e2ce.png" alt="image.png" title="image.png" />

```https
https://i.233py.com/dns-query
https://dns.233py.com/dns-query
quic://x.passcloud.xyz:784
quic://c.passcloud.xyz:784
quic://h.iqiq.io:784
```


**启用dns过滤，订阅AdRules （For DNS）规则**

```http
https://cats-team.coding.net/p/adguard/d/AdRules/git/raw/main/dns.txt
```

**如有需要，可订阅Notracking**

```http
https://raw.iqiq.io/notracking/hosts-blocklists/master/adblock/adblock.txt
```

<img style="max-width:100%;overflow:hidden;" src="https://dd-static.jd.com/ddimg/jfs/t1/91654/21/23577/34846/6258d3fbEcbda5354/b96c66a339d59ab9.png" alt="image.png" title="image.png" />

# 四、设置-隐身模式

启动所有选项（销毁第一方Cookie除外）

部分内容填写：

销毁第三方Cookie 设为0

其他设置建议默认

# 五、扩展

**不推荐在AdGuard安装扩展**

# 六、设置完成

**尽情享受无广告的时光吧😊😘**

# 七、部分关于AdGuard问题（由坂本大佬摆写）

AdGuard常见问题Q&A：https://www.adgk.net/archives/112

