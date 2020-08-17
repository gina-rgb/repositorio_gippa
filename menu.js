$(document).ready(main);

var contador = 1;

function main (){
    $('.boton__menu').click(fuction(){

        if(contador == 1){
           $('nav').animate({
              left: '0'
           });
           contador = 0;
        } 
        
        else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
             });
        }
    });
}