export function printedText () {
	let texts = document.querySelectorAll('.printed-text');

	window.addEventListener('scroll', function () {
		for (let i = 0; i < texts.length; i++) {
			let pos = texts[i].getBoundingClientRect().top; // Позиция блока, считая сверху окна
			let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
			if (texts[i].parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('active') && pos < win) {
				texts[i].classList.add('active');
			}
		}
	});
}