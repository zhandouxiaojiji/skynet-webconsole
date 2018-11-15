# skynet控制台网页版
需要放到nginx或apache或tomcat的目录，或者直接访问我已经部署好的web服务:http://test.huangjx.top/skynet/login.html  
![preview2](https://github.com/zhandouxiaojiji/webconsole/blob/master/images/preview2.jpg)
![preview1](https://github.com/zhandouxiaojiji/webconsole/blob/master/images/preview1.jpg)
# 连接skynet
引入[bewater](https://github.com/zhandouxiaojiji/bewater)模块，在skynet服务内添加以下代码
```
local c = skynet.newservice("ws/watchdog", "webconsole.webconsole", "webconsole.player_t")
skynet.call(c, "lua", "start", {
    port = 8888, -- 控制台端口
    preload = 1,
})  
```
# 添加gm指令
在skynet服务内添加以下代码
```
local gm = require "gm"
gm.add_gmcmd("lesson", "gm.test_cmd")
```
添加脚本gm/test_cmd.lua
```
local M = {}
function M.echo()
    print "test gm"
end
return M
```
在后台输入命令:test echo
# 关于
这个版本过于简陋，不再维护，后续会重构一版全新的，敬请期待~
