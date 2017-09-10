var express = require("express");

//导入自定义的链接数据库的模块
var connection = require("./MySql/MySql");
//生成express框架一个实例
var app = express();

var bodyParser = require("body-parser");
var cors = require("cors");
app.use(cors());
//项目运行初始化链接数据库

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}));
connection.init();
//当访问的是某个路径的时候 使用某个路由
app.use("/1505A",require("./router/router"))



//当访问根目录的时候 返回数据
//app.get("/",function(req,res){
//	res.send("放学了!");
//})
//启动服务器 并监听 8100 端口
app.listen(8100,function(){
	console.log("服务器已经启动!")
})