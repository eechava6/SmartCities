//Once document is ready

$(document).ready(function() {

    $("#login").click(function(e){
      e.preventDefault()
    //When users click in login button send a post request with data
    //entered if data sent match with DB, redirects to UserPage, else show error.
        $.post("/users/authenticateUser" ,{ email: $("#email").val(), password: $("#password").val()}).
        done(function(res) {
          if(res.status === "success"){
            window.location.assign('/users/userPage')
          }else{
            $("#failed").show();
          }
    
          })    
      });
    });
    
    