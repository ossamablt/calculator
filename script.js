const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "error 🤦🏾 ";
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
}
