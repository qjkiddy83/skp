;
(function() {
    var cacheList = [
        [6000,"p0_title.gif"],
        [5261,"btn-replay.png"],
        [4883,"btn-share.png"],
        [11539,"end-address.png"],
        [6866,"end-wbsite.png"],
        [20844,"header.png"],
        [5318,"ico-share.png"],
        [5365,"line.png"],
        [12853,"loading_logo.png"],
        [195707,"p1-bg.jpg"],
        // [42588,"p1-logo.png"],
        [32929,"p1-txt.png"],
        [125829,"p10-1.jpg"],
        [68128,"p10-2.jpg"],
        [72151,"p10-3.jpg"],
        [75345,"p10-4.jpg"],
        [19120,"p10-5.jpg"],
        [55897,"p10-bg.jpg"],
        [12455,"p10-txt-1.png"],
        [6893,"p10-txt-2.png"],
        [108044,"p11-1.jpg"],
        [47882,"p11-2.jpg"],
        [72528,"p11-3.jpg"],
        [54180,"p11-4.jpg"],
        [60294,"p11-5.jpg"],
        [74359,"p11-txt-1.png"],
        [71608,"p11-txt-2.png"],
        [74513,"p11-txt-3.png"],
        [73813,"p11-txt-4.png"],
        [71400,"p11-txt-5.png"],
        // [33824,"p11-txt-6.png"],
        [114644,"p12-1.jpg"],
        [111927,"p12-2.jpg"],
        [92491,"p12-3.jpg"],
        [57564,"p12-pop.png"],
        [11272,"p12-txt-1.png"],
        [5010,"p12-txt-2.png"],
        [8703,"p12-txt-3.png"],
        [82768,"p12-txt-4.png"],
        [124662,"p12-txt-5.png"],
        [123507,"p12-txt-6.png"],
        [78406,"p12-txt-7.png"],
        [517548,"p13-1.jpg"],
        [127401,"p14-1.jpg"],
        [90725,"p14-2.jpg"],
        [53318,"p14-3.jpg"],
        [89538,"p14-4.jpg"],
        [7237,"p14-txt-1.png"],
        [57443,"p14-txt-10.png"],
        [15819,"p14-txt-11.png"],
        [6768,"p14-txt-2.png"],
        [26004,"p14-txt-3.png"],
        [2753,"p14-txt-4.png"],
        [76570,"p14-txt-5.png"],
        [78415,"p14-txt-6.png"],
        [77755,"p14-txt-7.png"],
        [83696,"p14-txt-8.png"],
        [60551,"p14-txt-9.png"],
        [69796,"p15-1.jpg"],
        [46113,"p15-2.jpg"],
        [128413,"p15-3.jpg"],
        [71236,"p15-4.jpg"],
        [61535,"p15-5.jpg"],
        [84853,"p15-6.jpg"],
        [39427,"p15-7.jpg"],
        [26489,"p15-8.jpg"],
        [8984,"p15-txt-1.png"],
        [3663,"p15-txt-2.png"],
        [20547,"p15-txt-3.png"],
        [65779,"p15-txt-4.png"],
        [61825,"p15-txt-5.png"],
        [74926,"p15-txt-6.png"],
        [64219,"p15-txt-7.png"],
        [76844,"p15-txt-8.png"],
        [71289,"p15-txt-9.png"],
        [129324,"p16-1.jpg"],
        [30846,"p16-10.jpg"],
        [50664,"p16-11.jpg"],
        [21035,"p16-12.jpg"],
        [19797,"p16-2.jpg"],
        [22991,"p16-3.jpg"],
        [24298,"p16-4.jpg"],
        [21008,"p16-5.jpg"],
        [59498,"p16-6.jpg"],
        [19523,"p16-7.jpg"],
        [35614,"p16-8.jpg"],
        [14652,"p16-9.jpg"],
        [98703,"p16-bg.jpg"],
        [16790,"p16-pop.png"],
        [17737,"p16-tag.png"],
        [14083,"p16-txt-1.png"],
        [4905,"p16-txt-2.png"],
        [10676,"p16-txt-3.png"],
        [17771,"p16-txt-4.png"],
        [15264,"p16-txt-5.png"],
        [11492,"p16-txt-6.png"],
        [347738,"p2-bg.jpg"],
        [55547,"p2-box2-txt1.png"],
        [75809,"p2-box2-txt2.png"],
        [21282,"p2-txt-box1.jpg"],
        [37591,"p2-txt-box2.jpg"],
        [80266,"p2-txt1.png"],
        [79850,"p2-txt2.png"],
        [35656,"p2-txt3.png"],
        [339652,"p3-bg.jpg"],
        [63512,"p3-box.jpg"],
        [122340,"p3-txt.png"],
        [247041,"p4-bg.jpg"],
        [118363,"p4-bl.jpg"],
        [67904,"p4-br.jpg"],
        [34409,"p4-info.jpg"],
        [89085,"p4-pho.jpg"],
        [36278,"p4-pop.png"],
        [106433,"p4-tl.jpg"],
        [65217,"p4-tr.jpg"],
        [71803,"p4-txt1.png"],
        [64680,"p4-txt2.png"],
        [155492,"p5-s1-i1.jpg"],
        [112250,"p5-s1-i2.jpg"],
        [83739,"p5-s1-txt.png"],
        [144273,"p5-s2-i1.jpg"],
        [125501,"p5-s2-i2.jpg"],
        [82589,"p5-s2-txt.png"],
        [202508,"p5-s3-i1.jpg"],
        [699136,"p5-s3-i2.jpg"],
        [250241,"p6-bg.jpg"],
        [243894,"p6-bg2.jpg"],
        [27290,"p6-pop.png"],
        [88641,"p6-s1-i1.jpg"],
        [79677,"p6-s1-i2.jpg"],
        [84398,"p6-s1-txt.png"],
        [88230,"p6-s2-i1.jpg"],
        [128170,"p6-s2-i2.jpg"],
        [80398,"p6-s2-txt.png"],
        [9879,"p6-txt1.png"],
        [17978,"p6-txt2.png"],
        [11936,"p7-1-txt1.png"],
        [14294,"p7-1-txt2.png"],
        [137668,"p7-2-i.jpg"],
        [56941,"p7-2-t.png"],
        [121386,"p7-3-i.jpg"],
        [40732,"p7-3-t.png"],
        [122192,"p7-4-i.jpg"],
        [37067,"p7-4-t.png"],
        [155196,"p7-bg.jpg"],
        [33986,"p8-1-txt.png"],
        [52646,"p8-2-i.jpg"],
        [54753,"p8-2-t1.png"],
        [35996,"p8-2-t2.png"],
        [61603,"p8-3-t1.png"],
        [29093,"p8-3-t2.png"],
        [47829,"p8-4-i.jpg"],
        [58698,"p8-4-t1.png"],
        [45558,"p8-4-t2.png"],
        [74852,"p8-5-i.jpg"],
        [60270,"p8-5-t1.png"],
        [30641,"p8-5-t2.png"],
        [231302,"p8-bg1.jpg"],
        [212360,"p8-bg2.jpg"],
        [228862,"p8-bg3.jpg"],
        [190467,"p8-bg4.jpg"],
        [272499,"p8-bg5.jpg"],
        [6978,"p8-pop1.png"],
        [5803,"p8-pop3.png"],
        [6943,"p8-pop4.png"],
        [6675,"p8-pop5.png"],
        [111164,"p9-1.jpg"],
        [85914,"p9-2.jpg"],
        [20068,"p9-3.jpg"],
        [55982,"p9-4.jpg"],
        [79438,"p9-5.jpg"],
        [60891,"p9-6.jpg"],
        [64997,"p9-7.jpg"],
        [79441,"p9-8.jpg"],
        [54276,"p9-txt-1.png"],
        [8905,"p9-txt-2.png"],
        [2694,"p9-txt-3.png"],
        [70099,"p9-txt-4.png"],
        [73694,"p9-txt-5.png"],
        [70823,"p9-txt-6.png"],
        [72699,"p9-txt-7.png"],
        [41857,"p9-txt-8.png"]
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
        if(progress >0.99){
            var p = parseInt(progress*100)+'%';
            $('#progress').width(p);
            //$('#loading').remove();
            $('.p1').find('.logo img').attr('src',require('../images/p0_title.gif')+'?'+new Date().getTime());
        }else{
            var p = parseInt(progress*100)+'%';
            $('#progress').width(p);
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