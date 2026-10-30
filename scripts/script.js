/* 
Student Name: Zacheriah Garcia
File Name: script.js
Date: October 21, 2026
*/

//Hamburger menu function 
function hamburger() {
	var menu = document.getElementById("menu-link");
	var logo = document.getElementById("clubs-text-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "block";
	} else { 
		menu.style.display = "block";
		logo.style.display = "none";
	}
}