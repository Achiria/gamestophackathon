$( document ).ready(function(){
	var consoles = [];
	$(".button-collapse").sideNav();
	$('ul.tabs').tabs('select_tab', 'tab_id');
	$( "#ps4" ).click(function() {
		$(this).addClass('grey').removeClass('white');
		consoles.push("ps4");
	});
	$( "#xb1" ).click(function() {
		$(this).addClass('grey').removeClass('white');
		consoles.push("xb1");
	});
	$( "#wiiu" ).click(function() {
		$(this).addClass('grey').removeClass('white');
		consoles.push("wiiu");
	});
	$( "#pc" ).click(function() {
		$(this).addClass('grey').removeClass('white');
		consoles.push("pc");
	});
	$( "#360" ).click(function() {
		$(this).addClass('grey').removeClass('white');
		consoles.push("360");
	});
	$( "#ps3" ).click(function() {
		$(this).addClass('grey').removeClass('white');
		consoles.push("ps3");
	});
	$( "#3ds" ).click(function() {
		$(this).addClass('grey').removeClass('white');
		consoles.push("3ds");
	});
	$( "#vita" ).click(function() {
		$(this).addClass('grey').removeClass('white');
		consoles.push("vita");
	});
	// $( "#continue" ).click(function() {
	// 	alert(JSON.stringify(consoles));
	// });
});