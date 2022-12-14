let clicks = document.querySelectorAll('.empire__name');

for (let i = 0; i < clicks.length; i++) {
	clicks[i].onclick = function () {
		if (this.parentNode.parentNode.classList) {
			for (let j = 0; j < clicks.length; j++) {
				clicks[j].parentNode.parentNode.classList.remove('active');
			}
			this.parentNode.parentNode.classList.add('active');
		} else {
			this.active += ' ' + active;
		}
	}
}












/*
const arrows = document.querySelectorAll('.empire__name');

for (const arrow of arrows) {
	arrow.addEventListener('click', function () {
		arrow.parentNode.classList.toggle('active');

		if (!document.querySelector('.empires__content').classList.contains('active')) {
			arrow.parentNode.parentNode.parentNode.classList.toggle('active');
		} else {
			return;
		}
	});
}
*/