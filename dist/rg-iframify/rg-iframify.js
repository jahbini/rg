riot.tag2('rg-iframify', '<div class="iframify"> <div class="frame"> <yield></yield> </div> </div>', 'rg-iframify .iframify,[data-is="rg-iframify"] .iframify{ margin: 0; padding: 0; } rg-iframify iframe,[data-is="rg-iframify"] iframe{ position: relative; width: 100%; border: 0; }', '', function(opts) {
'use strict';

var _this = this;

this.on('mount', function () {
	iframify(_this.root.querySelector('.frame'), _this.opts);
});
});
