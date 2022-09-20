
let output = document.getElementById('calc');
let display = document.getElementById('display');


 output.onclick = function(){
   try{
    display.value = eval(display.value);
   }
   catch{
    display.value = "error";
   }

}
