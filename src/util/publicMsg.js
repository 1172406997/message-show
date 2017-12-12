const msgMap = new Map([
  [0,"调用成功"],
  [1,"服务器升级维护中，请稍后再试"],
  [2,"账号被禁用，如需恢复请联系管理员"],
  [3,"登陆信息超时，重新登陆"],
  [101,"未知错误"],
  [102,"token失效"],
  [200,'成功'],
  [404,'服务器资源未开启'],
  [405,"禁止访问"],
  [1001,"输入参数有误"],
  [1002,"appid验证无效"],
  [1003,"密码错误，请重新输入密码"],
  [1004,"用户名或密码错误，请检查您输入的数据"],
  [1019,'Topic已存在'],
  [1023,'Topic处理类型不存在'],
  [1022,'Topic开启处理失败'],
  [1021,'Bundle_id不存在'],
  [1029,'菜单不存在'],
  [1030,'用户权限不存在'],
  [1008,'授权码错误或未找到'],
  [1011,'激活码被禁止使用'],
  [1009,'已被使用'],
  [1010,'已被激活'],
  [1027,'用户已存在此权限'],
  [1025,'设备不存在'],
]);

/**
 * 这里返回
 * 			1 为跳转至登陆页面
 *     		其他则显示错误信息
 */
export const publicMsg = function(code){
	if(code == 0 || code==200){
		return 0;
	}else if(code == 3 || code==1002 || code==102 ){
		return 'tologin';
	}else {
		switch(code){
			case 1:
				return msgMap.get(1);
			case 2:
				return msgMap.get(2);
			case 404:
				return msgMap.get(405);
			case 405:
				return msgMap.get(405);
			case 1003:
				return msgMap.get(1003);
			case 1004:
				return msgMap.get(1004);
			case 1001:
				return msgMap.get(1001);
			case 1019:
				return msgMap.get(1019);
			case 1023:
				return msgMap.get(1023);
			case 1022:
				return msgMap.get(1022);
      case 1021:
        return msgMap.get(1022);
      case 1025:
        return msgMap.get(1025);
      case 1008:
        return msgMap.get(1008);
      case 1009:
        return msgMap.get(1009);
      case 1010:
        return msgMap.get(1010);
      case 1019:
        return msgMap.get(1019);
      case 1030:
        return msgMap.get(1030);
      case 1027:
        return msgMap.get(1027);
      case 1029:
        return msgMap.get(1029);
		}
		return "这超出了我的解决范围，请重新登陆或者联系管理员";
	}
}
