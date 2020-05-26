//we can define function in many ways in javascript

//regular function 
const x=function()
{
    //this here is the caller of x
};

//Arrow function 
const y=()=>
{ 
    //this here can be any caller of y
}



const TestObj=
      {
        function1:function()
        {
          console.log(this,'function1');//regular  generally tell where the function  has been called
        },
        
        function2:()=>
        {
          console.log(this,'function2');// arrow generally tell where the function defined ..
        },
        
        
      };

TestObj.function1();
TestObj.function2();