//your JS code here. If required.
let newString = "Entered Metaverse"
function changeString(){
	let para = document.getElementById("status")
	let head = document.createElement("h1")
	para.innerText = `${newString}`
	head.textContent = para.textContent
	para.parentNode.replaceChild(head, para);
	// para.innerText = `${newString}`
	// para.style.fontWeight = "bold"
	// para.style.fontSize = "28px"
	
}