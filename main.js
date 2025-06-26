let input = prompt('Your number');

if (input === null || input.trim() === "" || !Number.isInteger(Number(input)) || Number(input) <= 0) {
    console.log('Please enter only valid natural numbers without leading 0.');
} else {
    input = input.trim();
    const n = Number(input);
    for (let i = 1; i <= 100; i++) {
        const sq = i * i;
        if (sq <= n) {
            console.log(`Number ${i} its square ${sq}, which is not biges than ${n}`);
        } 
    } 
    
}