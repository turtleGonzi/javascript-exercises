const findTheOldest = function(ppl) {
    const modifPpl = ppl.map((person)=>{
        if(!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear();
        return  ({[`name`]: person.name,[`year`]: person.yearOfDeath - person.yearOfBirth}); 
    });
  
  
    const sortPpl = modifPpl.sort((a, b) => {
      return b.year - a.year;
    });
  
    return sortPpl[0];
  }

// Do not edit below this line
module.exports = findTheOldest;
