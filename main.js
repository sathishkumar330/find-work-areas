var sex=prompt("Enter the sex");
var age=prompt("Enter the age");
var marital=prompt("Enter Yes/no");

if(sex=="Female"){
	console.log("You work only urban areas");
}
else if((sex=="Male") && (age>20) && (age<=40))
{
	console.log("You work anywhere");
}
else if((sex=="Male") && (age>40) && (age<=60))
{
	console.log("You work only urban areas");
}
else{
	console.log("ERROR");
}