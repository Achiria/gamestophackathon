$( document ).ready(function(){
	$(".button-collapse").sideNav();
	$('ul.tabs').tabs('select_tab', 'tab_id');
	
    function turnGray() {
    	if ($(this).hasClass("white")) {
    		$(this).removeClass("white").addClass("grey");
    	}

    	else {
    		$(this).removeClass("gray").addClass("white");
    	}   	
    };
});

