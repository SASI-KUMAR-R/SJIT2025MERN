function twoNum()
{
    console.log(5+6);
}
twoNum()
// ----------------------------------------------------------------
function threenum(a,b,c)
{
    console.log(a+b+c);
}
threenum(1,2,3)
// ----------------------------------------------------------------
function returnname()
{
    return "SASIKUMAR"
}
console.log(returnname());
// ----------------------------------------------------------------
function returnnamewithsome(name)
{
    str = name + " is good boy" ;
    return str ;
}
res = returnnamewithsome("SASIKUMAR")
console.log(res);

// ----------------// ----------------// ----------------// ----------------// ----------------// ----------------
object1={
    firstname:"St.Joseph's",
    "lastname":"Institute of Technology",
    "depts":["CSE","IT","ADS","ECE"],
    "training":"MERN"
}
Object.entries(object1).forEach(([key,ele])=>{
    console.log(key,ele);
})

// --------------------------------------------------
let printhello = (name) => "Hello " + name;
console.log(printhello("World"));
