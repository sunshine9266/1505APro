//我这个文件所在的这个文件夹就是专门用来存放处理的数据模块的文件夹
//里面的每一个文件(就像现在的文件)，用来处理单独的模块
//要处理数据库里面获得到的数据 这个数据从MySql.js里面来 所以引入它
var connection = require("../MySql/MySql");

//处理用户表的模块
function UserModel() {
	//写一个查询所有数据的方法
	this.getAll = function(req, res) {
		//查询的sql语句
		//			var username = req.body.user;
		//			var psd = req.body.psd;
		var sql = "select * from bw";
		connection.query(sql, function(err, result) {
			//当前这个回掉函数 的两个参数就是查询失败的原因 或者成功的结果
			if(err) {
				console.log("UserModel" + err);
				res.send(false);
			} else {
				if(result.length == 0) {
					res.send(false);
				} else {
					res.send(result);
				}
			}
		})
	};
	this.getAaa = function(req, res) {
		//			console.log(req.body.user);
		var username = req.body.user;
		var psd = req.body.psd;
		//			console.log(psd);
		var sql = "select * from bw WHERE username = '" + username + "' and `password`='" + psd + "'";
		connection.query(sql, function(err, result) {
			//当前这个回掉函数 的两个参数就是查询失败的原因 或者成功的结果
			if(err) {
				console.log("UserModel" + err);
				res.send(false);
			} else {
				if(result.length == 0) {
					res.send(false);
				} else {
					res.send(result);
				}
			}
		})
	};
	this.getAcc = function(req, res) {
		//			console.log(req.body.user);
		var username = req.body.user;
		var psd = req.body.psd;
		var tel = req.body.tel;
		var sql = "insert into bw (username,password,phone) values ('" + username + "','" + psd + "'," + tel + ")";
		connection.query(sql, function(err, result) {
			//当前这个回掉函数 的两个参数就是查询失败的原因 或者成功的结果
			if(err) {
				console.log("UserModel" + err);
				res.send(false);
			} else {
				res.send(result);
			}
		})
	};
	this.getAbb = function(req, res) {
		//			console.log(req.body.user);
		//			var username = req.body.user;
		//			var psd = req.body.psd;
		var id = req.body.id;
		console.log(id);
		var sql = "DELETE FROM bw WHERE id =" + id + "";
		connection.query(sql, function(err, result) {
			//当前这个回掉函数 的两个参数就是查询失败的原因 或者成功的结果
			if(err) {
				console.log("UserModel" + err);
				res.send(false);
			} else {
				if(result.length == 0) {
					res.send(false);
				} else {
					res.send(result);
				}
			}
		})
	};
	//模糊查询
	this.getLike = function(req, res) {
					//console.log(req.body.user);
//					var username = req.body.user;
//					var psd = req.body.psd;
					var texts = req.body.texts;
		var sql = "SELECT * FROM bw WHERE phone LIKE '%" +texts+ "%'";
		connection.query(sql, function(err, result) {
			//当前这个回掉函数 的两个参数就是查询失败的原因 或者成功的结果
			if(err) {
				console.log("UserModel" + err);
				res.send(false);
			} else {
				if(result.length == 0) {
					res.send(false);
				} else {
					res.send(result);
				}
			}
		})
	};
	//修改
	this.getUpdata = function(req, res) {
		var id = req.body.id;
		var a = req.body.a;
		var b = req.body.b;
		var c = req.body.c;
//		console.log(id)
		var sql = "UPDATE bw SET username = '" + a + "' , password = '" + b + "' , phone = '" + c + "' WHERE id = "+id+"";
		connection.query(sql, function(err, result) {
			//当前这个回掉函数 的两个参数就是查询失败的原因 或者成功的结果
			if(err) {
				console.log("UserModel" + err);
				res.send(false);
			} else {
				if(result.length == 0) {
					res.send(false);
				} else {
					res.send(result);
				}
			}
		})
	};
}
module.exports = new UserModel();