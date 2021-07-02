$(document).ready(function () {
	let position = 0;
	const slidesToShow = 3;
	const slidesToScroll = 1;
	const container = $('.slider__container');
	const track = $('.slider__treck');
	const item = $('.slider__item');
	const btnPrev = $('btn__prev');
	const btnNext = $('btn__next');
	const itemCount = item.length;
	const itemWidth = container.width() / slidesToShow;
	const movePosition = slidesToScroll * itemWidth;

	item.each(function(index, item){
		$(item).css({
			"min-width": itemWidth,		
		})
	});

	$(document).ready(function () {
		$('.btn__next').click(function () {
			const itemleft =itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

			position -= itemleft >= slidesToScroll ?  movePosition: itemleft * itemWidth;

			setPosition();
			checBtns();
		});
	});

	$(document).ready(function () {
		$('.btn__prev').click(function (event) {
			const itemleft = Math.abs(position) / itemWidth;

			position += itemleft >= slidesToScroll ?  movePosition: itemleft * itemWidth;

			setPosition();
			checBtns();
		});
	});

	const setPosition = () => {
		$('.slider__track').css({
			transform: 	`translateX(${position}px)`
	   });
	};

	const checBtns= () => {
		$('.btn__prev').prop('disabled', position === 0);
		$('.btn__next').prop(
			'disabled',
			position <= -(itemCount - slidesToShow) * itemWidth
			);
	};
	checBtns();
});