console.log("Hello Dev !");

var button = document.querySelectorAll(".btn");
let para1 = document.getElementById('para1');
let para2 = document.getElementById('para2');
let para3 = document.getElementById('para3');
button.forEach(function(item){

   // console.log(item.parentElement);
    
      item.addEventListener("click",function(bt){
          
         console.log(item.parentElement.parentElement.parentElement);
         var parent =   item.parentElement.parentElement.parentElement;
        parent.classList.toggle('show-text');

       



      })

}
)