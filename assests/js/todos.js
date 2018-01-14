//check off specific to dos
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//click on X to remove
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//add new todo
$("input:text").on("keypress",function(event){
	
	if(event.which === 13){
		//add new li
		var value = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> "+value+"</li");
	}
})
$(".fa-plus").on("click",function(){
	$("input:text").fadeToggle();
});