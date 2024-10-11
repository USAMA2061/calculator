
// var hours = document.getElementById("hour")
// var minutes = document.getElementById("sec")
// var second = document.getElementById("hour")

function Getvalue (value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}

function backspace() {
    var resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}
