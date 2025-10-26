// var tabelnum = prompt("enter your num")

// // console.log(tabelnum,"x",1,"=",tabelnum * 1);


// let x = 5 ;
// let y = 4;
// console.log(x>y && x==5);
// console.log(x<y || x ==5);
// console.log(!false);


// let a = prompt("what is your age?");
// console.log(typeof a)
//  a = Number.parseInt(a);
// console.log(typeof a);

// if (a>18){
//     alert("This Age is Valid for Driving");
// }
// else if (a>15){
// alert("You are valid for practise of Driving")
// }
// else if (a<0){
//     alert("Please Enter a Valid Age")
// }
// else{
//     alert("You are Valid for Driving after 18")
// }

// console.log("You can", a<18? "Not Driving" : "Driving")


// let age = prompt("Enter Your Age");

// if (age>10 && age<20){
//     alert("Your age lies between 10 and 20")
// }
// else{
//     alert("Your age  doesn't lies between 10 and 20")
// }


// let age = prompt("Enter your age");
// switch (age){
//     case  '12' :
//    console.log("Your Age is 12")
//    break
//    case '13' :
//     console.log("Your age is 13")
//     break
//     case  '14' :
//    console.log("Your Age is 14")
//    break
//    case  '15' :
//    console.log("Your Age is 15")
//    break
//    default :
//    console.log("Your age is not special ok!")
// }


// let num = prompt("Enter your number");
// if (num % 1 == 0  && num%3 == 0 ){
//     alert("Your number is divisible ")
// }
// else{
//     alert("Your number is not either divisible by 2 or 3")
// }


// let a = prompt("Enter your tempreature");
//  if (a<0){
//     alert("Freezing cold!");
//  }
//  else if (a>0 && a<=15){

//     alert("It's Chilly");
//  }
//  else if (a>15 && a<=25){
//     alert("It's Pleasent");
//  }
//  else{
//     alert("It's Hot")
//  }

// let a = prompt("Select a weekend from 0 to 6 that represents From Sunday To Monday");
// switch (a){
//     case '0 ':
//     console.log("Sunday");
//     break
//     case '1' :
//     alert("Monday");
//     break
//     case '3' : 
//     alert("Tuesday");
//     break
//     case '4' :
//     alert("Thursday");
//     break
//     case '5' :
//     alert("Friday");
//     case '6' :
//     alert("Saturday");
//     break

//     default:
//     alert("Please Enter a Valid Number");
    
// }

// let num = [1,2,3,4,5,6,7,8,9,10];
// num.toString
// console.log(num)



// user account list

let atmAccount = 50000;
let salary = 25000;
let greeting = alert("Hello User! \nWelcome to HBL ATM ");
let myOpinion = "yes";
let userAnswer = prompt("For What Pupose Do you Come For Money? \n yes or no?");
if(myOpinion == userAnswer){
    console.log("Let's go!")
}
else{
    alert("So Why Do You Come?")
}
let PinCode = 787898;
let userPinCode = prompt("Enter Your Pin code");
if (PinCode == userPinCode){
    let withdraw = prompt("Enter Your Withdraw!");
    console.log(withdraw);
    if(salary > withdraw){
        salary = salary - withdraw;
        console.log( "Your Balance After This Withdraw" ,salary)
    }
    if (salary < withdraw){
        console.log("You Have Insufficiet Balance!");
        alert("Let's See Your ATM Account")
        let atmPin = prompt("Enter Your ATM Pin Code");
        if (atmPin == userPinCode){
            alert("You Have 50,000Rs In Your ATM")
              
            let withdraw = prompt("Enter Your Withdraw Amount!")
            atmAccount = atmAccount - withdraw;
            console.log( "Your Balance After This Withdraw" , atmAccount);
            if(atmAccount > withdraw){
                alert("Successfully Withdrawl!")
            }
           else if(salary < withdraw){
                alert("You Have Insufficient Balance! Please Withdraw 50,000 or less Than 50,000 ok");
            }
        }
        else if (atmPin !== userPinCode){
            alert("Incorrect Pincode!")
        
        }
 
    }

}
else if (PinCode !== userPinCode){
    alert("Incorrect Pincode!")
}

