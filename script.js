// Select and highlight element
function select(el) {
	// Remove active class from previous elements
	document.querySelector(".navsearch").classList.remove("active")
	document.querySelector(".active").classList.remove("active")
	
	// Add active class to current element
	el.classList.add("active")
	
	// Update CSS variable with selected element's data-clr attribute
	document.body.style.setProperty('--activeclr', el.dataset.clr);
}

// Toggle selectsearch function
function selectsearch() {
	console.log("select")
	const el = document.querySelector(".navsearch")
	el.classList.toggle("active")
	if (el.classList.contains("active")) {
		document.querySelector(".searchbox").focus()
	}
}