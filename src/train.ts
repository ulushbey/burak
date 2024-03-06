//MIT TASK I

function getDigits(str: string): string {
    let a: string = '';

    for (let i: number = 0; i < str.length; i++) {
        if (!isNaN(Number(str[i]))) {
            a += str[i];
        }
    }

    return a;
}

console.log(getDigits("m14i1td"));