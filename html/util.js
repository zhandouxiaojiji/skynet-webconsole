function InitWS(){
    var ws = new WebSocket("ws://"+GetCookie("server"));
    ws.onopen = function() {
        // 发送 Hello 消息
        ws.send(JSON.stringify({
            id: 'Login'
        }))
    }
    ws.onclose = function(evt) {  
        alert("Connection closed."); 
    }; 
    return ws;
}

function GetCookie(c_name){
　　if (document.cookie.length>0){　　//先查询cookie是否为空，为空就return ""
　　　　c_start=document.cookie.indexOf(c_name + "=")　　//通过String对象的indexOf()来检查这个cookie是否存在，不存在就为 -1　　
　　　　if (c_start!=-1){ 
　　　　　　c_start=c_start + c_name.length+1　　//最后这个+1其实就是表示"="号啦，这样就获取到了cookie值的开始位置
　　　　　　c_end=document.cookie.indexOf(";",c_start)　　//其实我刚看见indexOf()第二个参数的时候猛然有点晕，后来想起来表示指定的开始索引的位置...这句是为了得到值的结束位置。因为需要考虑是否是最后一项，所以通过";"号是否存在来判断
　　　　　　if (c_end==-1) c_end=document.cookie.length　　
　　　　　　return unescape(document.cookie.substring(c_start,c_end))　　//通过substring()得到了值。想了解unescape()得先知道escape()是做什么的，都是很重要的基础，想了解的可以搜索下，在文章结尾处也会进行讲解cookie编码细节
　　　　} 
　　}
　　return ""
}


//使用方法：setCookie('username','Darren',30)  
function SetCookie(c_name, value, expiredays){
　　　var exdate=new Date();
　　　exdate.setDate(exdate.getDate() + expiredays);
　　　document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

function FormatTime(time) { 
    return new Date(parseInt(time) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " "); 
} 

function getParam(paramName) {
    paramValue = "";
    isFound = false;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&");
        i = 0;
        while (i < arrSource.length && !isFound) {
            if (arrSource[i].indexOf("=") > 0) {
                if (arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase()) {
                    paramValue = arrSource[i].split("=")[1];
                    isFound = true;
                }
            }
            i++;
        }
    }
    return paramValue;
}

function CurServer(){
    return GetCookie("server");
}

String.prototype.Format = function (args) {
   /*this代表要调用Format方法的字符串*/
   /*replace的第一个参数为正则表达式，g表示处理匹配到的所有字符串，在js中使用//包起来*/
   /*replace的第二个参数为匹配字符串的处理，k1匹配结果包含{}，k2只保留{}内的内容*/
   var temp = this.replace(/\{(\w+)\}/g, function (k1, k2) {
    // console.log(k1, k2);
    /*replace将匹配到的k2用参数args替换后赋给新变量temp*/
    return args[k2];
   });
   /*自定义方法Format将格式化后的字符串返回*/
   return temp;
  };
