let $ = require('./zepto.min');
$('.page,.wrapper').on('swipeUp', function() {
	let cur_step = $(this).data('step') || 1,
		max_step = $(this).data('maxstep');

	if (cur_step < max_step) {
		$(this).removeClass('step' + cur_step).data('step', ++cur_step).addClass('step' + cur_step)
	} else {
		if (!$(this).next('.page,.wrapper').length) {
			return false;
		}
		$(this).data('step', 1).removeClass("current").removeClass('step' + cur_step).next('.page,.wrapper').data('step', 1).addClass('current step1')
	}
}).on('swipeDown', function() {
	let cur_step = $(this).data('step');
	if (cur_step > 1) {
		$(this).removeClass('step' + cur_step).data('step', --cur_step).addClass('step' + cur_step)
	} else {
		if (!$(this).prev('.page,.wrapper').length) {
			return false;
		}
		$(this).data('step', 1).removeClass("current").removeClass('step' + cur_step).prev('.page,.wrapper').data('step', 1).addClass('current step1')
	}
})