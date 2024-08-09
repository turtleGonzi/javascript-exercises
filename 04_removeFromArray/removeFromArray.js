const removeFromArray = function(arrs, ...nums) {
    let newArr = [];
    for(const arr of arrs){
        if(!nums.includes(arr)){
            newArr.push(arr);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
