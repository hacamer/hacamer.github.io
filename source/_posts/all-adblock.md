---
title: 全平台去广告（Root&免Root）
tags:
  - 教程
  - 折腾日记
abbrlink: 58342
date: 2021-07-23 09:49:25
---
# 手机篇

## 第一部分 ：免Root
### ﻿李跳跳-自动跳过广告
﻿自动跳过启动页广告，跳过速度快，十分好用
﻿无需什么权限，只要开启无障碍即可使用  
﻿![](https://cdn.jsdelivr.net/gh/hacamer/IMG@main/MyBlog/1626925332000.jpg)
![](https://cdn.jsdelivr.net/gh/hacamer/IMG@main/MyBlog/1626925353000.jpg)

### AdGuard-﻿尽享安全且无广告的互联网体验。即刻获取保护！
﻿这个是去广告效果最好的，AdGuard官方介绍是摆脱恼人广告，在线跟踪，可以广告拦截和隐私保护，这个软件无论启动页广告还是网页中的广告都可以去除，自带的规则完全够用了，这里推荐大家看看这篇推荐规则：﻿https://www.hacamer.tk/posts/Adrules-For-AdGuard/

 这个软件会一直挂后台，耗电会包含所有应用的耗电量，好处就是门槛低，不用装XP啥的，终身订阅有好几次便宜的车了，当然PJ也到处都是，这儿我就不贴链接了，酷安搜搜就能搜到，不想找的私聊我，目前价格可能有点高，大家等有车了还是支持一下好，因为这是非常值得的！

## 第二部分 ：Root
### ﻿大圣净化（不推荐，开发者跑路了）
~大圣净化是很早出的一款去广告的软件，开始用无障碍版本叫八戒助手，XP版本叫悟空加速，配合唐僧取经使用，都是同一个作者，后面都合并一起叫大圣净化，跳广告速度很快，云端有着丰富的规则~

![](﻿https://cdn.jsdelivr.net/gh/hacamer/IMG@main/MyBlog/1627006826000.jpeg)

### ﻿上帝模式(需要XP)
这个软件可以清除一些不想看到的控件，比如横幅广告，但这款软件拿来去广告的局限性很大，因为很多软件的条幅广告不能单独拽掉，但是小众软件，类似那种学日语的软件，就一拉一个准了，这个软件更多的用处是把去掉自己不想要的功能，达到清爽的效果![](https://cdn.jsdelivr.net/gh/hacamer/IMG@main/MyBlog/1627007233000.png)

### AdGuard
跟上文一样，使用Root移动AdGuard的证书到系统分区  
过滤效果会更好

## ﻿其它
这个就是下载别人修改后的去广告的，缺点就是麻烦，而且每次使用都需要找，而且有的修改版本兼容性不太好

# 电脑篇
﻿电脑端的广告常见的就有网页弹窗，桌面弹窗，网页条幅广告。开始电脑端有净网大师，后面动了太多人的蛋糕被人搞了，现在的净网大师大家就不要用了，有后门

## ﻿AdGuard
AdGuard无疑是电脑端最强的去广告软件，有着众多的过滤器和扩展，无论是网页弹窗，还是各类网页广告都可以去除，电脑打开爱奇艺、腾讯视频、优酷这类看视频也都是没有广告的，里面的家长控制模式打开可以防止家里的小孩子用电脑不小心浏览到成人内容。电脑端的AdGuard的扩展甚至可以装油猴脚本，但是不建议大家这么做，因为大家完全可以直接在浏览器里装油猴扩展，然后在里面装脚本，AdGuard的油猴脚本会拖慢启动速度


![AdGuard界面](https://cdn.jsdelivr.net/gh/hacamer/IMG@main/MyBlog/1627007761000.jpg)
界面
![AdGuard规则](https://cdn.jsdelivr.net/gh/hacamer/IMG@main/MyBlog/1627007858000.jpg)
规则

拦不到的广告可以手动拦截

## 火绒
火绒的弹窗拦截特别好用，如图

![](https://cdn.jsdelivr.net/gh/hacamer/IMG@main/MyBlog/1627008020000.jpg)

## ﻿浏览器去广告插件
目前推荐AdGuard浏览器扩展，效果最好
![](https://cdn.jsdelivr.net/gh/hacamer/IMG@main/MyBlog/1627008346000.jpg)

# 路由器篇


前排提示：路由器去广告需具备以下条件
- Openwrt，﻿Padavan，高恪，PandoraBox等系统
- 路由器需有20-80MB以上的内存
- 一定的储存空间，20mb左右

## AdGuardHome
﻿AdGuard Home是AdGuard的一个开源免费项目，去广告能力很强，该项目的原理是，在 DNS 的域名解析的过程里拦截网页上的广告，在路由器上搭建了AdGuard Home 这样做的好处在于，节省了在浏览器上安装去广告插件和在手机、电脑等设备上安装去广告应用的步骤，所有设备只要使用AdGuard Home 的 DNS 就可以自动拦截广告。至于加速解析并没感觉出来，网速会变慢一﻿点，安全和速度不可兼得
相关链接：﻿https://www.hacamer.ml/posts/AdGuardHomeUser/
﻿![](https://cdn.jsdelivr.net/gh/hacamer/IMG@main/MyBlog/1627009711000.jpg)
﻿AdGuard Home的搭建和设置一句话两句话说不完，想看的人数多的话我后面再专门修正那一期吧

## Adblock Plus +﻿
﻿{% ghcard ﻿small-5/luci-app-adblock-plus  %}
项目地址：https://github.com/small-5/luci-app-adblock-plus
恩山论坛原贴：﻿https://www.right.com.cn/forum/thread-4751081-1-1.html
看着过滤效果不错，但没测试，不占内存

# 本文完，感谢阅读！