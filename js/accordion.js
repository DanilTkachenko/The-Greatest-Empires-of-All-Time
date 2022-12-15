export function accordion () {
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
}