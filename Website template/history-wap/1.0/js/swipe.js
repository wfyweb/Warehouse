var _0xf168 = [".swipeWrap", "auto", "activeIndex", "lastPage", "removeClass", ".nextBtn", "siblings", "addClass", "each", "#slider", "#position"];
$(function() {
	$(_0xf168[0])[_0xf168[8]](function() {
		var _0xd541x1 = $(this);
		var _0xd541x2 = new Swiper(_0xf168[0], {
			slidesPerView: _0xf168[1],
			offsetPxBefore: 0,
			offsetPxAfter: 0,
			calculateHeight: true,
			onTouchEnd: function(_0xd541x3) {
				var _0xd541x4 = _0xd541x2[_0xf168[2]];
				if (_0xd541x4 == 0) {
					_0xd541x1[_0xf168[6]](_0xf168[5])[_0xf168[4]](_0xf168[3])
				} else {
					_0xd541x1[_0xf168[6]](_0xf168[5])[_0xf168[7]](_0xf168[3])
				};
			}
		});
	});
	var _0xd541x5 = new Swiper(_0xf168[9], {
		pagination: _0xf168[10],
		loop: true,
		grabCursor: true,
		paginationClickable: true,
		autoplay: 5000,
		autoplayDisableOnInteraction: false
	});
});
