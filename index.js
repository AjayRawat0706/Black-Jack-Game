
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
 
let displayMessage=document.getElementById
("idmessage")
let displaySum=document.getElementById
("sumId")
let displayCard=document.getElementById
("cardId")
let playerDetail=document.getElementById("name-cash")

//creating player object
let player={
    Name:"Ajay",
    Money: 2000
}
playerDetail.textContent=player.Name+": ₹"+player.Money
function getRandomCard(){
   let rendNumber= Math.floor(Math.random()*13)+1
   if(rendNumber===1){
    return 11
   }
   else if(rendNumber>10){
     return 10
   }
   else{
    return rendNumber
   }
}

let startGame=()=>{
    if(player.Money<30){
        return;
    }
    player.Money-=30;
    playerDetail.textContent=player.Name+": ₹"+player.Money
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    isAlive=true
    renderGame()
}

let renderGame=()=>{
    if(sum<=20){
        message="Do you want to draw a new card?"
    }
    else if(sum==21){
        player.Money+=150
        playerDetail.textContent=player.Name+": ₹"+player.Money
        message="You've got Blackjack!"
        hasBlackJack=true
    }
    else{
        message="you're out of the game!"
        isAlive=false
    }
    displayCard.innerHTML="Cards:"
   
    for(let i=0;i<cards.length;i++){
        displayCard.textContent+=cards[i]+" "
    }
    displayMessage.innerHTML=message
    displaySum.innerHTML="Sum:"+sum
}

let newGame=()=>{
    if(player.Money<20){
        return
    }
    if(isAlive===true && hasBlackJack===false){
        player.Money-=20;
        playerDetail.textContent=player.Name+": ₹"+player.Money
        let newCard=getRandomCard()
        cards.push(newCard)
        sum+=newCard
        renderGame()
    }
}