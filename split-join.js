// Using split and slice 
/* const gaan = "tumi bandhu kala pakhi , ami jeno ki , bosonto kale tomay bolte pari  ni, sada sada kala kala , rong jeomese sada kala, hoisi ami mon pagela , bosonto kale"

const parts = gaan.split(" ");
const sentence = gaan.split(",");

console.log(parts);
console.log(sentence);
 */


/* Join  */

const line =[
    "tumi bandhu kala pakhi",
    "ami jeno ki",
    "bosonto kale tomay bolte pari  ni",
    "sada kala kala",
    "rong jeomese sada kala",
    "hoisi ami mon pagela",
    "bosonto kale"

]

const newSong = line.join(" , ");
console.log(newSong);