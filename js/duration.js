setInterval((function(){var n=new Date,m=new Date("2021-06-05 00:00:00");n.setTime(n.getTime()+250),days=(n-m)/1e3/60/60/24,dnum=Math.floor(days),hours=(n-m)/1e3/60/60-24*dnum,hnum=Math.floor(hours),1===String(hnum).length&&(hnum="0"+hnum),minutes=(n-m)/1e3/60-1440*dnum-60*hnum,mnum=Math.floor(minutes),1===String(mnum).length&&(mnum="0"+mnum),seconds=(n-m)/1e3-86400*dnum-3600*hnum-60*mnum,snum=Math.round(seconds),1===String(snum).length&&(snum="0"+snum),document.getElementById("timeDate").innerHTML="本站已非常安全运行&nbsp"+dnum+"&nbsp天",document.getElementById("times").innerHTML=hnum+"&nbsp小时&nbsp"+mnum+"&nbsp分&nbsp"+snum+"&nbsp秒"}),1e3);