const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=") {
    try {
      output = eval(output);
    } catch (error) {
      output = "Error";
    }
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.slice(0, -1);
  } else {
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

document.addEventListener("keydown", (e) => {
  const keyPressed = e.key;

  calculate(keyPressed);
});