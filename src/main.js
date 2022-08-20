const elButton = document.querySelector('#button');
const elBody = document.querySelector('body');
const elList = document.querySelector('.card-list');
const elTemplate = document.querySelector('.card-template').content;
const elSearchInput = document.querySelector('#search-input');
const elSelect = document.querySelector('#filter-select');

elButton.addEventListener('click', function () {
	elBody.classList.toggle('dark');
});

function getData(array, node) {
	node.innerHTML = '';
	array.forEach((item) => {
		const newTemplate = elTemplate.cloneNode(true);

		newTemplate.querySelector('.card-title').textContent = item.name.common;
		newTemplate.querySelector('.card-img').src = item.flags.png;
		newTemplate.querySelector('.card-img').alt = item.name.official;
		newTemplate.querySelector('.card-population').textContent = item.population;
		newTemplate.querySelector('.card-capital').textContent = item.capital;
		newTemplate.querySelector('.card-region').textContent = item.region;

		node.appendChild(newTemplate);
	});
}

fetch('https://restcountries.com/v3.1/all')
	.then((res) => res.json())
	.then((data) => {
		if (data.length) {
			getData(data, elList);
		}
	});

elSearchInput.addEventListener('change', function (evt) {
	console.log(evt.target.value);
	if (evt.target.value.length) {
		fetch('https://restcountries.com/v3.1/name/' + evt.target.value)
			.then((res) => res.json())
			.then((data) => {
				if (data.length) {
					getData(data, elList);
				}
			});
	} else {
		fetch('https://restcountries.com/v3.1/all')
			.then((res) => res.json())
			.then((data) => {
				if (data.length) {
					getData(data, elList);
				}
			});
	}
});

elSelect.addEventListener('change', function (evt) {
	console.log(evt.target.value);
	if (evt.target.value !== 'all') {
		fetch('https://restcountries.com/v3.1/region/' + evt.target.value)
			.then((res) => res.json())
			.then((data) => {
				if (data.length) {
					getData(data, elList);
				}
			});
	} else {
		fetch('https://restcountries.com/v3.1/all')
			.then((res) => res.json())
			.then((data) => {
				if (data.length) {
					getData(data, elList);
				}
			});
	}
});
