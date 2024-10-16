export function ext(number: number): string {
    const units = [
        'zero', 'um', 'dois', 'três', 'quatro',
        'cinco', 'seis', 'sete', 'oito', 'nove'
    ];

    return units[number];
}

console.log(ext(0)); 