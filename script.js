const fs = require('fs');
  
let data = 
  "App Name: UniWise \nCategory: Education \nDeveloper: OGO Studio \nInstitution: Buffalo City Public Tvet (BCC)";
  
fs.writeFile("campus_cup.txt", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written successfully");
  }
});


fs.readFile('campus_cup.txt', (err, data) => {
  if (err) {
    console.log(err);
  } else {
  console.log(data.toString());
  }
});