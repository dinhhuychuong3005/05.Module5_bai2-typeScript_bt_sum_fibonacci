function Fibonacci(n: number): number{
    if (n <= 2) {
        return 1;
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2)
}
function getFibonacciList(number: number): number[] {
    let fibonacciList: number[] = [1]
    if (number != 1) {
        for (let i = 2; i <= number; i++) {
            fibonacciList.push(Fibonacci(i));
        }
    }
    return fibonacciList;
}
function Sum(n: number[]) : number {
    let sum = 0
    for (let i = 0;i<n.length;i++) {
        sum += n[i];
    }
    return sum
}
console.log(getFibonacciList(5))
console.log(`Số fibonacci ở vị trí thứ 5 : ${Fibonacci(5)}`);
console.log(`tổng 5 số fibonacci đầu tiên là : ${Sum(getFibonacciList(5))}`);
