var mass;
var height;
var markBMI;
var johnBMI;
var markHigherBMI;

//DATA 1
console.log("DATA 1");
mass = 78;
height = 1.69;
markBMI = mass / height ** 2;
console.log("Marks weights 78 kg and is 1.69 m tall. BMI: ",markBMI);
mass = 92;
height = 1.95;
johnBMI = mass / height ** 2;
console.log("John weights 92 kg and is 1.95m tall. BMI: ",johnBMI);
markHigherBMI = markBMI > johnBMI
console.log("Mark higher than John?: ", markHigherBMI);


//DATA 2
console.log("\n\n");
console.log("DATA 2");
mass = 95;
height = 1.88;
markBMI = mass / height ** 2;
console.log("Marks weights 95 kg and is 1.88 m tall. BMI: ",markBMI);
mass = 85;
height = 1.76;
johnBMI = mass / height ** 2;
console.log("John weights 85 kg and is 1.76m tall. BMI: ", johnBMI);
markHigherBMI = markBMI > johnBMI
console.log("Mark higher than John?: ", markHigherBMI);
 
