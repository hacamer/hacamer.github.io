# AdGuard 使用方法



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

5.高级设置-重定向驱动模式（电脑端，Windows）

# 二、设置-内容拦截

自行设置，我个人使用设置如下

1.打开高品质过滤方式（手机端）

2.打开拦截所有应用内的广告（手机端）

3.过滤器设置（全平台）

自定义过滤器：

AdRules AdBlock List：

```https
https://adrules.top/adblock.txt
```

AdGuard合并规则：

```https
https://adrules.top/adguard.txt
```

Some-rule(admin):  
**可能激进，慎用！**
```https
https://hacamer.top/AdRule/rules-admin.txt
```

Hacamer's URL Filter

```https
https://hacamer.top/AdRule/url-filter.txt
```


**不建议添加太多自定义过滤器，一是会导致网页等打开速度变慢，二是可能误杀严重，使用体验变差。**

**若使用本人的规则，可关闭其他规则！避免规则重复！**

**一个问题，如果你的AdGuard拦截的跟踪器为0，请开启“AdGuard防跟踪过滤器”**

**一些额外可开启的过滤器**  
![](https://hacamer.top/IMG/MyBlog/adg-mac-add-rules.png)

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
![安卓](https://hacamer.top/IMG/MyBlog/1635501606000.png)

点右下角的加号添加

# 三、设置-DNS

**选择DNS服务器-添加自定义DNS服务器**

如果你**不在乎污染且没有外网需求**建议直接使用`国内DNS`

`国内DNS`
```
tls://dot.pub
https://doh.pub/dns-query
tls://dns.alidns.com
https://dns.alidns.com/dns-query
```

**启用dns过滤，订阅AdRules （For DNS）规则**  
![mac-dns-filter](https://hacamer.top/IMG/MyBlog/adg-mac-dns-filter.png)  
```http
https://adrules.top/dns.txt
```

# 四、设置-隐身模式

启动所有选项（销毁第一方Cookie除外）

部分内容填写：

销毁第三方Cookie 设为0

其他设置建议默认

# 五、扩展

**不推荐在AdGuard安装扩展**
**建议在浏览器内安裝**

关闭AdGuard自动检测用户脚本
Windows：  
设置-扩展-取消勾选“自动检测用户脚本”  
![userscript-windows](https://hacamer.top/IMG/MyBlog/userscript-windows.png)  
Mac：  
高级设置-subscription.link.interception.userscript-调成false   
![userscript-mac](https://hacamer.top/IMG/MyBlog/userscript-mac.png)   
# 六、设置完成 

**尽情享受无广告的时光吧😊😘**

# 七、部分关于AdGuard问题（由坂本大佬摆写）

AdGuard常见问题Q&A：https://www.adgk.net/archives/112

# 备注
如果你搭配了Clash等网络工具使用，请开启过滤本地连接
Windows：
设置-常规-高级设置-过滤本地连接
![localhosts-filtering-windows](https://hacamer.top/IMG/MyBlog/localhosts-filtering-windows.png)  

Mac：
高级设置 - network.filtering.localnetwork 和 network.filtering.localhost 调成true
![localhosts-filtering-mac](https://hacamer.top/IMG/MyBlog/localhosts-filtering-mac.png)


---

> 作者: 杏梢  
> URL: https://hacamer.top/adguard-usage/  

