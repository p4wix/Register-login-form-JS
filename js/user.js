const API_KEY = "563492ad6f9170000100000162e5268ffc34430ab040bb4208dc4d2f";
const baseURL = "https://api.pexels.com/v1/search?query=landscape";

const fetchData = () => {
	fetch(baseURL, {
		headers: {
			Authorization: API_KEY,
		},
	})
		.then((resp) => {
			return resp.json();
		})
		.then((data) => {
			console.log(data.photos);
			renderMarkup(data.photos);
		});
};

const wrapperDiv = document.querySelector(".wrapper");
let divCards;

const renderMarkup = (images) => {
	wrapperDiv.innerHTML = images
		.map(
			(image) =>
				`<div class="card">
					<img src=${image.src.landscape}/>
	 				<div class="card_text">
		 				<p class="author">Author: ${image.photographer}</p>
		 				<p class="id_pic">Picture ID: ${image.id}</p>
		 				<p class="color">Avg color: ${image.avg_color}</p>
	 				</div>
				</div>`
		)
		.join("");
	divCards = document.querySelectorAll(".card");
	divCards.forEach((item) => {
		item.addEventListener("click", () => item.classList.toggle("show"));
	});
};

window.onload = () => {
	fetchData();
};
