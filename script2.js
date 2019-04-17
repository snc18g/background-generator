select1=document.querySelector("#col1");
select2=document.querySelector("#col2");
textdisp=document.querySelector("#gradient");
body=document.querySelector("body");

function addGradient(){
	body.style.background="linear-gradient(to right,"+select1.value+","+select2.value+")";
	textdisp=body.style.background+";";
}

select1.addEventListener("input",addGradient);

select2.addEventListener("input",addGradient)
