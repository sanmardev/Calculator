let previousValue = "";
let currentValue = "";
let operatorNow = "";

let number = document.querySelectorAll(".number")
let operator = document.querySelectorAll(".operator")
let previousScreen = document.querySelector(".previous")
let currentScreen = document.querySelector(".current")
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear")
let decimal = document.querySelector(".decimal")


//When a number button is pressed we add the number value to CurrentValue and call the function
number.forEach((button => button.addEventListener("click", function (e) {
    currentValue = e.target.textContent
    addScreen()
})))

//Same as the number.forEach but with operators button
operator.forEach((button => button.addEventListener("click", function (e) {
    operatorNow = e.target.textContent
    operateScreen()
})))

function addScreen() {
    currentScreen.textContent += currentValue
}

//The if part doesn't allow the operators to repeat themselves (+++++)
//Then we add the actual number and the operator to the previousScreen and only the value to previousvalue
//The current screen becomes blank ready to get new input from user
function operateScreen() {
    if (!previousScreen.textContent.includes("+") && !previousScreen.textContent.includes("-") && !previousScreen.textContent.includes("x") && !previousScreen.textContent.includes("/")) {
        previousScreen.textContent += currentScreen.textContent + operatorNow;
        previousValue = currentScreen.textContent
        currentScreen.textContent = "";
    }
}

//The logic of the calculator. Depending on the operator it will add, substract... the numbers that were added.
equal.addEventListener("click", function () {
    currentValue = currentScreen.textContent;
    if (operatorNow === "+") {
        let numa = Number(previousValue);
        let numb = Number(currentValue);
        previousScreen.textContent += currentScreen.textContent
        currentScreen.textContent = numa + numb
        previousScreen.textContent = "";
    }
    if (operatorNow === "-") {
        let numa = Number(previousValue);
        let numb = Number(currentValue);
        previousScreen.textContent += currentScreen.textContent
        currentScreen.textContent = numa - numb
        previousScreen.textContent = "";
    }
    if (operatorNow === "x") {
        let numa = Number(previousValue);
        let numb = Number(currentValue);
        previousScreen.textContent += currentScreen.textContent
        currentScreen.textContent = numa * numb
        previousScreen.textContent = "";
    }
    if (operatorNow === "/") {

        let numa = Number(previousValue);
        let numb = Number(currentValue);
        previousScreen.textContent += currentScreen.textContent
        currentScreen.textContent = numa / numb
        previousScreen.textContent = "";
    }

    if (currentScreen.textContent === "NaN") {
        currentScreen.textContent = "Please stop trying to break my calculator!"
    }
})

clear.addEventListener("click", function () {
    currentValue = "";
    previousValue = "";
    currentScreen.textContent = "";
    previousScreen.textContent = "";
})

//Adds one dot to the screen and value. Only allows one dot
decimal.addEventListener("click", function () {
    if (!currentValue.includes(".")) {
        currentValue += "."
        currentScreen.textContent += "."
    }
})