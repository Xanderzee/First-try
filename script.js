// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
function cleardigit() {
    const input = document.getElementById("result");
    input.value = input.value.substring(0, input.value.length - 1);
}
// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}