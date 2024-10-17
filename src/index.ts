export function ext(number: number): string {
    const units = [
        'zero', 'um', 'dois', 'três', 'quatro',
        'cinco', 'seis', 'sete', 'oito', 'nove'
    ];

    if (number < 0 && number > 9){
        return ""
    }

    return units[number];
}

console.log(ext(0)); 