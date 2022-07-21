// // javascript console API
// console.log("Hello world") //use as a print.
// // alert("me")
// console.warn("This is warning")
// console.error("This is an error")

// // how to add variable
// var number1=34;
// var number2=56;
// console.log(number1+number2)

// // datatypes in javascript

// // integer
// var num1=122;
// var num2=111;
// //string
// var str1="This is a string";
// var str2="This is also a string";
// //new type same as dictionary
// var marks={
//     ravi:34,
//     shubham:23,
//     harry:333
// }
// // undefined means you had not given value to variable you just initiated it
// // null means i know and i am saying there is nothing inside variable
// console.log(num1)
// /*there are two types of data types
// 1.primitive datatypes:number,null,undefined,string,boolean,symbol
// 2.Reference datatypes:Arrays and Objects.
// */
// // Arrays in javascript
// var arr=[1,2,3,"vishal","sahil"]
// console.log(arr[1])
// // Arthimetic operators i know its same 
// var a=45
// var b=15
// console.log(a/b)
// var c=b+30
// a+=5
// // comparison operator
// console.log(a==num1)
// // for and we use && and for or we use ||
// // They are use as a logical operator
// console.log(true&&false) /*we know it will give false. this can be use*/
// // console.log(true||false) we know its going to be true its or
// // console.log(!true) its an negation true will give false and false will true

// // Function
// // same as python just has curly bracket
// function avg(a,b){
//     return (a+b)/2;
// }
// c1=avg(4,6);
// c2=avg(3,2);
// console.log(c1,c2);

// //conditions in javascript
// //if and else of python just curly bracket
// var age=13;
// //if and else
// if(age>18){
//     console.log("you can drink bear")
// }
// else{
//     console.log("you cannot drink")
// }
// //else if same as c programming and python elif
// if(age>13){
//     console.log("you cannot drink")

// }
// else if(age==13){
//     console.log("need more detail")
// }
// else{
//     console.log("you cannot drink")
// }
// //now you can mix function and if else.

// //for loop is same as c programming just add var
// var lis=["vishal","sahil",23,33]
// console.log(lis)
// // for(var i=0;i<lis.length;i++){
// //     console.log(lis[i])
// // }
// //more efficient way in java for array iterationis
// // lis.forEach(function(element){
// //     console.log(element)
// // })
// //instead of var use let it give good memory storing ability.
// const ac=0
// // const is use to make any var constant you cant change it
// // Break and continue
// // break means break the loop and continue means leave this iteration and continue with another iteration. same as python

// let j=0;
// while(j<lis.length){
//     if (j==1){
//         //break
//         continue
//     }
//     console.log(lis[j]);
//     j++
// }
// //do while loop is same as c programming
// // first do will perform then it will check for the condition so do will work atleast once
// // j=0
// // do{
// //     console.log(lis[j]);
// //     j++

// // }while(j<lis.length);
// //DO AGAIN ARRAY AND STRING METHOD PRACTICE IT.
// //some array method
// var myarr=["vishal","sahil","bittu","abhishek","rohan"]
// myarr.pop()//pop from last
// myarr.sort()//sort in alphabetically
// myarr.push("harry")//push in last
// myarr.shift()//remove from start
// myarr.unshift("harry")//add in start

// myarr.toString()//use to convert array in string

// //string method
// let vis="vishal is a good boy";
// console.log(vis.length)//tell length of string
// console.log(vis.indexOf("good"))//use to find string in index number
// console.log(vis.lastIndexOf("good"))//if you have 2 good and need last good.
// console.log(vis.slice(0,3))//slice from 1 to 2 exclude 3 and print it.
// console.log(vis.replace("vishal","rohan"));//replace vishal by rohan.
// Date
// let myDate = new Date();
// console.log(myDate.getTime())
// console.log(myDate.getFullYear())

// // DOM manupulation(Document object model), here dom is html page and to manipulate it or to use java in them we have many methods.
//   let ele=document.getElementById("firstcontainer") //by id you can choose
//   console.log(ele)
 let elem=document.getElementsByClassName("container")//by class
 console.log(elem)
// elem[0].classList.add("bg-prinmary")  //use to add any new class
// elem[0].classList.remove("bg-prinmary") //use to remove class
// console.log(elem[0].innerHTML);// // use to find inner html what use
// console.log(elem[0].innerText);// // use to find text in that html
//tag = document.getElementsByTagName('div')
// console.log(tag)
//createdelement = document.createElement('p')
//createdelement.innerText = "This is a created para not real one"

// tag[0].appendChild(createdelement) //use to add newclass or child element made
// createdelement2 = document.createElement('b')
// createdelement2.innerText = "This is bold"
// tag[0].replaceChild(createdelement2, createdelement)
// // we can also remove child element
// //event is what should we do when anyone click on this or perform this activities.
// // you can directly add function name in html and initialize the function in js
// function clicked(){
//     console.log("The button was clicked")
// }
// firstcontainer.addEventListener('click',function(){
//     alert("dont click in it")
//})
// firstcontainer.addEventListener('mouseover',function(){
//     console.log("click on mouse")
// })
// firstcontainer.addEventListener('mouseover',function(){
//     console.log("click on mouse")
// })
// //can also use mouseout and mousein. and many different types of events we have.
// let prevhtml=document.querySelectorAll('.container')[1].innerHTML
// firstcontainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML=prevhtml;
//     console.log("MOuse is up")
// })
// firstcontainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked it boys </b>"
// })

//settimeout and setinterval
// 1.Arrow function (In this we will look into new way to write a function it will be useful if you have to insert function in between of Code)
// function sum(a,b){
//     return a+b;
// }
// // you can write in this way
// summ=(a,b)=>{
//     return a+b;
// }
// logkaro=()=>{
//     document.querySelectorAll('.container')[1].innerHTML="<b>Hello guys chai pilo</b>"
//     alert("you are a good boy")
// }
// setTimeout
// setTimeout(logkaro,10000);//(which function you need to return, for how many millisecond)
//if you need to do that event repeteadly use setinterval;
// setInterval(logkaro,5000);
// clr=setInterval(logkaro,5000);//to cancel loop tupe clrinterval(clr(any))

//local storage is where you can store info and view dont store much info and sensitive info as it is easily visible.
// localStorage.setItem("name","vishal") In this way you can share data and can view by typing just localStorage.
// localStorage.getItem use to get that key value pair
//localstorage.removeItem("name")it will reomve name
//localstorage.clear to clear all.

    // JSON(use to exchange data) convert java to string and then again from string to java.string can be transported easily
    // note:json dont accept single quote
// obj={name:"vishal",length:1,a:{This:"That"}}
// jso=JSON.stringify(obj);//converted obj to string so that it can be transported easily 
// parsed=JSON.parse(`{"name":"vishal","length":1,"a":{"This":"That"}}`)
// console.log(parsed)
// again converted to java
// math.random()give random number from (0,1)
// Math.floor()round off to smallest integer near that decimal