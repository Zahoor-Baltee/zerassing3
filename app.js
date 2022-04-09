// -------------CHAPTER # 14-16-------------

// ---------QUESTION # 01---------

// var studentName = [];
// console.log(studentName);


// ---------QUESTION # 02---------

// var cities = ["karachi","islamabad","peshawar","lahore"];
// console.log(cities);


// ---------QUESTION # 03---------

// var num = [1,2,3,3,3,4];
// console.log(num);



// ---------QUESTION # 04---------

// var arr = [];
// var value = 5;
// for (i=0; i<value; i++);{
//     arr.push(false);
// }
// console.log(arr);



// ---------QUESTION # 05---------

// var mixedArr = ["karachi","lahore",true,[1,2,3,4],"ali",1,2,"baltee"];
// console.log(mixedArr[6]);



// ---------QUESTION # 06---------

// var qualifications = [];
// qualifications[0] = "SSC"
// qualifications[1] = "HSC"
// qualifications[2] = "BSC"
// qualifications[3] = "BS"
// qualifications[4] = "B.COM"
// qualifications[5] = "MS"
// qualifications[6] = "M.Phil"
// qualifications[7] = "PhD"
// console.log("QUALIFICATIONS \n"+"1)"+qualifications[0]+"\n 2)"+qualifications[1]+"\n 3)"+qualifications[2]+"\n 4)"+qualifications[3]+"\n 5)"+qualifications[4]+"\n 6)"+qualifications[5]+"\n 7)"+qualifications[6]+"\n 8)"+qualifications[7]);



// ---------QUESTION # 07---------

// var studentName = ["Ali","Zuhan","Zahid"];
// studentName[0] = 320;
// studentName[1] = 296;
// studentName[2] = 480;

// var total = 500;
// var percent1 = (studentName[0]/total)*100;
// var percent2 = (studentName[1]/total)*100;
// var percent3 = (studentName[2]/total)*100;

// console.log("Score of "+percent1 + "\n"+ percent2 + "\n" + percent3);


// var studentName = ["Michael","Jhon","Tony"];
// var studentMarks = [320,230,480];
// var totalMarks = 500;

// var percent1 = (studentMarks[0]/totalMarks)*100;
// var percent2 = (studentMarks[1]/totalMarks)*100;
// var percent3 = (studentMarks[2]/totalMarks)*100;

// document.write("Score of " + studentName[0] + " is " + studentMarks[0] + ". Percentage: " + percent1 + "% <br>")
// document.write("Score of " + studentName[1] + " is " + studentMarks[1] + ". Percentage: " + percent2 + "% <br>")
// document.write("Score of " + studentName[2] + " is " + studentMarks[2] + ". Percentage: " + percent3 + "%")



// ---------QUESTION # 08---------

// var colorArray =["red","green","blue"];
// console.log(colorArray);

//(a)

// var newColor = prompt("enter your Color");
// colorArray.unshift(newColor);
//console.log(colorArray);

//(b)

// var newColor = prompt("enter new color");
// colorArray.push(newColor);
//console.log(colorArray);

//(c)

// var newColor = prompt("enter your Color");
// colorArray.unshift(newColor);
// var newColor2 = prompt("enter your Color");
// colorArray.unshift(newColor2);
// console.log(colorArray);

// (d)

// colorArray.shift(colorArray);
// console.log(colorArray);

// (e)

// colorArray.pop(colorArray);
// console.log(colorArray);

// (f)

// var newColor = prompt("enter new color");
// var newColor1 = prompt("enter index");
// colorArray.splice(newColor1,0, newColor);
// console.log(colorArray);

// (g)

// var newColor = prompt("where you want to delete");
// var newColor1 = prompt("how many color you want to delete");
// colorArray.splice(newColor,newColor1);
// console.log(colorArray);




// ---------QUESTION # 09---------

// var score = [320,230,480,120];
// console.log("Score of students : " + score);

// score.sort();
// console.log("Ordered scores of students : " + score);



// ---------QUESTION # 10---------

// var cities = ["karachi","lahore","islamabad","quetta","peshawar"];
// console.log(cities);
// var selected_cities = cities.slice(2,4);
// console.log(selected_cities);



// ---------QUESTION # 11---------

// var arr = ["This","is","my","Cat."];
// console.log(arr);
// var join = arr.join();
// console.log(join);



// ---------QUESTION # 12---------

// var arr = ["Keyboard","Mouse","Printer","Monitor"];
// console.log(arr);

