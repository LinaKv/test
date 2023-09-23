const encode = (input) =>
    input
        .split(/(\.|-)/)
        .flatMap((el, index, array) => {
            if (el === '.') {
                return Array(parseInt(array[index + 1])).fill(1);
            } else if (el === '-') {
                return Array(parseInt(array[index + 1])).fill(0);
            }
        })
        .reduce((acc, value) => {
            if (isNaN(value)) return acc;
            if (acc.length === 0 || acc[acc.length - 1][0] !== value) {
                acc.push([value]);
            } else {
                acc[acc.length - 1].push(value);
            }
            return acc;
        }, [])
        .map((el) => {
            if (el.length === 1) {
                return '.';
            } else {
                return (el.length - 2) / 2;
            }
        })
        .join('')
        .split('.')
        .reduce((acc, cur, i, array) => {
            if (i % 2 === 0) {
                acc.push([cur, array[i + 1]]);
            }
            return acc;
        }, [])
        .sort((a, b) => {
            return a[1] - b[1];
        })
        .map((el, i) => {
            return String.fromCharCode(el[0]);
        })
        .join('');

// i love puzzles
