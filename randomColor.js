const spanColor = document.querySelector(".span-color");
const btnColorChange = document.querySelector(".btn-color");

const hexCombinations = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandomNumber = () => {
	return Math.floor(Math.random() * hexCombinations.length);
};

btnColorChange.addEventListener("click", () => {
	let hexColor = "#";
	for (let i = 0; i < 6; i++) {
		hexColor += hexCombinations[getRandomNumber()];
	}
	spanColor.textContent = hexColor;
	document.body.style.background = hexColor;
});
