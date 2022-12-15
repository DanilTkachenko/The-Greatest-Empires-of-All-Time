export function outNum() {

		let counters = document.querySelectorAll('.counter');
		let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится
		window.addEventListener('scroll', function () {
			if (limit == counters.length) { return; }

			for (let i = 0; i < counters.length; i++) {
				let pos = counters[i].getBoundingClientRect().top; // Позиция блока, считая сверху окна
				let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
				if (pos < win && counters[i].dataset.stop === "0") {
					counters[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
					let x = 0;
					limit++; // Счетчик будет запущен, увеличиваем переменную на 1
					let int = setInterval(function () {
						// Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
						x = x + Math.ceil(counters[i].dataset.to / 50);
						counters[i].innerText = x;
						if (x > counters[i].dataset.to) {
							// Как только досчитали - стираем интервал
							counters[i].innerText = counters[i].dataset.to;
							clearInterval(int);
						}
					}, 60);
				}
			}
		});
	};




















	/*
	let nums = document.querySelectorAll('.empire__statistics-counter');
	const time = 1000; // ms
	const step = 1;

	function outNum(elem) {
		let l = document.querySelectorAll('.' + elem);
		for (let num of nums) {
			let n = 0;
			let t = Math.round(time / (num / step));
			let interval = setInterval(() => {
				n = n + step;
				if (n == num.dataset.counter) {
					clearInterval(interval);
				}
				num.innerHTML = n;
			},
				t);
		}
	}

	outNum('empire__statistics-counter');
}
*/