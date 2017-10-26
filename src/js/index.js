let $ = require('./zepto.min');
$('.page,.wrapper,.end').on('swipeUp', function() {
	let cur_step = $(this).data('step') || 1,
		max_step = $(this).data('maxstep');
	let next = $(this).next('.page,.wrapper,.end');
	if(!next.hasClass('page')  && $(this).data('step') == $(this).data('maxstep')){
		$('header').hide();
		if(next.hasClass('end')){
			next.find('.logo img').attr('src','http://skptrends.koikreative.com/image/p0_title.gif?'+new Date().getTime())
		}
	}else{
		$('header').show();
	}

	if (cur_step < max_step) {
		$(this).removeClass('down init step' + cur_step).data('step', ++cur_step).addClass('up step' + cur_step)
	} else {
		if (!$(this).next('.page,.wrapper,.end').length) {
			return false;
		}
		$(this).data('step', 1).removeClass("current up down init").removeClass('step' + cur_step).next('.page,.wrapper,.end').data('step', 1).addClass('current up init step1')
	}

}).on('swipeDown', function() {
	let cur_step = $(this).data('step'),
		prev_step = $(this).prev('.page,.wrapper,.end');
	if($(this).prev().hasClass('p1') && $(this).data('step') == 1){
		$('header').hide();
	}else{
		$('header').show();
	}
	if (cur_step > 1) {
		$(this).removeClass('up init step' + cur_step).data('step', --cur_step).addClass('down step' + cur_step)
	} else {
		if (!$(this).prev('.page,.wrapper,.end').length) {
			return false;
		}

		$(this).data('step', 1).removeClass("current up down init").removeClass('step' + cur_step).prev('.page,.wrapper,.end').data('step', prev_step.data('maxstep')).addClass('current down init step'+prev_step.data('maxstep'))
	}
})

$('#btn-share').tap(function(){
	$('.sharelayer').show();
})
$('.sharelayer').tap(function(){
	$(this).hide();
})
$('#btn-replay').tap(function(){
	$('.page,.wrapper,.end').removeClass('current up down init').data('step',1);
	$('.p1').addClass('current').find('.logo img').attr('src',require('../images/p0_title.gif')+'?'+new Date().getTime());
})

let audioPlayed = 0;
$('audio').on('play',function(){
	audioPlayed = 1;
});
$(document).one('touchstart',function(){
	if(audioPlayed) return;
	$('audio')[0].play();
})
