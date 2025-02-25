
      $(document).ready(function(){  
      
      function clicked(){
      var select = $(this).attr('id');
      $("#dropbtn").val(select);
      }
      
      var toppings = $('input[name=option]:checked', 
                  '#toppings_form').val();
        $("#order").click(function(){
        var text=$("#notes").val();
        
        if(text.includes("vegan")){
          alert("Warning! Cheesecake contains dairy!");
        }
        
        else {
          $("#options").hide();
          $("#notes_label").hide();
          $("#notes").hide();
          $("#order").hide();
      
          var quantity=$("#quantity").val();
          var toppings = $('input[name=option]:checked', 
                  '#toppings_form').val();
          
      $("p").html("Thank you! Your order has been placed!<br> Quantity: "+quantity+"<br>Toppings: "+toppings+"<br>Notes: "+text);
      
      
          
        }
       
       });
      });
      