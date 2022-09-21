// happy coding 👻
function isPrime(number: number): boolean {
    let prime: boolean = true;
    if (number < 2) {
        prime = false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                prime = false;
                break;
            }
        }
    }
    return prime;
}

let array: Array<number> = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
let sum: number = 0;

array.forEach(element => {
    if (isPrime(element)) {
        sum += element
    }
})

console.log(sum);