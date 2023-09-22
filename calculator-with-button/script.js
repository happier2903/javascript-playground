let currentInput = '';
        
function append(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearAll() {
    currentInput = '';
    document.getElementById('result').value = '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        document.getElementById('result').value = currentInput;
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}