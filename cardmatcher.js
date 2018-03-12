

$(document).ready( function() {
	$("#grid-size").focus();
	$("#grid-size-submit").click( function(e){
		e.preventDefault();
		var size = $("#grid-size").val();
		$("#grid-size-form").hide();
		matcherController.init(size);
		matcherView.updateGameStateView();
	});
});
	

