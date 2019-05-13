
(function($) {

	$.fn.counter = function( options ) {

		var settings = $.extend( {}, $.fn.counter.defaults, options );

		return this.each(function() {
			var $counter = $(this);
			if (0 === $counter.text().replace(/\D/g,"").length) {
				$counter.html('<p>' + settings.val + '</p>');
			}
			settings.countTrigger($counter);
		});

	};

	$.counter = {
		plusOne : function ($counter) {
			var
				n_counter = $counter.text().replace(/\D/g,""),
				num_digits = n_counter.length,
				element = '<p>',
				digits = n_counter.split('');

			for (var i = 0; i < num_digits; i++) {
				element += '<span class="cntotr barlowbold"><span class="cntrtxt contador-dig-' + i + '">' + digits[i] + '</span></span>';
			}
			$counter.html(element + '</p>');

			for (var i = num_digits; i >= 1; i--) {
				var
					$digit = $counter.find('.contador-dig-'+(i-1)),
					digit = parseInt($digit.text(),10);
				if (9 === digit) {
					$digit.animate({
						top: '-40px',
						}, 200, function(){
							$(this).text('0');
							$(this).animate({
								top: '40px',
								},0,function(){
									$(this).animate({
										top: '0px',
									}, 200);
							});
					});
				} else {
					$digit.animate({
						top: '-40px',
						}, 200, function(){
							var d = parseInt($(this).text(),10);
							$(this).text(++d);
							$(this).animate({
								top: '40px',
								},0,function(){
									$(this).animate({
										top: '0px',
									}, 200);
							});
					});
					break;
				}
			}
		}
	};

	$.fn.counter.defaults = {
		val: '00000',
		triggerEvent: 'click',
		triggerElement: '.jcpo-plusone',
		countTrigger: function ($counter) {
			$(this.triggerElement).on(this.triggerEvent, function() {
				$.counter.plusOne($counter);
			});
		}
	};

}(jQuery));
