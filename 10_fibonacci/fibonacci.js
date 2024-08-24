const fibonacci = function(numb) {
    const num = (typeof numb === "number") ? numb : Number(numb);
    if(num < 0) return 'OOPS';
    const arr = [0];
    for(let i = 1; i <= num; i++){
        if (i===1) arr.push(1)
        else {
        arr.push(arr.at(-1) + arr.at(-2))
        }
    }
    return arr.at(-1);
  };

// Do not edit below this line
module.exports = fibonacci;
