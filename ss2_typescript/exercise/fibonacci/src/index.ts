// happy coding 👻
function fibo(n: number):number {
    if (n==1) return 0;
    if (n==2) return 1;
    return fibo(n-1) + fibo(n-2);
}

let sum: number = 0;

for (let i = 1; i <= 10; i++) {
    sum += fibo(i);
}

console.log(sum);