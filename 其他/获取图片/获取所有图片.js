var fs = require('fs');
var path = 'img';
fs.readdir(path,function(err,files){
	//获取目录所有图片，并生成文件
	//console.log(files);
	var msg = JSON.stringify(files);
	console.log(msg)
	fs.writeFile("img/图片名字.json",msg,function(){
		console.log("添加日志成功");
	});
	
	//批量修改图片内容
//	var len = files.length;
//	for(var i = 0;i < len;i++){
//		var oldPath = path + '/' + files[i];
//		var newPath = 'img/' + i + ".jpg";
//		fs.rename(oldPath,newPath,function(err){
//			console.log("成功")
//		})
//	}
})
