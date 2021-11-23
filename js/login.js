import { info } from "./main";

const checkToLogIn = () => {
	const data = document.forms["log_form"];

	const username = data[0].value;
	const password = data[1].value;

	for (let i = 0; i < localStorage.length; i++) {
		const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
		if (username === item.username) {
			if (password.hashCode() === item.password) {
				// zaloguj sie
				return true;
			} else {
				info("Invalid password");
				return false;
			}
		} else {
			info("Invalid ussername or password");
			return false;
		}
	}
};

const info = (text) => {
	const infoDiv = document.querySelector(".info");
	infoDiv.style.textAlign = "center";
	infoDiv.style.color = "#f00";
	infoDiv.textContent = text;
	setTimeout(() => {
		infoDiv.textContent = "";
	}, 2000);
};

const setAction = (form) => {
	bool = checkToLogIn();
	if (bool) {
		form.action = "user.html";
		return true;
	} else {
		form.action = "login.html";
		document.querySelector(".login--box").reset();
		return false;
	}
};

String.prototype.hashCode = function () {
	let hash = 0,
		i,
		chr;
	if (this.length === 0) return hash;
	for (i = 0; i < this.length; i++) {
		chr = this.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
};