// for(i=0; i<=3;i++){
// var ss = arr.shift();
// console.log(ss);
// }



// // ---------QUESTION # 13---------


// var arr = ["Keyboard","Mouse","Printer","Monitor"];
// console.log(arr);

// for(i=0; i<=3;i++){
// var ss = arr.pop();
// console.log(ss);
// }



// // ---------QUESTION # 14---------

// var company = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// function submit() {
//     var mydata = document.getElementById("drop");
//     for (i = 0; i <= 5; i++) {
//         var data = company[i];
//         console.log(data);
//         mydata.innerHTML += `<option value="${data}">${data}</option>`
//     }
// }
// submit();



// --------------CHAPTER 17_20---------------

// ---------QUESTION # 1---------

// var arr = [[],[],[]];



// ---------QUESTION # 2---------

// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,2]];
// console.log(arr);



// ---------QUESTION # 3---------

// for (i = 0; i <= 10; i++){
//     console.log(i);
// }



// ---------QUESTION # 4---------

// var tnum = +prompt("Enter table number");
// var tlength = +prompt("Enter length");
//
//
// for (i = 1; i <= tlength; i++){
// var result = tnum * i;
// console.log(tnum + "*" + i + "=" + result);
// console.log(`${tnum} * ${i} = ${result}`);
// }



// ---------QUESTION # 5---------

// var fruits = ["apple", "banana", "mango", "orange","Strawbarry"];
// console.log(fruits);

// for (i = 0; i <= fruits; i++){
//     console.log(fruits[0]);
// }







// ---------QUESTION # 6---------



// ----------Counting-----------
// for (i = 0; i < 21; i++){
//     console.log(i);
// }


// ------------Reverse-Counting-----------
// for (i = 20; i > 0; i--){
//     console.log(i);
// }


// ------------Even----------------
// for (i = 0; i < 20; i++){
//     console.log(i);
//     i++;
// }



// -----------Odd--------------
// for (i = 1; i < 20; i++){
//     console.log(i);
//     i++;
// }


// ------------Series-----------
// for (i = 2; i < 20; i++){
//     console.log(i+"k");
//     i++;
// }




// --------------QUESTION # 07-------------

// var a = ["Cake","Apple pie","Cookie","Chip","Patties"];
// var order = prompt("Welcome to ABC bakery.What do you want to order Sir/Ma'am?");
// if(a[0]===order){
//     alert("Cake is available at index 0 in our bakery");
// }
// else if(a[1]===order){
//     alert("Apple pie is available at index 1 in our bakery");
// }
// else if(a[2]===order){
//     alert("Cookie is available at index 2 in our bakery");
// }
// else if(a[3]===order){
//     alert("Chips is available at index 3 in our bakery");
// }
// else if(a[4]===order){
//     alert("Patties is available at index 4 in our bakery");
// }
// else{
//     alert("We are sorry. "+order+" is not available in our bakery");
// }




// --------------QUESTION # 08-------------

// var arr = [3, 6, 2, 56, 32, 5, 89, 32];
// console.log("Array items: "+arr)
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// console.log("The largest number is: "+largest);



// --------------QUESTION # 09-------------

// var arr = [3, 6, 2, 56, 32, 5, 89, 32];
// var min = Math.min.apply(Math, arr)
// console.log(min)



// // --------------QUESTION # 10-------------

// for (i = 0; i < 101; i++) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }

// }






// // --------------CHAPTER 21_25---------------


// --------------QUESTION # 1-------------

// var first = prompt("Enter your first name");
// var last = prompt("Enter your last name");
// var fullname = first + last;
// console.log("Hello " +fullname);



// --------------QUESTION # 2-------------

// var phone = prompt("Enter your favourite phone name");
// console.log("My favourite phone is : "+phone);
// var plength = phone.length;
// console.log("Length of string : "+plength);



// --------------QUESTION # 3-------------

// var a = "Pakistani";
// console.log("String : "+a);
// var b = a.indexOf("n");
// console.log("Index of 'n' : "+b);



// --------------QUESTION # 4-------------

// var a = "Hello World";
// console.log("String : "+a);
// var b = a.lastIndexOf("l");
// console.log("Last index of 'l' : "+b);



// --------------QUESTION # 5-------------

// var a = "Pakistani";
// console.log("String : "+a);
// var b = a.charAt(3);
// console.log("Character at index 3 : "+b);



// --------------QUESTION # 6-------------

// var first = prompt("Enter your first name");
// var last = prompt("Enter your last name");
// var fullname = first.concat(last);
// console.log("Hello "+fullname);



