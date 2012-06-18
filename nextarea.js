(function($) {

 	$.fn.nextarea = function(options) {

 		var t = this;
		t.css("overflow", "hidden");

		var min  	= t.height();
		var dummy	= $('<div id="autoTextarea-' + t.attr("id") + '"></div>').css({
			position	: 'absolute',
			top			: -5000,
			left		: -5000,
			width		: t.width(),
			fontSize	: t.css('fontSize'),
			fontFamily	: t.css('fontFamily'),
			lineHeight	: t.css('lineHeight'),
			resize		: 'none'
		}).appendTo(document.body);

		var update = function() {
			dummy.html(t.val().replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&/g, '&amp;').replace(/\n/g, '<br/>'));
			t.css('height', Math.max(dummy.height() + 30, min));
		}

		t.change(update).keyup(update).keydown(update);
		update();
 	}

})(jQuery);