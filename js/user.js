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
			getPhotos(data.photos);
		});
};

fetchData();

const wrapperDiv = document.querySelector(".wrapper");

const getPhotos = (images) => {
	images.map((image) => {
		cardTag = `<div class="card">
              		<img src=${image.src.landscape} />
						<p class="author">Author: ${image.photographer}</p>
						<p class="id_pic">Picture ID: ${image.id}</p>
						<p class="color">Avg color: ${image.avg_color}</p>
					  </div>`;
		wrapperDiv.innerHTML += cardTag;
	});
};
