$(document).ready(function() {
    var botao = $('.clique_produtos');
    var dropDown = $('.produtos_op');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });