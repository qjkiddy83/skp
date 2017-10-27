$.ajax({
    url:"http://g.koikreative.com/lookbook/js/sample.php?url=" + window.escape(window.location.href),
    dataType:'jsonp',
    success: function () {
        var jsApiList = ['checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo'];

        var data = {
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wxecdb42d52ec0733e', // 必填，公众号的唯一标识
            timestamp: ticket["timestamp"], // 必填，生成签名的时间戳
            nonceStr: ticket["nonceStr"], // 必填，生成签名的随机串
            signature: ticket["signature"],// 必填，签名，见附录1
            jsApiList: jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        };
        wx.config(data);
        var wxConfig = {
            title: function() {
                var s = "北京SKP TRENDS春夏时装精选"
                return s;
            },
            desc: '为您献上最专业的时尚潮流，提供最流行的时尚精选',
            link: 'http://skptrend17.koikreative.com/',
            imgUrl: 'http://skptrend17.koikreative.com/images/share.png'
        };

        wx.ready(function () {
            wxShareInit();
        });

        function printObject(o) {
            var out = '';
            for (var p in o) {
                out += p + ': ' + o[p] + '\n';
            }
            alert(out);
        }

        wx.error(function (res) {
            printObject(res);
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        });

        window.wxShareInit = function () {
            //分享到朋友圈
            wx.onMenuShareTimeline({
                title: wxConfig.title(),
                link: wxConfig.link,
                imgUrl: wxConfig.imgUrl,
                success: function (res) {
                    //alert('已分享');
                },
                cancel: function (res) {
                    //alert('已取消');
                }
            });

            //分享给朋友
            wx.onMenuShareAppMessage({
                title: wxConfig.title(),
                desc: wxConfig.desc,
                link: wxConfig.link,
                imgUrl: wxConfig.imgUrl,
                type: 'link',
                dataUrl: '',
                success: function () {
                    //alert('succ');
                },
                cancel: function () {
                    //alert('cancel');
                }
            });

            //分享到QQ
            wx.onMenuShareQQ({
                title: wxConfig.title(),
                desc: wxConfig.desc,
                link: wxConfig.link,
                imgUrl: wxConfig.imgUrl,
                success: function (res) {
                    //alert('已分享');
                },
                cancel: function (res) {
                    //alert('已取消');
                }
            });

            //分享到腾讯微博
            wx.onMenuShareWeibo({
                title: wxConfig.title(),
                desc: wxConfig.desc,
                link: wxConfig.link,
                imgUrl: wxConfig.imgUrl,
                success: function (res) {
                    //alert('已分享');
                },
                cancel: function (res) {
                    //alert('已取消');
                }
            });
        }
    }
});