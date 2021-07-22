---
title: 页脚运行时间
tags: 教程
abbrlink: 32287
date: 2021-07-15 14:36:38
---
前言：
看了很多小伙伴都来问我页脚的运行时间怎么搞 ~呸，就一个而已φ(*￣0￣)~ 所以我就来写个教程ヾ(≧▽≦*)o

# 教程开始

## Duration.js
新建一个文件并命名为duration.js，并将这个文件放到 [blog]\themes\butterfly\source\js 目录下 （blog即为你的博客目录）
打开文件，输入以下内容(里面的内容需要自行修改，例如时间等)
```
!(function() {
function update() {
var now = new Date();
var grt = new Date("2021-06-05 00:00:00"); /** 此处是计时的起始时间 **/
now.setTime(now.getTime()+250);
days = (now - grt ) / 1000 / 60 / 60 / 24;
dnum = Math.floor(days);
hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum);
hnum = Math.floor(hours);
if(String(hnum).length === 1 ){
hnum = "0" + hnum;
}
minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
mnum = Math.floor(minutes);
if(String(mnum).length === 1 ){
mnum = "0" + mnum;
}
seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
snum = Math.round(seconds);
if(String(snum).length === 1 ){
snum = "0" + snum;
}
document.getElementById("timeDate").innerHTML = "本站已非常安全运行&nbsp"+dnum+"&nbsp天";
document.getElementById("times").innerHTML = hnum + "&nbsp小时&nbsp" + mnum + "&nbsp分&nbsp" + snum + "&nbsp秒";
}
setInterval(update, 1000);
})();
```
保存退出

## 修改主题配置文件
在 custom_text: 后面添加以下字段
```
<div><span id="timeDate">载入天数...</span><span id="times">载入时分秒...</span><script src="/js/duration.js"></script></div>
```

## 运行 hexo cl ，hexo g ，hexo s 即可看到效果

# 教程完毕![](https://cdn.jsdelivr.net/gh/2x-ercha/twikoo-magic/image/Coolapk/coolapk_emotion_1016.png)