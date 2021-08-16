function Fibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
function getFibonacciList(number) {
    var fibonacciList = [1];
    if (number != 1) {
        for (var i = 2; i <= number; i++) {
            fibonacciList.push(Fibonacci(i));
        }
    }
    return fibonacciList;
}
function Sum(n) {
    var sum = 0;
    for (var i = 0; i < n.length; i++) {
        sum += n[i];
    }
    return sum;
}
console.log(getFibonacciList(5));
console.log("S\u1ED1 fibonacci \u1EDF v\u1ECB tr\u00ED th\u1EE9 5 : " + Fibonacci(5));
console.log("t\u1ED5ng 5 s\u1ED1 fibonacci \u0111\u1EA7u ti\u00EAn l\u00E0 : " + Sum(getFibonacciList(5)));
