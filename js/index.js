const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

let x1,x2;
let d = b*b-4*a*c;
    if (d>0) {
        const result = solveQuadr(a,b,c);
        alert(result);
}
    if (d<0) 
        alert("Коренів немає");
    if (d==0) {
        x1 = -b/(2*a); 
        alert("Один корінь "+ x1);
    
}
function solveQuadr(a,b,c){
    const x1 = (-b+Math.sqrt(d))/(2*a);
    const x2 = (-b-Math.sqrt(d))/(2*a);
    return x1 +"  "+ x2;
}