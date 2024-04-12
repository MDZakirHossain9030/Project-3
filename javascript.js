
//work of searchbox
try{	
document.querySelector(".searchbar").addEventListener("click",function(){
	document.querySelector(".searchBox").classList.toggle("active")
})
}
catch(err){
		console.log(err)
}

//work trolly icon
try{
document.querySelector(".trolley").addEventListener("click",function(){
	document.querySelector(".fruitContent").classList.toggle("active")
})
}
catch(err){
	console.log(err)
}

//work man icon
try{
document.querySelector(".boy").addEventListener("click",function(){
	document.querySelector(".loginForm").classList.toggle("active")
})	
}
catch(err){
	console.log(err)
}
