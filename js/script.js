// Run only when document ready
$(document).ready(function () {
    $(function () {
        var link = $("nav a");
        var linkimg = $("nav img");
        //click handler
        link.on("click", function () {
            var $this = $(this);
            var page = $this.data("page");

            $("body").removeClass().addClass(page);
            linkimg.removeClass("active");
            link.removeClass("active");
            $this.addClass("active");
        })

        linkimg.on("click", function () {
            var $this = $(this);
            var page = $this.data("page");

            $("body").removeClass().addClass(page);
            linkimg.removeClass("active");
            link.removeClass("active");
            $this.addClass("active");
        })
    });
})