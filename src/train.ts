//MIT TASK J

function findLongestWord(str: string): string {
    const words: string[] = str.split(' ');
    const longestWord: string = words.reduce((longest: string, currentWord: string) => {
        if (currentWord.length > longest.length) {
            return currentWord;
        } else {
            return longest;
        }
    }, '');

    return longestWord;
}

console.log(findLongestWord("I come from Uzbekistan ackjnckjncknakcndskcjnsjk"));
