$("form").hide();

$(".b").on("click", function() {
    $("form").show(); // Show the form immediately when button is clicked
    
    setTimeout(function() {
        $("form").hide(); // Hide the form after 2 seconds
    }, 10000); // 2000 ms = 2 seconds
});

$('ul').on('click','li',function(){
    $(this).toggleClass('a')
});

$("ul").on('click','span',function(){
    $(this).parent("li").remove();
});

$("button").on('click',function(e){
    e.preventDefault();
    var name = $("#item").val();
    var pr =$("#priority").val();
    var date =$("#date").val();
    if(name&&pr){
    if(pr == "high"){
        let newitem= $('<li id="f" class="k" type=none>'+name+'<span id="del"> X </span> <span id="date">'+date+' </span></li>');
        $('ul').append(newitem);
    }
    if(pr=="medium"){
        let newitem= $('<li id="f" class="g" type=none>'+name+'<span id="del"> X </span> <span id="date">'+date+' </span></li>');
        $('ul').append(newitem); 
    }
    if(pr=="low"){
        let newitem= $('<li id="f" class="h" type=none>'+name+'<span id="del"> X </span> <span id="date">'+date+' </span></li>');
        $('ul').append(newitem);
    }
}
    var date =$("#date").val("");
    var name = $("#item").val('');
});
