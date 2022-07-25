function wIluDomachBylMikolaj() {
	console.time('czas');

	const inputFile = document.querySelector('.inputFile');

	inputFile.addEventListener('change', () => {
		const fileReader = new FileReader();
		fileReader.onload = (e) => {
			const array = e.target.result.split('\n');
			let text = array.toString();

			let x = 0;
			let y = 0;
			let houses = {};
			let movement_key = x.toString() + ':' + y.toString();
			for (let i = 0; i < text.length; i++) {
				if (text.charAt(i) == '^') {
					y += 1;
				} else if (text.charAt(i) == 'v') {
					y -= 1;
				} else if (text.charAt(i) == '>') {
					x += 1;
				} else if (text.charAt(i) == '<') {
					x -= 1;
				}
				movement_key = x.toString() + ':' + y.toString();

				houses[movement_key] = 1;
			}
			console.log(Object.keys(houses).length);
		};
		fileReader.readAsText(inputFile.files[0], 'UTF-8');
	});
	console.timeEnd('czas');
}

wIluDomachBylMikolaj();
