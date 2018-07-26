
var a=prompt("Enter a Number");
var num=parseInt(a);
var fru=[];
var te="<ul>";
for(var i=0;i<num;i++)
{
fru[i]=prompt("enter a string");
}
for(var k=0;k<num;k++)
{
	te+="<li>" +fru[k] + "</li>";
}
document.getElementById("e").innerHTML=te;
var x=fru.pop();
alert(x);
alert(fru.length);
fru.push("mental");
delete fru[0];
for(var j=0;j<fru.length;j++)
{
	alert(fru[j]);
}