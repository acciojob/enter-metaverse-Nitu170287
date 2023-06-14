//your JS code here. If required.
let newString = "Entered Metaverse"
function changeString(){
	let para = document.getElementById("status")
	let head = document.createElement("h1")
	
	head.innerText = `${newString}`
	//head.textContent = para.textContent
	para.innerText =""
	para.appendChild(head)
	// para.innerText = `${newString}`
	// para.style.fontWeight = "bold"
	// para.style.fontSize = "28px"
	
}