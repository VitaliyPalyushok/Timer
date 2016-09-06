$("#timer")
	.countdown("2016/11/13", function(event) {
		$(this).text(event.strftime('%D days %Hh %Mm %Ss'));
	});