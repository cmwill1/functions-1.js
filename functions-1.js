let jonSnowHealth = 100

//string conversion
//jonSnowHealth = 100 + ''
// console.log(jonSnowHealth)
jonSnowHealth = String(jonSnowHealth)
// console.log(jonSnowHealth)
 
let theWinnerIs = `Jamie is the winner`

//winner reassigning
//theWinnerIs = theWinnerIs.toLowerCase().replace('jamie','jon')

// Saving to a new variable
let newWinner = theWinnerIs.toLowerCase().replace('Jamie','Jon').toUpperCase()
console.log(newWinner)
console.log(theWinnerIs)

//convert-string-to-kebab-case
//conver it to lowercase, then
// newWinner=newWinner.toLowerCase().replaceAll(' ', '-')
// let newWinnerLower = newWinner.toLowerCase()
// let newWinnerSplit = newWinnerLower.split(' ')
// let newWinnerKebab = newWinnerSplit.join('-')
//Same as above but minified by chaining commands
let newWinnerKebab = newWinner.toLowerCase().split(' ').join('-')
// console.log(newWinner)
console.log(newWinner, '----------',newWinnerKebab)
//functions

//lets create a function that will check to see if Jon's alive

function isJonAlive(){
    if(jonSnowHealth > 0){
        console.log('Jon is alive')
    }else{
        console.log('RIP jon snow')

    }
}
isJonAlive()

//lets create a function that will be used everytime jon is attacked

function surpriseAttack(attack){
    jonSnowHealth-=attack
    isJonAlive()
    return console.log(jonSnowHealth)
}

surpriseAttack(21)
surpriseAttack(20)
surpriseAttack(10)
surpriseAttack(32)
surpriseAttack(26)
surpriseAttack(26)

//create a function that allows two people to greet each other

function greeting(person1,person2){
    console.log(`${person1} says hi to ${person2}`)
}

//greeting() requires parameters to work like below
greeting("isha",'Jon')
greeting("Stephanie",'Jamie')
greeting("Isha",'Jon')