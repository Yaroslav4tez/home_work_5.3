let input = prompt('Your number');

if (input === null || input.trim() === "" || isNaN(Number(input)) || input.startsWith("0") || !/^\d+$/.test(input)) {
    console.log('Please enter only valid natural numbers without leading 0.');
} else {
    let n = Number(input);
    for (let i = 1; i <= 100; i++) {
        let sq = i * i;
        if (sq <= n) {
            console.log(`Number ${i} its square ${sq}, which is not biges than ${n}`);
        }
    }
}