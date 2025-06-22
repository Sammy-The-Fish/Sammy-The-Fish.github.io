// const target = document.getElementById("lever-pos");

const targets = document.getElementsByClassName("lever-guide-window");
const text = document.getElementsByClassName("lever-text");

console.log(text);

let target = targets.item(0);

let index = 0;

const lever = document.getElementById("lever");
const area = document.getElementById("game-container");

const leverButton = document.getElementById("lever-head");

const totalContainer = document.getElementById("total-container");

let clickable = true;

let locked = true;

let x = 0,
	y = 0;

let total = 0;

function follow(time = 0) {
	console.log("test");
	const rect = targets[index].getBoundingClientRect();

	const targetX = rect.left;

	console.log(time);
	const length = 100;

	console.log(easeInOutQuint(time / length));

	console.log(easeInOutQuint(time / length) * (targetX - x));

	// Lerp toward target position
	current_x = x + easeInOutQuint(time / length) * (targetX - x);
	console.log(x);

	lever.style.transform = `translate(${current_x}px, ${0}px)`;

	if (time >= length) {
		finishUp();
		return;
	}

	time++;
	requestAnimationFrame((t) => follow(time));
}

function easeInOutQuint(x) {
	return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

function finishUp() {
	locked = true;
	clickable = true;
}

function directFollow() {
	if (locked) {
		const rect = targets[index].getBoundingClientRect();

		const targetX = rect.left;

		x = targetX;

		lever.style.transform = `translate(${targetX}px, ${0}px)`;
	}

	requestAnimationFrame(directFollow);
}

directFollow();

leverButton.addEventListener("click", () => {
	if (clickable) {
		clickable = false;
		rotateLever(70, -70, simulateNumberGeneration);
	}
});

function simulateNumberGeneration(time = 0) {
	if (time % 5 == 0) {
		console.log(time);

		number = ((Math.random() * 40) / 10).toString().slice(0, 3);
		text.item(index).textContent = number;
	}

	time++;

	if (time >= 200) {
		total = total + parseFloat(number);
		requestAnimationFrame((t) => rotateLever(-70, 70, incrementIndex));
		return;
	}

	requestAnimationFrame((t) => simulateNumberGeneration((time = time)));
}

function incrementIndex() {
	if (index >= 2) {
		finalLeverPulled();
		return;
	}
	locked = false;

	index++;

	requestAnimationFrame((t) => follow());
}

function finalLeverPulled() {
	locked = true;
	totalContainer.innerHTML = `			<div class="total-padding">
				<h1 class="total"><u>total: </u>${total.toString().split(0,3)}</h1>
				<a class="reset-link" href="./index.htm">reset</a>
			</div>`;
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: "smooth",
	});
}

function rotateLever(
	startRotation,
	endRotation,
	endCall = () => {},
	rotated = 0
) {
	if (startRotation < endRotation) {
		if (startRotation + rotated >= endRotation) {
			requestAnimationFrame((t) => endCall());
			return;
		}
	}
	if (startRotation > endRotation) {
		if (startRotation + rotated <= endRotation) {
			requestAnimationFrame((t) => endCall());
			return;
		}
	}

	let delta = startRotation >= endRotation ? -1 : 1;

	rotated += delta * 2;

	leverButton.style.transform = `rotate(${startRotation + rotated}deg)`;

	requestAnimationFrame((t) =>
		rotateLever(startRotation, endRotation, endCall, rotated)
	);
}

// let testing_timer = 0
// function test() {
//     testing_timer++
//     console.log(testing_timer)
//     if (testing_timer == 100){
//         target = targets.item(1)
//     } else if (testing_timer == 200) {
//         target =targets.item(2)
//     } else if (testing_timer == 300) {
//         target = targets.item(0)
//         testing_timer = 0
//     }
//     requestAnimationFrame(test)
// }
// test()
