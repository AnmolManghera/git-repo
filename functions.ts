function addOne (num:number){
    return num + 1;
}

const result = addOne(5);
console.log(result)

const double = (x:number , y:number) => x*y
const res = double(5,8);
console.log(res)

//double(5,8,7);


//return annotations

function double1(x:number): number{
    return x*x;
}

const res1 = double1(5);
console.log(res1)


function named (message : string){
    
}
