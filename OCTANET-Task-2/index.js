$(".txtb").on("keyup" ,function(event){

    if(event.keyCode == 13 && $(".txtb").val() != ""){

        var task = $("<div class = 'task' ></div>").text($(".txtb").val());
        // to delete..
        var del = $(" <i class ='fa fa-trash' ></i> ").click(function(){

            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            }); 
        });

        // to check..
        var check = $(" <i class='fa fa-check'></i> ").click(function(){

            var p =$(this).parent();
            p.fadeOut(function(){
                $(".completed").append(p);
                p.fadeIn();
            });
            $(this).remove();
        });

        task.append(del ,check);
        $(".not_completed").append(task);
        $(".txtb").val("");
    }
})

















// function addTask(){

//     var text;
//     $(".txtb").keyup(function (event){
//         text = $("<div class='task'></div>").text($(".txtb").val());
        
//     })
//     return text;
// }
// function priority(){
//     var num;
//     $(".num").keyup(function (event){

//         num = $("<div class='task'></div>").text($(".num").val());
//     })
//     return num;
// }
// $(".btn").on("click" , function(){
    
    
//     var value = addTask() + " " + priority();
//     $(".not_completed").append(value);
//     $(".txtb").val("");
//     $(".num").val("");

// })