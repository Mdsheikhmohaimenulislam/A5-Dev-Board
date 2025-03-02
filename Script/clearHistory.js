document.getElementById('clear-history').addEventListener('click',function(event){
event.preventDefault();


         const clear = document.getElementById('show-sms');
         while(clear.hasChildNodes()){
            clear.removeChild(clear.firstChild);
         };
});


// BackgroundColor section..


document.getElementById('color-btn').addEventListener('click',function(event){
       event.preventDefault();
              const color = ['Placebo Blue','Salmon','DarkSalmon','Pink','Lavender','LightCyan','LightGreen'];
             
              const randomColor = color[Math.floor(Math.random() * color.length)];
              
              document.body.style.backgroundColor = randomColor;

});


// Discover btn section login ..


 document.getElementById('discover-btn').addEventListener('click',function(){

    
       window.location.href = "./main.html";
    
  
 });





