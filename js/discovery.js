$( document ).ready(function(){
	$(".button-collapse").sideNav();
	$('ul.tabs').tabs('select_tab', 'tab_id');

    function turnGray() {
    	$(this).addClass("grey");
    };
});

