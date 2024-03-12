//MIT TASK L

function reverseSentence(str: string): string {
    const words = str.split(" ");
    const reversedSentence = words.map(word => {
      return word.split("").reverse().join("");
    }).join(" ");

    return reversedSentence;
}

const reversed = reverseSentence("we like coding!");
console.log(reversed);