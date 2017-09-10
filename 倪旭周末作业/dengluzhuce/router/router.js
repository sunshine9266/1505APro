//这是专门用来设置路由的模块

var express = require("express");
var model = require("../model/model");
//引用这个框架的路由
var route = express.Router();

route.post("/getAll",function(req,res){
	model.getAll(req,res);
});
//根据传递过来的用户名查询返回是否存在这个用户
route.post("/getAaa",function(req,res){
	model.getAaa(req,res);
});
route.post("/getAcc",function(req,res){
	model.getAcc(req,res);
});
route.post("/getAbb",function(req,res){
	model.getAbb(req,res);
});
route.post("/getLike",function(req,res){
	model.getLike(req,res);
});
route.post("/getUpdata",function(req,res){
	model.getUpdata(req,res);
});
//根据不同的路径调用不同的方法

module.exports = route;
