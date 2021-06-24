title: cs
author: Hacamer
tags: []
categories: []
date: 2021-06-21 08:32:00
---
- 彩色文字
在一段话中方便插入各种颜色的标签，包括：{% p red, 红色 %}、{% p yellow, 黄色 %}、{% p green, 绿色 %}、{% p cyan, 青色 %}、{% p blue, 蓝色 %}、{% p gray, 灰色 %}。
- 超大号文字
文档「开始」页面中的标题部分就是超大号文字。
{% p center logo large, Volantis %}
{% p center small, A Wonderful Theme for Hexo %}

{% progress 1040 bule 进度条 %}

{% timeline 2021 %}
{% timenode 6/8 %}
博客建造成功
{% endtimenode %}
{% timenode 时间节点（标题） %}
正文内容
{% endtimenode %}
{% endtimeline %}
{% folding green, 查看代码测试 %}
假装这里有代码块（代码块没法嵌套代码块）
{% endfolding %}

const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: 'name1',
            artist: 'artist1',
            url: 'url1.mp3',
            cover: 'cover1.jpg',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        },
        {
            name: 'name2',
            artist: 'artist2',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        }
    ]
});