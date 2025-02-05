// components/Algorithm.js

export function multiply(factor1, factor2) {
    const results = [];
    let bitLength;

    if (Math.abs(factor1) > Math.abs(factor2)) {
        bitLength = Math.log(Math.abs(factor1)) / Math.log(2);
    } else {
        bitLength = Math.log(Math.abs(factor2)) / Math.log(2);
    }
    bitLength++;

    let a = pad(0, bitLength);
    let q = twosComplement(factor2, bitLength);
    let q1 = '0';
    let m = twosComplement(factor1, bitLength);

    results.push({ a, q, q1, m, log: 'Intial value' });

    for (let i = 0; i < bitLength; i++) {
        if (q1 === '0' && q.substring(q.length - 1) === '1') {
            let tempA = parseInt(a, 2);
            let tempM = parseInt(m, 2);

            tempA = tempA - tempM;
            a = twosComplement(tempA, bitLength);

            results.push({ a, q, q1, m, log: 'A = A - M  ∵Q(0)Q(-1) = 10' });
        } else if (q1 === '1' && q.substring(q.length - 1) === '0') {
            let tempA = parseInt(a, 2);
            let tempM = parseInt(m, 2);

            tempA = tempA + tempM;
            a = twosComplement(tempA, bitLength);
            a = a.substring(a.length - bitLength);

            results.push({ a, q, q1, m, log: 'A = A + M  ∵Q(0)Q(-1) = 01' });
        }

        q1 = q.substring(q.length - 1);
        q = a.charAt(a.length - 1) + q.substring(0, q.length - 1);
        a = a.charAt(0) + a.substring(0, a.length - 1);

        results.push({ a, q, q1, m, log: 'ASR' });
    }

    return results;
}

function twosComplement(number, bitLength) {
    if (number < 0) {
        let bin = number.toString(2);
        bin = pad(bin.substring(1), bitLength);
        bin = bin.replace(/1/g, 'x').replace(/0/g, '1').replace(/x/g, '0');
        number = parseInt(bin, 2) + 1;
        bin = number.toString(2);
        return pad(bin, bitLength);
    } else {
        return pad(number.toString(2), bitLength);
    }
}

function pad(number, length) {
    let str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}
