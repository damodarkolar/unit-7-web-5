const add=(a,b)=>{
return (+a)+(+b)
}
const sub=(a,b)=>{
    return (+a)-(+b)
}
const mult=(a,b)=>{
    return (+a)*(+b)
}
const divide=(a,b)=>{
    return (+a)/(+b)
}

const sin=(a)=>{
    return Math.sin(+a)
}

const cos=(a)=>{
    return Math.cos(+a)
}

const tan=(a)=>{
    return Math.tan(+a)
}
const test=(a)=>{
    console.log(a)
}


module.exports={ add, sub, mult, divide,sin, cos, tan, test }