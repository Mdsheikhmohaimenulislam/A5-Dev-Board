document.getElementById('clear-history').addEventListener('click',function(event){
event.preventDefault();


         const clear = document.getElementById('show-sms');
         while(clear.hasChildNodes()){
            clear.removeChild(clear.firstChild);
         };
});