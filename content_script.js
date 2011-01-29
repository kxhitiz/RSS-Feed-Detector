
document.body.style.backgroundColor='red';
var length=document.links.length;

var link_stack = new Array();
var i=0;
for (i=0; i < length; i++)
{
	link_stack[i]=document.links[i].href;
}


chrome.extension.sendRequest({'weblinks': link_stack}, function(response) {
  console.log(response.farewell);
})
