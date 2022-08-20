var elButton = document.querySelector('#button');
var elBody = document.querySelector('body');

elButton.addEventListener('click', function () {
	elBody.classList.toggle('dark');
});
