//这个文件用来连接数据库 【这是一个自定义模块】
var mysql = require("mysql");//将须要的mysql模块加载进来
//创建一个链接mysql数据库的函数
function ConnectionMysql(){
	this.pool = null;//声明一个链接池的空变量
	this.init = function(){//声明一个初始化链接池的空方法
		//通过mysql这个模块创建一个链接池
		this.pool = mysql.createPool({
			connectionLimit:10,//链接数据库的数量（并发量）：连接数据库最大的并发量
			host:"127.0.0.1",//链接数据库的地址  或者 ip
			user:"root",//数据库用户名
			password:"root", //数据库密码
			database:"bawei" //数据库名字
		});
	}
	//声明一个查询的方法  须要传入sql语句 以及对查询结果处理的回调函数
	this.query = function(sql,callback){
		//获取链接池其中的一个链接 通过这个链接根据sql语句查询数据
		this.pool.getConnection(function(err,conn){
			//conn是我们获得到的其中一个链接,通过这个链接的query方法查询到数据，然后又将数据传入回掉函数里面
			conn.query(sql,function(err,result){
				callback(err,result);
				//查询完结后，关闭数据库的链接
				conn.release();
			});
		})
	}
	
}

//导出模块
module.exports = new ConnectionMysql();
