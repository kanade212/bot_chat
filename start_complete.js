
// Khai báo
var request = require("request");
var login = require("facebook-chat-api");
var SimsimiAnswered;
var text;
var today = new Date();
var h = today.getHours();
var phut = today.getMinutes();
var answeredThreads = {};
var botkey = "http://sandbox.api.simsimi.com/request.p?key=3b45da21-972b-41ef-9232-d603a6b38cbb&lc=vi&ft=1.0&text=hi";
login(
	{
	email: "email", 
	password: "pass" 
	},
function callback (err, api)
{
	if(err) return console.error(err);
	
	api.setOptions({forceLogin: true, selfListen: false, logLevel: "silent"});
	
	api.listen(function callback(err, message)
	{
		
		if(message.body === "stopchat"||message.body === "bye") { 
			api.sendMessage(";) Tạm biệt , bye!:(.", message.threadID); 
			api.markAsRead(message.threadID);
			return api.logout(err);
		}
		
		if (message.body==="Getid"||message.body==="getid"||message.body==="get id"||message.body==="Get id") {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("ID: ", message.threadID); 
			api.sendMessage(message.senderID, message.threadID); 
			api.markAsRead(message.threadID); 
			console.log("Sender ID: " + message.senderID);
		}
		if ((h > 5 && h < 22) && !answeredThreads.hasOwnProperty(message.threadID)) {
			api.getUserInfo(message.senderID, function(err, ret) {
				if (err) return console.error(err);
				for (var prop in ret) {
					if (ret.hasOwnProperty(prop) && ret[prop].name) {
						api.sendMessage("Xin lỗi " + ret[prop].name + ",Tôi là Shana , là bot AI của a ấy , Hiện tại a Tachibana Kanada đang bận , nếu bạn có gì muốn nói với a ấy , xin vui lòng nt tại đây: www.facebook.com/bot.kanade.tachibana212 or m.me/bot.kanade.tachibana212 ! Thank! ", prop, function(){
							answeredThreads[message.threadID] = true;
						});
					}
				}
			}); return;
		}









if ((h >= 22 && h <= 23) &&(phut>=0 && phut<=59) && !answeredThreads.hasOwnProperty(message.threadID)) {
			api.getUserInfo(message.senderID, function(err, ret) {
				if (err) return console.error(err);
				for (var prop in ret) {
					if (ret.hasOwnProperty(prop) && ret[prop].name) {
						api.sendMessage("Xin lỗi " + ret[prop].name + ",Tôi là Shana , là bot AI của a ấy , Hiện tại đã là " + h + " giờ " + phut + " phút nên  a Tachibana Kanada đang ngủ , nếu bạn có gì muốn nói với a ấy , xin vui lòng nt tại đây: www.facebook.com/bot.kanade.tachibana212 or m.me/bot.kanade.tachibana212 ! Thank! ", prop, function(){
							answeredThreads[message.threadID] = true;
						});
					}
				}
			}); return;
		}







if ((h >= 0 && h <= 5)  && !answeredThreads.hasOwnProperty(message.threadID)) {
			api.getUserInfo(message.senderID, function(err, ret) {
				if (err) return console.error(err);
				for (var prop in ret) {
					if (ret.hasOwnProperty(prop) && ret[prop].name) {
						api.sendMessage("Xin lỗi " + ret[prop].name + ",Tôi là Shana , là bot AI của a ấy , Bây giờ mới là " + h + " giờ " + phut + " phút sáng  nên  a Tachibana Kanada chưa thức (mà bạn có tủn ko , nữa đêm kiếm a ấy làm cái lìn gì vậy?) , nếu bạn có gì muốn nói với a ấy , xin vui lòng nt tại đây: www.facebook.com/bot.kanade.tachibana212 or m.me/bot.kanade.tachibana212 ! Thank! ", prop, function(){
							answeredThreads[message.threadID] = true;
						});
					}
				}
			}); return;
		}
			if (today.getDay() == 6 &&(h >= 18 && h <= 22) && !answeredThreads.hasOwnProperty(message.threadID)) {
			api.getUserInfo(message.senderID, function(err, ret) {
				if (err) return console.error(err);
				for (var prop in ret) {
					if (ret.hasOwnProperty(prop) && ret[prop].name) {
						api.sendMessage("Xin lỗi " + ret[prop].name + ", Tôi là Shana , là bot AI của a ấy , Hiện tại a Tachibana Kanada đang bận , nếu bạn có gì muốn nói với a ấy , xin vui lòng nt tại đây: www.facebook.com/bot.kanade.tachibana212 or m.me/bot.kanade.tachibana212 ! Thank!", prop, function(){
							answeredThreads[message.threadID] = true;
						});
					}
				}
			}); return;
		}
			if (today.getDay() == 0 &&(h >= 18 && h <= 22) && !answeredThreads.hasOwnProperty(message.threadID)) {
			api.getUserInfo(message.senderID, function(err, ret) {
				if (err) return console.error(err);
				for (var prop in ret) {
					if (ret.hasOwnProperty(prop) && ret[prop].name) {
						api.sendMessage("Xin lỗi " + ret[prop].name + ", Tôi là Shana , là bot AI của a ấy ,vì hôm này là chủ nhật nên  Hiện tại a Tachibana Kanada đang ngủ(dc có 1 ngày ngủ, tha cho a ấy đi!) , nếu bạn có gì muốn nói với a ấy , xin vui lòng nt tại đây: www.facebook.com/bot.kanade.tachibana212 or m.me/bot.kanade.tachibana212 ! Thank!", prop, function(){
							answeredThreads[message.threadID] = true;
						});
					}
				}
			}); return;
		}











		else if(message.body === 'la sao' || message.body === 'là sao'|| message.body === 'là sao?'|| message.body === 'hả?'|| message.body === 'la sao'|| message.body === 'la sao?'|| message.body === 'Mình ko tin!'|| message.body === 'minh ko tin'|| message.body === 'mình ko tin!'|| message.body === 'tao ko tin'|| message.body === 'sạo loz'|| message.body === 'tao éo tin'|| message.body === 'éo tin'|| message.body === 'sl'|| message.body === 'sao l'|| message.body === 'sao loz') { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Đã bảo tôi là bot AI của a ấy ! ko tin thì thôi !", message.threadID);
			api.sendMessage("Không biết não bạn là cá vàng hay thiếu Iot nhỉ>?", message.threadID);
			return;
		}
		else if(message.body === 'Tachibana oi' || message.body === 'Kanada oi' || message.body === 'Tachibana'|| message.body === 'tachibana'|| message.body === 'kanade'|| message.body === 'tachibana oi'|| message.body === 'kande oi'|| message.body === 'Tachibana ơi'|| message.body === 'Kanade ơi'|| message.body === 'Ban oi'|| message.body === 'ban oi'|| message.body === 'Ban oi!'|| message.body === 'ban oi!'|| message.body === 'ban ơi'|| message.body === 'Ban ơi'|| message.body === 'Bạn ơi'|| message.body === 'bạn ơi'|| message.body === 'bạn ơi!'|| message.body === 'Bạn ơi!' ) { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Vâng ,Mình là Shana , là bot AI của a ấy , và cũng  là người yêu của a ấy , kaka!  có gì ko bạn ?", message.threadID);
			api.sendMessage(" Mà  hiện tại a Tachibana đang bận ạ, có gì bạn cứ nói với mình là dc!", message.threadID);
			return;
		}
		else if(message.body === 'hu' ||message.body === 'hú' ||message.body === 'Hú') {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Hết hồn ! Xủi đây!", message.threadID);
			return;
		}
		else if(message.body === 'a du'||message.body === 'a đù'||message.body === 'adu') { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("đù cái con ku ak!", message.threadID);
			return;
		}
		else if(message.body === 'no dang lam gi'||message.body === 'nó đang làm gì' || message.body === 'Nó đang làm gì') { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Chắc a ấy đang xem phim ạ , có mấy bộ của Tokuda mới ra nên a ấy đang cài ạ(", message.threadID);
			return;
		}
		else if(message.body === 'link 18+'||message.body === 'cho xin link phim 18+'||message.body === 'Cho xin link 18+'||message.body === 'cho mình xin link 18+'||message.body === 'Cho mình xin link 18+'||message.body === 'Cho tao xin link 18+'||message.body === 'cho tao xin link 18+') {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Mặn quá cha ơi, để tí đi, cho a Tachibana gửi, chứ e ko dám gửi bậy bạ , kẻo FBI nó kiếm là tiêu đời e!.", message.threadID);
			return;
		}
		else if(message.body === "Tks ban" ||message.body === "Cam on"||message.body === "Tks"||message.body === "tks"||message.body === "thank"||message.body === "Thank"||message.body === "thank!"||message.body === "Thank!") { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Ko có gì đâu ạ!", message.threadID);
			return;
		}
		else if(message.body === "nè" || message.body === "ne" || message.body === "Nè") { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Hả , gọi mình à, có gì ko bạn", message.threadID);
			return;
		}
		
		else if(message.body === 'o' ||message.body === 'k'||message.body === 'ok' ||message.body === 'Ok'||message.body === "bye"||message.body === "bye!"||message.body === "good bye"||message.body === "good bye!"||message.body === "Bye!"||message.body === "Bye"||message.body === "Good bye"||message.body === "tam biet"||message.body === "Bye nha"||message.body === "pye"||message.body === "bye nha") { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Ok. Goodbye ban :)", message.threadID);
			return;
		}
		else if(message.body === 'ban ten gi' ||message.body === 'Ten ban la gi'||message.body === 'ban ten la gi' ||message.body === 'Bạn tên là gì?'||message.body === 'Bạn tên là gì nhỉ?'||message.body === 'bạn tên là gì?'||message.body === 'bạn tên là gì nhỉ?'||message.body === 'tên bạn là gì?'||message.body === 'Tên bạn là gì?'||message.body === 'Bạn tên gì?'||message.body === 'Bạn tên gì'||message.body === 'bạn tên gì'||message.body === 'tên bạn là gì'||message.body === 'Tên  bạn là gì'||message.body === 'ten ban la gi') { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Mình tên là Shana , Là bot AI của a Tachibana ạ:)", message.threadID);
			return;
		}
		 else if (message.senderID==="id_loại_trừ_1"||message.senderID==="id_loại_trừ_2") {			 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			return;
		}
		 else if (message.senderID==="id_loại_trừ_1"||message.senderID==="id_loại_trừ_2") {			 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			return;
		}else if (message.body)
		{
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			request(botkey + encodeURI(message.body),  
			function(error, response, body)
			{  
				if (error) api.sendMessage("Tao đang đơ, không trả lời được :)", message.threadID);
		var ans = JSON.parse(body);
				if (ans.result == "100")
				{
					SimsimiAnswered = ans.response;
					api.sendMessage(SimsimiAnswered+"!", message.threadID);
					api.markAsRead(message.threadID);
					console.log("Answered:"+SimsimiAnswered);
					return;
				}
				if (body.indexOf("502 Bad Gateway") > 0 || body.indexOf("response") < 0)
					api.sendMessage("Huhuhu chán quá ;)", message.threadID 
				);
			});
		}
	});
})
