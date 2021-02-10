
<script>
    $(function () {


        // doc viewer
        $('a.viewer').media({
            width: 720,
            height: 600
        });
        // Slideshow 4
        $("#front-image-slider").responsiveSlides({
            auto: true,
            pager: false,
            nav: true,
            speed: 2000,
            maxwidth: 960,
            namespace: "callbacks"
        });
        $("#right-content a").click(function () {
            var url = $(this).attr('href');
            if (isExternal(url) && url != 'javascript:;') {
                openInNewTab(url);
                return false;
            }
        });
    });

    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    function isExternal(url) {
        var match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
        if (typeof match[1] === "string" && match[1].length > 0 && match[1].toLowerCase() !== location.protocol) return true;
        if (typeof match[2] === "string" && match[2].length > 0 && match[2].replace(new RegExp(":(" + {
                "http:": 80,
                "https:": 443
            }[location.protocol] + ")?$"), "") !== location.host) return true;
        return false;
    }
</script>
