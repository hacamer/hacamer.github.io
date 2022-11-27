# AdGuard 使用方法



<h2 align="center"><strong>AdGuard 使用教程</strong></h2>
<br>

> 本文介绍AdGuard的使用，规则和设置理论上适配全平台
> AdGuard是一款非常不错的软件，建议有能力可以入正支持

## 常规

一般保持默认即可

## 内容拦截

**过滤器设置（适用于全平台）**

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

**一些额外可开启的过滤器**  


>隐私
>
>- AdGuard防跟踪过滤器
>
>烦人
>
>- Fanboy 's Annoyances
>- Web Annoyances Ultralist
>
>安全
>
>- 在线恶意URL拦截列表
>- NoCoin过滤列表

### 关于用户过滤器

如遇到无法屏蔽的广告，可以自己写规则并添加到用户过滤器
>![安卓](https://hacamer.top/IMG/MyBlog/1635501606000.png)

点右下角的加号添加

## 设置DNS

一般默认即可

**启用dns过滤，订阅`AdRules DNS List`**  
![mac-dns-filter](https://hacamer.top/IMG/MyBlog/adg-mac-dns-filter.png)  
```http
https://adrules.top/dns.txt
```

## 隐身模式

启动所有选项

部分内容填写：

`销毁第三方Cookie` 越小越好

其他设置建议默认

## 扩展

**在有条件的情况下**
**不推荐在AdGuard安装扩展**
**建议在浏览器内安裝**

**关闭AdGuard自动检测用户脚本**
>**Windows：**   
>>设置=>扩展=>取消勾选`自动检测用户脚本`  
![userscript-windows](https://hacamer.top/IMG/MyBlog/userscript-windows.png)  

>**Mac：**  
>>高级设置=>`subscription.link.interception.userscript` 调成`false`     
![userscript-mac](https://hacamer.top/IMG/MyBlog/userscript-mac.png)   
## 设置完成 

**尽情享受无广告的时光吧😊😘**

## 部分关于AdGuard问题

AdGuard常见问题Q&A：[Link](https://www.adgk.net/archives/112)

## 备注
**如果你搭配了Clash等网络工具使用，请开启过滤本地连接**
> **Windows：**
>> 设置=>常规=>高级设置=>过滤本地连接  
![localhosts-filtering-windows](https://hacamer.top/IMG/MyBlog/localhosts-filtering-windows.png)  

> **Mac：**
>> 高级设置 => `network.filtering.localnetwork` 和 `network.filtering.localhost` 调成 `true`  
![localhosts-filtering-mac](https://hacamer.top/IMG/MyBlog/localhosts-filtering-mac.png)


---

> 作者: 杏梢  
> URL: https://hacamer.top/adguard-usage/  

