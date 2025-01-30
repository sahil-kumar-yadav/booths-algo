// boothsAlgorithm.js

export function boothsAlgorithm(multiplicand, multiplier, bits = 8) {
    let M = parseInt(multiplicand, 2);
    let Q = parseInt(multiplier, 2);
    let A = 0;
    let Q1 = 0;
    let count = bits;
  
    let log = [];
  
    while (count > 0) {
        let step = {
            A: A.toString(2).padStart(bits, '0'),
            Q: Q.toString(2).padStart(bits, '0'),
            Q1: Q1,
            operation: '',
        };
  
        let lastTwoBits = (Q & 1) + (Q1 * 2);
  
        if (lastTwoBits === 1) {
            A -= M;
            step.operation = 'A = A - M';
        } else if (lastTwoBits === 2) {
            A += M;
            step.operation = 'A = A + M';
        }
  
        step.A_after = A.toString(2).padStart(bits, '0');
  
        let shiftedBit = A & (1 << (bits - 1));
        Q1 = Q & 1;
        Q = (Q >> 1) | shiftedBit;
        A = (A >> 1) | shiftedBit;
  
        step.A_final = A.toString(2).padStart(bits, '0');
        step.Q_final = Q.toString(2).padStart(bits, '0');
        log.push(step);
  
        count--;
    }
  
    const result = A.toString(2).padStart(bits, '0') + Q.toString(2).padStart(bits, '0');
  
    return { result, steps: log };
}
