var yudan = "";
var now = new Date();
var month = now.getMonth() + 1;
var date = now.getDate();
var year = now.getYear();
if (year < 2000) year = year + 1900;
document.write(year + " 年 " + month + " 月 " + date + " 日 ");