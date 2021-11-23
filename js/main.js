// Register, store data in localstorage

const storeData = () => {
	const data = document.forms["reg_form"];
	const email = data[0].value;
	const conf_email = data[1].value;
	const username = data[2].value;
	const password = data[3].value;

	//check if the email are the same
	if (email !== conf_email) {
		console.log("Email should be the same!");
	}

	let key = localStorage.length + 1;

	const obj = {
		username: username,
		email: email,
		password: password.hashCode(),
	};

	for (let i = 0; i < localStorage.length; i++) {
		const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
		if (obj.email === item.email) {
			console.log("Juz jest takie konto takiej nazwie maila");
			info("Juz jest takie konto takiej nazwie maila");
			return false;
		} else if (obj.username === item.username) {
			console.log("Juz jest takie konto o takiej nazwie usera");
			info("Juz jest takie konto o takiej nazwie usera");
			return false;
		} else {
			console.log("Poprawie dodany user");
			localStorage.setItem(key, JSON.stringify(obj));
			return true;
		}
	}
	if (localStorage.length === 0) {
		localStorage.setItem(key, JSON.stringify(obj));
	}
};

const setAction = (form) => {
	storeData();
	let bool = storeData;
	if (bool) {
		form.action = "user.html";
	} else {
		form.action = "register.html";
		document.querySelector(".signup--box").reset();
		return false;
	}
	return true;
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

const hashCode = (s) =>
	s.split("").reduce((a, b) => {
		a = (a << 5) - a + b.charCodeAt(0);
		return a & a;
	}, 0);

export default { info };
