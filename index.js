let fullname = {
    firstname: "Avinash",
    lastname:"Singh"
};

function printFullname(){
   console.log(this.firstname + " " + this.lastname)
}
 
Function.prototype.mybind = function(...args){
    let obj = this;
    params = args.slice(1);
    console.log("test", params)
    return function(...args2){
        obj.apply(args[0], [ ...params, ...args2])
    }
};

const output = printFullname.mybind(fullname, "tetstse", "sdfsdf");

output();