"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ext = ext;
function ext(number) {
    const units = [
        'zero', 'um', 'dois', 'três', 'quatro',
        'cinco', 'seis', 'sete', 'oito', 'nove'
    ];
    return units[number];
}
console.log(ext(0));
