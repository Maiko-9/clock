


$(function(){
    setInterval(function(){
        const now = new Date();

//年
const year = now.getFullYear();
//月
const month = (now.getMonth() + 1).toString().padStart(2, "0");
const monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const monthStr = monthlist[now.getMonth()];
//日付
const date = now.getDate().toString().padStart(2,"0");
//時間
const hour = now.getHours().toString().padStart();
//分
const minute = now.getMinutes().toString().padStart(2,"0");
//秒
const second = now.getSeconds().toString().padStart(2, "0");
//週
const weeklist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const weekStr = weeklist[now.getDay()];
console.log(year, month, monthStr, date, weekStr, hour, minute, second)

//時間の置き換え
$("#year").text(year);
$("#monthStr").text(monthStr);
$("#second").text(second);
$("#date").text(date);
$("#weekStr").text(weekStr);
$("#hour").text(hour);
$("#minute").text(minute);



    }, 1000);
    function setTine(){


        setTine();
        setInterval(function(){

//1秒ごとに時間を設定

setTime();

 },1000);

 const now = new Date();

//年
const year = now.getFullYear();
//月
const month = (now.getMonth() + 1).toString().padStart(2, "0");
const monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const monthStr = monthlist[now.getMonth()];
//日付
const date = now.getDate().toString().padStart(2,"0");
//時間
const hour = now.getHours().toString().padStart();
//分
const minute = now.getMinutes().toString().padStart(2,"0");
//秒
const second = now.getSeconds().toString().padStart(2, "0");
//週
const weeklist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const weekStr = weeklist[now.getDay()];
console.log(year, month, monthStr, date, weekStr, hour, minute, second)

//時間の置き換え
$("#year").text(year);
$("#monthStr").text(monthStr);
$("#second").text(second);
$("#date").text(date);
$("#weekStr").text(weekStr);
$("#hour").text(hour);
$("#minute").text(minute);
    }




});