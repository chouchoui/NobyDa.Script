/*
bilibili remove some account modules. by onewayticket255

QX:
^https://app.bilibili.com/x/v2/account/mine\?access_key url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/bilibiliAccount.js

Surge4：
http-response ^https://app.bilibili.com/x/v2/account/mine\?access_key requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/bilibiliAccount.js

Surge & QX MITM = app.bilibili.com
*/

let blacklist = ["创作中心", "宅家挑战赛"];

let body = $response.body;
body = JSON.parse(body);

let sections = body["data"]["sections"];

sections = sections.filter(s => !blacklist.includes(s.title));

body["data"]["sections"] = sections;
body = JSON.stringify(body);

$done({body})
