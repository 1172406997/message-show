import { publicMsg } from "./publicMsg.js"
//var hrml = "http://192.168.0.99:9094/api";
//传递过来this,component,请求方式,
export const postRequest = function(_this,edition,component,params,callback){
  var weburl =hrml+"/apiserver/api/"+edition+'/'+component;
//	var loadingInstance = _this.Loading.service("options");

  _this.axios({
    url: weburl,
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'/',
    }
  }).then(
    function(res){
      if(res.data.code){
        if(res.data.code==102){
          _this.Message.error(publicMsg(res.data.code))
          _this.$router.push({path:"/"});
          localStorage.clear();
        }else if(res.data.code == 1001){

        }else if(res.data.code == 1025){
          callback(res);
        }
        else{
          _this.Message.error(publicMsg(res.data.code))
        }
      }
      callback(res);
//			loadingInstance.close();
    }
  )
//	.catch(function(){
//		_this.Message.error("网络环境有问题")
//	})
}
//传递过来this,component,请求方式,
export const getRequest = function(_this,edition,params,callback){
  var weburl =edition;
//	var loadingInstance = _this.Loading.service("options");

  _this.axios({
    url: weburl,
    method: 'get',
    params: params,
    headers: {
//			'Content-Type': 'application/json'
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  }).then(
    function(res){
      if(res.data.code){
        _this.Message.error(publicMsg(res.data.code))
        if(res.data.code==102){
          localStorage.clear();
          _this.$router.push({path:"/"})
//					loadingInstance.close();
        }
      }
      callback(res);
//			loadingInstance.close();
    }
  ).catch(function(error){
//		loadingInstance.close();
  })
}
