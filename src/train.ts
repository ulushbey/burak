//MIT TASK K

function countVowels(str: string): number {
    str = str.toLowerCase();
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    const vowelArray : string[] = str.split('').filter(x  => vowels.includes(x));
    return vowelArray.length;
}

console.log(countVowels("Ulugbek")); 

