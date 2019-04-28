// 1、利用xhr的mimeType
$.ajax({
  beforeSend: function(xhr) {
    xhr.overrideMimeType("text/csv;charset=gb2312");
  }
});

// 2、设置请求响应格式为ArrayBuffer，利用TextDecoder
$http({
  method: "POST",
  responseType: "arraybuffer",
  url: "restcater/cenchain/findCenChain",
  data: branchlist
});
var x = new Uint8Array(resp.data);
var str = new TextDecoder("gbk").decode(x);


// 3、利用第三方库 Text-Encoding
// https://github.com/inexorabletash/text-encoding
var uint8array =  new TextEncoder("gbk",{ NONSTANDARD_allowLegacyEncoding: true }).encode(string);
 // 放入blob中准备上传
var blob=new Blob([uint8array],{type:"text/plain"});
