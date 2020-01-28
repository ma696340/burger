$("#addBurger").on("click", function(){
    var burgerName = $("#burgerName").val()
    var userData = {
        burger_name: burgerName,
        devoured: false

    }

    $.post("api/burgers", userData, function(data){
        location.reload()
    })

    
})


$(".devbtn").on("click", function(){
    var id = $(this).attr("data-id")
    $.ajax({
        url: "api/burgers/"+id,
        method: "PUT" 

    }).then(function(data){
        location.reload()
    })
})