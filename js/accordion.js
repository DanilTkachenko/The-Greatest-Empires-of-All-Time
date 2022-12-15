export function accordion () {
	let titles = document.querySelectorAll('.empire__name');
	let blocks = document.querySelectorAll('.empire');

	for (let i = 0; i < titles.length; i++) {
		titles[i].addEventListener('click', open);

		function open(event) {
			for (let i = 0; i < titles.length; i++) {
				blocks[i].classList.remove('active');
				if (titles[i] == event.currentTarget) {
					blocks[i].classList.toggle('active');
				}
			}

		}

	}
}