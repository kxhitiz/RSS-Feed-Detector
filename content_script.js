
document.body.style.backgroundColor='red';
//document.write("G");
var link=document.links[1].href;

chrome.extension.sendRequest({'greeting': link}, function(response) {
  console.log(response.farewell);
})
