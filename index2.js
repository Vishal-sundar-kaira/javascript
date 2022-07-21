// // normal use of how to print and use variable
// let count=0
// document.getElementById("count-el").innerText=count

// function increment(){
//     count=count+1
//     document.getElementById("count-el").innerText=count
// }

// function save(){
//     document.getElementById("count-el").innerText="your total score is 🙌"+" "+count
// }
// let savl = document.getElementsByClassName("enteri")
// console.log(savl[0])
// function entry(){
//     let no=count+"-"
//     savl.innerText += no
// }
// // Here i learn how to print using console.log and if want to add text in any class use innertext or getbyelementid or class anything,how to use function and call a function on on click how to use count+= method and many more
// let pa=document.getElementById("error")
// console.log(pa)
// let num1=8
// let num2=2
// function addi(){
//     added=num1+num2
//     document.getElementById("result").innerText=added
// }
// function subi(){
//     subs=num1-num2
//     let a =document.getElementById("result")
//     console.log(a)
// }

//Building blackjack
let hasblackjack=false
let isalive=true
let message=""
let sumEl=document.querySelector("#sum-el")//for class use'.'and for whole write direct body all will be replace.
let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let cards=[getrandomcard(),getrandomcard()]
// let randomNumber=Math.floor(Math.random()*6)+1//for dice random
// randomNumber= Math.floor(Math.random()*14)
// console.log(randomNumber)
// let airbnb={
//     name:"Castle",
//     price:190,
//     room:5,
//     dish:["paneer","daal","chicken"],
//     open:true
// }
// console.log(airbnb.price)
// console.log(airbnb.dish)
let player={name:"per:",
chips:145}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+"$"+player.chips

function getrandomcard(){
    let ran=Math.floor(Math.random()*13)+1
    if(ran==1){
        return 11
    }
    else if(ran>=11){
        return 10
    }
    else{
        return ran
    }

}

function rendergame(){
    let sum=0
    cardsEl.textContent="cards:"
    sumEl.textContent="sum:"
    let card=0
    let clen=cards.length
    for(i=0;i<clen;i++)
    {
        sum=sum+cards[i]
    }
    for(i=0;i<clen;i++)
    {
        card=card+cards[i]
    }
    sumEl.textContent="sum:"+card
    for(i=0;i<clen;i++)
    {
        cardsEl.textContent+=cards[i]+" "
    }
    if(sum<21){
        message="Do you want to draw a new card"
    }
    else if(sum==21){
        message="you won!you got blackjack"
        hasblackjack=true
    }
    else{
        message="you loss"
        isalive=false
    }
    messageEl.innerText=message

    
    
    
   }
   function started(){
    rendergame()
}
   function newc(){
    if(isalive==true && hasblackjack==false){
        let sum=0
        let newcard=getrandomcard()
        sum += newcard
        cards.push(newcard)
        rendergame()
        
        
    }
    else{
        console.log("No")
    }
   }
//    let experience=["front end developer","engineer","98.1 in mhtcet","love to play cricket"]
//    experience.push("i am vishal")
//    console.log(experience)
//    experience.shift()
//    experience.pop()
//    console.log(experience)
//    experience.push("vishal")
//    console.log(experience)
//    experience.unshift("sahil")
//    console.log(experience)


//practice
let vishal={
    name:"vishal",
    age:20,
    country:"india"
}
function logdata(){
    str="my name is "+vishal.name+",my age is "+vishal.age+",my country is"+ vishal.country
    return str
}
console.log(logdata())
let hands=["rock","paper","scissor"]
let random=Math.floor(Math.random()*3)
console.log(hands[random])