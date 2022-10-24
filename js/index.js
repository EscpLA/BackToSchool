// 获取需要填充信息的 dom 盒子
let monDate = document.querySelector(".month-date");
let time = document.querySelector(".time")
let bottomBox = document.querySelector(".title3").children[0]
let hesuanDate = document.querySelector('#hesuanDate')
// console.log(bottomBox);


setTime = function () {
    let curTime = {};
    // 设置定时器，每隔 1s 重新获取时间。
    // 创建 Date 对象，获取时间
    let d = new Date();
    curTime.year = d.getFullYear();
    curTime.month = d.getMonth() + 1;
    curTime.date = d.getDate();
    
    curTime.hours = d.getHours().toString().padStart(2, '0');
    curTime.minutes = d.getMinutes().toString().padStart(2, '0');
    curTime.seconds = d.getSeconds().toString().padStart(2, '0');
    
    monDate.innerHTML = curTime.month + "月" + curTime.date + "日";
    time.innerHTML = curTime.hours + ':' + curTime.minutes + ':' + curTime.seconds;
    return curTime;
}

// 立刻执行定时器，并且清除定时器
let curTime = setTime();


bottomBox.innerHTML += curTime.year + '-' + curTime.month.toString().padStart(2, '0') + '-' + curTime.date.toString().padStart(2, '0') + ' ' + curTime.hours + ':' + curTime.minutes + ':' + curTime.seconds

// 获取前一天的时间，并输出。
let d = new Date();
var preDate = new Date(d.getTime() - 24*60*60*1000).format("Y-m-d");
console.log('preDate', preDate);

hesuanDate.innerHTML += preDate + " 07:20:27"

datasInterval = setInterval(setTime, 1000);

