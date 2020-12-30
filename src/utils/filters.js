// 储存单位转化
let computedSize = value => {
    if (!value) {//在这里进行一次传递数据判断.如果传递进来的为空值,返回其空字符串.解决其问题
        return '';
    }
    if(value>(1024* 1024)) {
        return (value / 1024 /1024).toFixed(2) + " TB"
    }else if(value> 1024) {
        return (value / 1024 ).toFixed(2) + " GB"
    }else{
        return value.toFixed(2)  + " MB"
    }
}
// ms转化时分秒 00:00:00
let formatMs = value => {
    if (!value) {//在这里进行一次传递数据判断.如果传递进来的为空值,返回其空字符串.解决其问题
        return '';
    }
    var second = parseInt(value);       // second
    var minute = 0;                            // minute
    var hour = 0;                              // hour
    if(second > 60) {
        minute = parseInt(second / 60);
        second = parseInt(second % 60);
        if(minute > 60) {
            hour = parseInt(minute / 60);
            minute = parseInt(minute % 60);
        }
    }
    var result;
    if(second >= 10) {
        result = "" + parseInt(second);
    }else{
        result = "" + "0" + parseInt(second);
    }
    if(minute >= 10) {
        result = "" + parseInt(minute) + ":" + result;
    }
    else{
        result = "" + "0" + parseInt(minute) + ":" + result;
    }
    if(hour >= 10) {
        result = "" + parseInt(hour) + ":" + result;
    }
    else{
        result = "" + "0" + parseInt(hour) + ":" + result;
    }
    return result; 
}
// ms转化时分秒 1小时2分钟5秒
let format_Ms = value => {
    if (!value) {//在这里进行一次传递数据判断.如果传递进来的为空值,返回其空字符串.解决其问题
        return '';
    }
    var hours = parseInt((value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = parseInt((value % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = parseInt((value % (1000 * 60)) / 1000);
    if(hours > 0) {
        return hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
    }else if(minutes > 0) {
        return + minutes + " 分钟 " + seconds + " 秒 ";
    }else{
        return seconds + " 秒 ";
    }    
}
// s转化时分秒
let formatS = value => {
    if (!value) {//在这里进行一次传递数据判断.如果传递进来的为空值,返回其空字符串.解决其问题
        return '';
    }
    var second = parseInt(value);       // second
    var minute = 0;                            // minute
    var hour = 0;                              // hour
    if(second > 60) {
        minute = parseInt(second / 60);
        second = parseInt(second % 60);
        if(minute > 60) {
            hour = parseInt(minute / 60);
            minute = parseInt(minute % 60);
        }
    }
    var result;
    if(second >= 10) {
        result = "" + parseInt(second);
    }else{
        result = "" + "0" + parseInt(second);
    }
    if(minute >= 10) {
        result = "" + parseInt(minute) + ":" + result;
    }
    else{
        result = "" + "0" + parseInt(minute) + ":" + result;
    }
    if(hour >= 10) {
        result = "" + parseInt(hour) + ":" + result;
    }
    else{
        result = "" + "0" + parseInt(hour) + ":" + result;
    }
    return result;    
}

export { computedSize, formatMs,format_Ms, formatS,}