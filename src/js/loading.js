;
(function() {
    var cacheList = [
        [29900, "cover.jpg"],
        [1000, "loading.png"],
        [100, "menu.png"],
        [500, "on.png"],
        [200, "on-w.png"],
        [400, "title.png"]
    ];
    var cacheObj = {
        progress: 0
    };

    function perload() {
        var total = 0,
            item, obj = {};
        for (var i = 0; i < cacheList.length; i++) {
            item = cacheList[i];
            total += item[0];
            obj[item[1]] = item[0];
        }
        cacheObj.total = total;
        cacheObj.list = obj;
    }

    function setProgress(progress){
        progress = progress>1?1:progress<0?0:progress;
        if(progress == 1){
            var p = parseInt(progress*100)+'%';
            $('#loading span').html(p);
            $('#loading').remove();
        }else{
            var p = parseInt(progress*100)+'%';
            $('#loading span').html(p);
        }
    }
    window.setProgress = setProgress;

    function loadImage(imgsrc) {
        var image = new Image();
        image.onload = function() {
            cacheObj.progress += cacheObj.list[imgsrc.split('/')[1]] / cacheObj.total;
            setProgress(cacheObj.progress)
            if (cacheList[0]) {
                loadImage("images/" + cacheList.pop()[1])
            }
        }
        image.src = imgsrc;
    }

    perload();
    loadImage("images/" + cacheList.pop()[1]);
})();