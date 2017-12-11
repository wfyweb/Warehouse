var _0x13d5 = ["goTopBtn", "getElementById", "scrollTop", "documentElement", "body", "onscroll", "display", "style", "", "none", "onclick"];

function goTopEx() {
	var _0x6a6ax2 = document[_0x13d5[1]](_0x13d5[0]);

	function _0x6a6ax3() {
		return document[_0x13d5[3]][_0x13d5[2]] + document[_0x13d5[4]][_0x13d5[2]]
	}
	function _0x6a6ax4(_0x6a6ax5) {
		if (document[_0x13d5[3]][_0x13d5[2]]) {
			document[_0x13d5[3]][_0x13d5[2]] = _0x6a6ax5
		} else {
			document[_0x13d5[4]][_0x13d5[2]] = _0x6a6ax5
		}
	}
	window[_0x13d5[5]] = function() {
		_0x6a6ax3() > 0 ? _0x6a6ax2[_0x13d5[7]][_0x13d5[6]] = _0x13d5[8] : _0x6a6ax2[_0x13d5[7]][_0x13d5[6]] = _0x13d5[9]
	};
	_0x6a6ax2[_0x13d5[10]] = function() {
		var _0x6a6ax6 = setInterval(_0x6a6ax7, 10);

		function _0x6a6ax7() {
			_0x6a6ax4(_0x6a6ax3() / 1.1);
			if (_0x6a6ax3() < 1) {
				clearInterval(_0x6a6ax6)
			};
		}
	};
}
