const month = 3;  //we can also write  this as "march"
switch(month){
    case 1:
        console.log("January");
        break;
        case 2:
            console.log("Febuary");
            break;
            case 3:      // we can also write case "march": ....like that
                console.log("March");
                break;
                case 4:
                    console.log("April");
                    break;
                    default:
                        console.log("Default case match");
                        break;
}

//false ,0,-0,  BigInt on," ",null ,undefined, NaN

//Truthy value

//"0","false"," ",[],{ },function(){}  => these are the truthy value..!!

const userEmail = [];
if(userEmail.length === 0){
    console.log("Array is Empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??) : null undefined

let val1;
// val1 = 10 ?? 5 ?? 15
val2 = undefined ?? 10
console.log(val1);
console.log(val2);

// terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80")