// --------------QUESTION # 7-------------

// var city1 = "Hyderabad";
// console.log("City: "+city1);
// var city2 = city1.replace(/Hyder/,"Islam");
// console.log("After replacement: "+city2);



// --------------QUESTION # 8-------------

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/gi,"&");
// console.log(newMessage);



// --------------QUESTION # 9-------------

// var string = "472";
// console.log("Value: "+string);
// console.log("Type: "+typeof string);

// var num = Number(string);
// console.log("Value: "+num);
// console.log("Type: "+typeof num);



// --------------QUESTION # 10-------------

// var input = "peanuts";
// var output = input.toUpperCase();
// console.log(output);



// --------------QUESTION # 11-------------

// var input = prompt("Enter any world");
// console.log("User Input: " +input);
// var titleCase = input.titleCase("input");
// console.log("Title case: "+titleCase);



// function titleCase(string) {
//     var sentence = string.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//  document.write(sentence.join(" "));
//  return sentence;
//  }
//  titleCase("tutorix is one of best e-platforms");




//  var string = "Tutorix is one of best e-platforms";
//  var newstring = string.toLowerCase();
//  var newstring = newstring.split(" ");
//  for(var i = 0; i < string.length; i++){
//      newstring[i] = newstring[i].charAt(0).toUpperCase()+newstring[i].slice(1);
//      console.log(newstring[i]);
//     }




// --------------QUESTION # 12-------------

// var num = 36.63;
// console.log("Number: " +num);
// var mystring = num.toString();
// console.log("Result: " +mystring);




// --------------QUESTION # 13-------------

// var a = prompt("Enter your name");
// if(a==33 || a==44 || a==46 || a==64){
//     alert("please enter a valid user name");
// }
// else{
//     alert(a);
// }




// var userName=prompt("Enter your Input: ");
// var message;
// // var split=[];
// var arr=[];
// for(var i=0;i<userName.length;i++)
// {
//     // split[i]=userName.split(" ");
//     arr[i]=userName.charCodeAt(i);
//     if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//     {
//             message="Correct User Name";
//     }
//     while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//     {
//         alert("please enter a valid userName");
//         userName=prompt("Enter your Input: ");
//         for(var i=0;i<userName.length;i++)
//         {
//             // split[i]=userName.split(" ");
//             arr[i]=userName.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 break;
//             }
//         }
//     }

// }
// alert(message)




// --------------QUESTION # 14-------------

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var b = prompt("Welcome to our bakery.What do you want to order");
// var c = b.toLowerCase();
// if(c==a[0]){
//     console.log("cake is available at index 0 in our bakery ");
// }
// else if(c==a[1]){
//     console.log("Apple pie is available at index 1 in our bakery ");
// }
// else if(c==a[2]){
//     console.log("Cookies is available at index 2 in our bakery ");
// }
// else if(c==a[3]){
//     console.log("Chips is available at index 3 in our bakery ");
// }
// else if(c==a[4]){
//     console.log("Patties is available at index 4 in our bakery ");
// }
// else{
//     console.log("We are sorry. "+b+" is not available in our bakery ");
// }



// --------------QUESTION # 15-------------

// var p = prompt("Enter your password");
// if (isNaN(parseInt(p[0]))) {
//     alert("Password should not start with number!");
// }
// else if(p.length<6){
//     alert("Password length must be 6 character!");
// }
// else if(p.search(/[a-z]/)== -1){
//     alert("Atleast 1 small letter must be enter!");
// }
// else if(p.search(/[A-Z]/)== -1){
//     alert("Atleast 1 capital letter must be enter");
// }
// else if(p.search(/[0-9]/)== -1){
//     alert("Atleast 1 numeric value must be enter");
// }
// else{
//     alert("correct");
// }




// --------------QUESTION # 16-------------

// var uni = "University Of Karachi";
// var newuni = uni.split(" ");
// console.log(newuni);




// --------------QUESTION # 17-------------

// var input = "Pakistan";
// console.log(input.charAt(input.length-1));



// --------------QUESTION # 18-------------

// var text = "The quick brown fox jumps over the lazy dog";
// text = text.toLowerCase();
// var textLen = text.length;
// var searchFor = "the";
// var indexOfSearch = text.indexOf(searchFor);
// var counter = 0;

// for (var i = 0; i < textLen; i++) {
// if (text.indexOf(text.charAt(i)) === indexOfSearch) {
// counter++
// }
// }

// console.log(counter);