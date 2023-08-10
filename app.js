// age range
// if the age is less than 12 => cannot participate
// if the age is between 12 and 16 => uner 16
// if the age is between 16 and 20 => can participate in senior level
// else, if age is greater than 20 => cannot participate

// let name = prompt("Enter your name")
// let age = prompt("Enter your age")

// if(age<12){
//     console.log(name + " cannot participate")
// }
// else if(age>=12 && age<=16){
//     console.log( name + " can participate in the under 16 level")
// }
// else if(age>16 && age<=20){
//     console.log(name + " can participate in the senior level")
// }
// else{
//     console.log(name + " cannot participate")
// }

// alert("This is a ternary operator tester with 3 inputs. Therefore it has 'if', 'else if' and finally an 'else' statements ")


// let a = prompt("Insert 1st number")
// let b = prompt("Insert 2nd number")
// let c = prompt("Insert 3rd number")

// a>b && a>c ? console.log("1st number is greatest among all") : b>a && b>c ? console.log("2nd number is greatest among them all") : c>a && c>b ? console.log("3rd number is greatest among all") : console.log("")


// functions

// function grinder(items){
//     console.log("grinding...", items)
// }


// grinder('tomatoes');
// grinder('onions');


// function add(a,b){
    // console.log(a+b)                     in these types of functions, we cannot see the output whenever we want. for that we need to use return. 
// }

// add(2, 4)
// add(3,7)


// function using return

// function add(a,b){
//     sum = a+b
//     return sum                          here, I can view the o/p of the functionat my disposal.
// }

// let sum1 = add(2,3)
// let sum2 = add(15,57)

// console.log(sum1, sum2)


function change(){
    let btn = document.getElementById("btn")
    btn.style.display = "none"
    let q1 = document.getElementById("q1")
    q1.style.display = "unset"
    let btn2 = document.getElementById("btn2")
    btn2.style.display = "unset"
}

function tell(){
    let q1 = document.getElementById("q1")
    q1.style.display = "none"
    let btn2 = document.getElementById("btn2")
    btn2.style.display = "none"
    let q2 = document.getElementById("q2")
    q2.style.display = "unset"
}