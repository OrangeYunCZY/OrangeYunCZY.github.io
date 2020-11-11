new Vue({
	el:"#bodyer",
	data(){
		return {
			data_json:null,//ajax数组
		}
	},
	mounted () {
	    axios
	      .get('https://orangeyunczy.github.io/js/data.json')
		  .then(response=>{
			  this.data_json=(response.data.data);
			  this.bodyer_foot_list_li();
			  this.foot_li_click(1);
		})
	      .catch(function (error) { // 请求失败处理
	        console.log(error);
	      });
	  },
	methods:{
		foot_li_click:function(li){//切页 li页数
			var bodyer_main=document.getElementById("bodyer-main");
			var d="'";
			bodyer_main.innerHTML="";
			for(var i=li*9-9;i<=li*9-1;i++){
				var txt='<div class="bodyer-main-list-li" onclick="window.open('+d+this.data_json[i].url+d+')">\n';
				txt+='<span>'+this.data_json[i].title+'</span>\n';
				txt+='<p>'+this.data_json[i].details+'</p>';
				txt+='<u>'+this.data_json[i].date+'-'+this.data_json[i].time+'</u>\n';
				txt+='</div>\n';
				bodyer_main.innerHTML+=txt;
			}
		},
		bodyer_foot_list_li:function(){
			var list_li_total=this.data_json.length;
			var list_li_i=parseInt(list_li_total/9)+1;
			for(var i=1;i<=list_li_i;i++){
				document.getElementById("bodyer-foot-list").innerHTML+="<li>"+i+"</li>";
			}
		}
	}
});
