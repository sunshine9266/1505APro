<template>
  <div id="app">
    <header style="font-size: 1.538461rem;margin: 0.461538rem;"><span class="glyphicon glyphicon-file"></span>UC头条<span style="float: right;" class="glyphicon glyphicon-search"></span></header>
    <ul id="ul">
    	<li>推荐</li>
    	<li>视频</li>
    	<li style="color: blue;">体育</li>
    	<li>名家</li>
    	<li>娱乐</li>
    	<li>科技</li>
    	<li>＋</li>
    </ul>
    <ul v-for="data in arr">
    	<li id="a">
    		<h4 style="clear: both; border-top: 1px solid silver; padding-top: 2%;">{{data.title}}</h4>
    		<div style="float: right; width: 100%;">
    			<img :src="data.thumbnail_pic_s"/>
    	  	<img :src="data.thumbnail_pic_s02"/>
      		<img :src="data.thumbnail_pic_s03"/>
    		</div>
    		<span style="margin-top: 2%; display: block; float: left;">{{data.date}}</span>
    		<span style="margin-top: 2%; display: block; float: left; margin-left: 1%;">{{data.author_name}}</span>
    		<span style="margin-top: 1%; display: block; float: left; margin-left: 3%; font-size: 1.730769rem;">×</span>
    	</li>
    </ul>
  </div>
</template>

<script>
	import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:[]
    }
  },
  created:function(){
  	var url = "http://guoxiao158.top/toutiao.php?type=tiyu";
  	var tThis = this;
  	axios.get(url).then(function(data){
  		console.log(data.data.result.data)
  		tThis.arr = data.data.result.data
  	})
  }
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	ul{
		list-style: none;
	}
	#ul{
		list-style: none;
		height: 1.730769rem;
		width: 100%;
		background-color: #CCCCCC;
	}
	#ul li{
		float: left;
		width: 14%;
		text-align: center;
	}
	img{
		width: 32%;
		text-align: center;
	}
	#a{
		margin: 0.576923rem;
		display: block;
		margin-bottom: 10%;
		/*border-bottom: 2px solid #CCCCCC;*/
	}
</style>
