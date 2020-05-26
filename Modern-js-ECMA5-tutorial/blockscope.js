//is this syntax valid

{{{ var v=42;}}}


//block scope create many curly braches 

if(true)
{
    //block scope
}


for(var i=0;i<=10;i++)
{
    //block scope 
    var result=console.log(i);
}
i// here it fetch the value of i but not at above ....in if

//let start with function scope:

function sum(a,b)
{
    var result=(a+b);
}
sum(9,3);
result;  // it provide the error that result not declared because it contain only internal function data 


