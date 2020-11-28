console.log("Hello Dev !");

var button = document.querySelectorAll(".btn");
var division = document.querySelectorAll(".div");

let para1 = document.getElementById('para1');
let para2 = document.getElementById('para2');
let para3 = document.getElementById('para3');

var value1;
button.forEach(function(item){
  
   // console.log(item.parentElement.classList);
    
      item.addEventListener("click",function(bt){
        
       // console.log(item.parentElement.parentElement);

        var value1 = item.parentElement.parentElement;
       //  console.log(item.parentElement.parentElement.parentElement);
         var par =   item.parentElement.parentElement.parentElement;
        par.classList.toggle('show-text');

            division.forEach(function(it){
                console.log(it);
                 if(value1!== it)
                   it.parentElement.classList.remove('show-text');

                         })

        
      })
       
      

}
)