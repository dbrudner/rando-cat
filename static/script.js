const elipses = document.querySelector("#elipses");

const animateElipses = setInterval(() => {
	elipses.innerHTML = elipses.innerHTML + ".";
}, 500);

const getNewCat = document.querySelector(".get-new-cat");

(async () => {
	const res = await fetch("/search?term=cat");
	const data = await res.json();
	const newImg = document.createElement("img");
	const newDiv = document.createElement("div");

	newDiv.classList.add("cat-img-container");

	newImg.src = data.img;
	newImg.alt = "cat lol";

	newDiv.appendChild(newImg);

	document.querySelector("#getting-cat").innerHTML = "";
	document.querySelector("#cat").appendChild(newDiv);

	clearInterval(animateElipses);
	getNewCat.classList.remove("hide");
})();
