exports.sum = (a,b)=> {
    return a + b;
};

exports.multy = (a,b)=> {
    return a * b;
};

exports.subs = (a,b)=> {
    return a - b;
};

exports.divide = (a,b)=> {
    return a / b;
};

exports.person = (_name,age)=> {
    return{
        _name,
        age,
        greet(){
            return "Hola mundo!";
        }
    }
};

exports.map = (cb)=>{
    cb();
};
 