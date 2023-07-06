// Run only when document ready
$(document).ready(function () {
    // Enable scrollbar
    $("body").css({ "overflow": "visible" })

    let link = $("nav a");
    //click handler
    link.on("click", function () {
        var $this = $(this);
        var page = $this.data("page");

        $("body").removeClass().addClass(page);
        link.removeClass("active");
        $this.addClass("active");
    });

    // Clear the div you want
    function clearChildren(id) {
        let remove = document.getElementById(id);
        remove.innerHTML = '';
    }

    // --- EVENTS ---
    // Button Home

    $("#sunrealLogo").on("click", function () {
        clearChildren("loaded");
        //Add Video
        let newYTVideo = document.createElement("div");
        let newYTVideoIframe = document.createElement("iframe");

        newYTVideo.id = "headerVideo";

        newYTVideoIframe.classList.add("video");
        newYTVideoIframe.src = "https://www.youtube.com/embed/cLaoQaIf7rs?mute=1";

        newYTVideo.appendChild(newYTVideoIframe);

        loaded.appendChild(newYTVideo);
    });
})