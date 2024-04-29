//String Assignment 

// let name1 = prompt('Enter Your First Name')
// let name2 = prompt('Enter Your last name')
// alert('Welcome '+name1+' '+name2)

// let mobileName = prompt('Enter your Mobile Name')
// document.write('<h1>','My favorite Mobile Phone Name is:',mobileName,'The length of string is:',mobileName.length,'</h1>')

// let countryName = 'Pakistani'
// document.write('<h1>','String:',countryName,'<br>','Index of "n" is:',countryName.indexOf('n'),'</h1>')


// let easy = 'Hello World'
// document.write('<h1>','String:',easy,'<br>','Last Index of "l" is:',easy.lastIndexOf('l'),'</h1>')

// let easy1 = 'Pakistani'
// document.write('<h1>','String:',easy1,'<br>','Character at Index 3 is:',easy1.charAt(3),'</h1>')


// let newName = 'Hamza'
// let newName2 = 'Aslam'
// document.write('<h1>',newName.concat(newName2),'</h1>')



// let countyName2 = 'Hyderabad';
// document.write('<h1>','City:',countyName2,'</h1>')
// for (var i = 0; i < countyName2.length; i++) {
//   if (countyName2.slice(i, i + 5) == 'Hyder') {
//     countyName2 = 'Islam' + countyName2.slice(i + 5);
//     //console.log(countyName2);
//   }
// }
// document.write('<h1>','After Replacement:',countyName2,'</h1>')

// let message = "Ali and Sami are best friends They play cricket andfootball together.";
// document.write("<h1>",message.replaceAll("and","&"),"</h1>")

// let Number4 = "472"
// document.write("<h1>","Value:",Number4 , "<br>","</h1>")
// document.write("<h1>","Type:",typeof Number4 , "<br>","</h1>")

// Number4 = 472
// document.write("<h1>","Value:",Number4 , "<br>","</h1>")
// document.write("<h1>","Type:",typeof Number4 , "<br>","</h1>")

// let any = prompt("Enter something")
// document.write("<h1>","User:",any,"</h1>")
// document.write("<h1>","UpperCase:",any.toUpperCase(),"</h1>")

let capitalize = prompt("Enter anything, I will convert its first letter into capital");
let arr = capitalize.split(" ");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
}
console.log(arr.join(" "));
