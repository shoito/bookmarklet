jQuery(function () {
    var readNum = 0;
    var readSize = 0;
    var totalNum = getTotalNum();
    var totalSize = getTotalSize();
    jQuery('#results > li').each(function () {
        var li = jQuery(this);
        var key = 'read_histories';
        var read = 'read';
        var unread = 'unread';
        var readCss = 'url(data:image/png;base64,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) no-repeat 0';
        var unreadCss = 'url(data:image/png;base64,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) no-repeat 0';
        var url = li.find('a').attr('href');
        var current = unread;
        var readHistories = JSON.parse(localStorage.getItem(key) || '[]');
        jQuery.each(readHistories, function (i, elem) {
            if (elem.url === url) {
                current = read;
                readNum++;
                return false;
            }
        });
        jQuery.each(MicroJS, function (i, elem) {
            if (elem.url === url && current === read) {
                readSize += parseFloat(elem.size.replace('kB', '').trim());
                li.find('a').stop().fadeTo(500, 0.4);
                return false;
            }
        });
        if (li.find('div.status').length == 0) {
        jQuery('<div class="status"></div>').addClass(current).css({
            'float': 'left',
            'height': '100px',
            'width': '52px',
            'background': current == read ? readCss : unreadCss
        }).prependTo(li).hover(function () {
            jQuery('#results > li').not(li.has(this)).stop().fadeTo(500, 0.5);
        }, function () {
            jQuery('#results > li').not(li.has(this)).stop().fadeTo(500, 1);
        }).hover(function() {
        	jQuery(this).css('cursor', 'pointer'); 
        }, function() {
	        jQuery(this).css('cursor', 'default'); 
        }).click(function () {
            // read, unread
            var div = jQuery(this);
            var isRead = div.hasClass(read);
            var pre = isRead ? read : unread;
            var post = isRead ? unread : read;
            div.removeClass(pre).addClass(post).css('background', isRead ? unreadCss : readCss);
            var readHistories = JSON.parse(localStorage.getItem(key) || '[]');
            if (post === read) {
                jQuery.each(MicroJS, function (i, elem) {
                    if (elem.url === url) {
                        readSize += parseFloat(elem.size.replace('kB', '').trim());
                         li.find('a').stop().fadeTo(500, 0.4);
                        return false;
                    }
                });
                readNum++;
                var readHistory = {
                    'url': url,
                    read_date: new Date()
                };
                readHistories.push(readHistory);
            } else {
                jQuery.each(readHistories, function (i, elem) {
                    if (elem.url === url) {
                        readNum--;
                        readSize -= getSize(url);
                        readHistories.splice(i, 1);
                        li.find('a').stop().fadeTo(500, 1);
                        return false;
                    }
                });
            }
            localStorage.setItem(key, JSON.stringify(readHistories));
            updateScore(readNum, readSize);
        });
        }
    });
    
    if (jQuery('#score').length == 0) {
        jQuery('<div id="score"></div>').css({
            'z-index': 10,
            'top': '20px',
            'right': '20px',
            width: '220px',
            height: '120px',
            padding: '20px',
            'font-family': '"Maiden Orange", arial, serif',
            'font-size': '36px',
            'font-weight': 'normal',
            'text-align': 'right',
            '-webkit-font-smoothing': 'antialiased',
            'text-rendering': 'optimizeLegibility',
            background: '-webkit-linear-gradient(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 50.01%, rgba(255, 255, 255, 0)), -webkit-linear-gradient(#FF0071, #BB0047)',
            'border-radius': '25px',
            'overflow': 'hidden',
            'position': 'fixed'
        }).append('<div style="text-align: center margin: 6px; height: 40px;"">Score</div>').append('<div id="scoreNum" style="margin: 4px; height: 40px;"></div>').append('<div id="scoreSize" style="margin: 4px; height: 40px;"></div>').appendTo(jQuery('body'));
    }
    updateScore(readNum, readSize);

    function getSize(url) {
        var size = 0;
        jQuery.each(MicroJS, function (i, elem) {
            if (elem.url === url) {
                size = parseFloat(MicroJS[i].size.replace('kB', '').trim());
                return false;
            }
        });
        return size;
    }

    function updateScore(_readNum, _readSize) {
        _readSize = _readSize > 0 ? _readSize : 0;
        _readSize = Math.round(_readSize * 10) / 10;
        jQuery('#scoreNum').text(_readNum + ' / ' + totalNum);
        jQuery('#scoreSize').text(_readSize + ' / ' + totalSize + ' kB');
    }
    
    function getTotalNum() {
    	return jQuery('#results > li').length;
    }

    function getTotalSize() {
        var total = 0;
        jQuery('#results > li > a > div.size').each(function(i, elem) {
        	total += parseFloat(jQuery(elem).text().replace('kB', '').trim());
        });
        total = Math.round(total * 10) / 10;
        return total;
    }
});