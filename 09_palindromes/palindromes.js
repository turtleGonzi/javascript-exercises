const palindromes = function (word) {
    const arrWord = word.toLowerCase().split('');
    const filtredArr = arrWord.filter((letter)=>{
        return (letter !== "!" && letter !== "?" && letter !== "." && letter !== " " && letter !== ",") ? letter : '';
    })
    const filtredWord = filtredArr.join('');
    const backwardsWord = filtredArr.reverse().join('');
    return (filtredWord === backwardsWord) ? true : false;
  };

// Do not edit below this line
module.exports = palindromes;
