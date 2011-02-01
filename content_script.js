
var length=document.links.length;

var link_stack = new Array();
var i=0;
var k=0;
for (i=0; i < length; i++)
{
	var temp=document.links[i].href;
	var temp1= new Array();
	temp1=temp.split(".");
	var temp2;
	for (var j=0; j < temp1.length;j++)
	{
		temp2=temp1[j];
	}
	if (temp2== "xml")	
	{
		link_stack[k]=document.links[i].href;
		k++;
	}
}


chrome.extension.sendRequest({'weblinks': link_stack}, function(response) {
  console.log(response.farewell);
})
