let arguments=process.argv.slice(2);


const { add, sub, mult, divide,sin, cos, tan, test }=require("./functions.js")

switch (arguments[0]) {
    case "add":
            console.log(add(arguments[1],arguments[2]))
            break;
    case "sub":
            console.log(sub(arguments[1],arguments[2]));
            break;
    case "mult":
            console.log(mult(arguments[1],arguments[2]));
            break;
    case "divide":
            console.log(divide(arguments[1],arguments[2]));
            break;
    case "sin":
            console.log(sin(arguments[1],arguments[2]));
            break;
    case "cos":
            console.log(cos(arguments[1],arguments[2]));
            break;
    case "tan":
            console.log(tan(arguments[1],arguments[2]));
            break;
    default:
        console.log("please pass arguments")
}

// if(arguments[0]==="add"){
//     console.log(add(arguments[1], arguments[2]))
// }

