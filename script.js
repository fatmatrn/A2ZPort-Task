
const countVowels = (word) => {
    const vowel = "aeiouAEIOU";

    const arrayWord = word.split('');
    
    return arrayWord.filter(ch => vowel.includes(ch)).length;
  };
  

  const getLongestWord = (sentence) => {
    const words = sentence.split(/\s+/); 
    
    return words.reduce((longest, word) => {
      word = word.replace(/[^a-zA-Z]/g, ''); 
      return (word.length > longest.length ||
         (word.length === longest.length && 
            countVowels(word) > countVowels(longest))) 
            ? word : longest;
    }, '');
  }



  
  const sentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
  const longest = getLongestWord(sentence);
  console.log("Longest word:", longest);



  
  