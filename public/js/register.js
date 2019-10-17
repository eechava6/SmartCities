
$(document).ready(function() {
    $("#register").click(function(e){
      e.preventDefault()
        //When users click in register button send a post request with data
        //entered if data sent is ok, redirects to authentication and creates
        //a new user in DB, else show error.
        email = $("#email").val()
        password = $("#password").val()

        $.post("/users/registerUser", { email:email,
        password: password}).done(function(res) {
          if(res.status === "success"){
            window.location.assign('/users/authenticateUser')
          }else{
            $("#failed").show();
          }
          })
      });
    });
    
    