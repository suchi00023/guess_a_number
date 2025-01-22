let a=(Math.random()*100);
a=Number.parseInt(a);
console.log(a);
let chances=0;
let b;
while(b!=a)
{
    b= prompt ("guess the number")
   b= Number.parseInt(b);
   chances+=1;
   if(b==a)
   {
       console.log("you guessed it right");
       console.log(`you get ${chances} times: `);

   }
   else if(b<a)
   {
           console.log("to low");
        }
       else if (b>a)
       {
           console.log("to high");
   }