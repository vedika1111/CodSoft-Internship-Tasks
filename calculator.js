function Evaluate(val) {
    var v = document.getElementById('result');
    v.value += val;
 }
 function Result() {
    var n1 = document.getElementById('result').value;
    try {
       var n2 = eval(n1.replace('x', '*'));
       document.getElementById('result').value = n2;
    } catch {
       document.getElementById('result').value = 'Error';
    }
 }
 function Clear() {
    var ip = document.getElementById('result');
    ip.value = '';
 }
 function Delete() {
    var ev = document.getElementById('result');
    ev.value = ev.value.slice(0, -1);
 }
 document.addEventListener('keydown', function (event) {
    const key1 = event.key1;
    const VKeys = '0123456789+-*/.%';
    if (VKeys.includes(key1)) {
       Evaluate(key1 === '*' ? 'x' : key1);
    } else if (key1 === 'Enter') {
       Result();
    } else if (key1 === 'Backspace') {
       Delete();
    } else if (key.toLowerCase() === 'c') {
       Clear();
    }
 });
