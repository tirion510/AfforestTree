function buttonSubmit(obj){
	$(obj).attr("disabled",true);
	$(obj).val(obj.dataset.disableWith);
	return true;
}

function buttonAbled(){
	$("input[type='submit']").each(function(){
		$(this).attr("disabled",false);
	});
}