// Run only when document ready
$(document).ready(function () {
    clearChildren("loaded");
    window.location.href = "#home";
    if (document.body.classList.contains("home")) {
        addVideo();
    }

    // Clear the div you want
    function clearChildren(id) {
        let remove = document.getElementById(id);
        remove.innerHTML = '';
    }

    // Enable scrollbar
    $("body").css({ "overflow": "visible" })

    //Add Video
    function addVideo() {
        let loaded = document.getElementById("loaded");
        let newYTVideo = document.createElement("div");
        let newYTVideoIframe = document.createElement("iframe");

        newYTVideo.id = "headerVideo";

        newYTVideoIframe.classList.add("video");
        newYTVideoIframe.src = "https://www.youtube.com/embed/cLaoQaIf7rs?autoplay=1&mute=1";

        newYTVideo.appendChild(newYTVideoIframe);

        loaded.appendChild(newYTVideo);
    }

    // Change active page
    function requireWhenClickNav(id) {
        let link = $("nav a");
        //click handler
        let $this = $("#" + id);
        let page = $this.data("page");

        $("body").removeClass().addClass(page);
        link.removeClass("active");
        $this.addClass("active");
    }

    // --- EVENTS ---
    // Button Home

    $("#sunrealLogo").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("sunreal");
        addVideo();
    });

    $("#news").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("news");
    });

    $("#marketplace").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("marketplace");
    });

    $("#tutorials").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("tutorials");
    });

    $("#twitchLogo").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("twitch");
    });

    $("#ytLogo").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("youtube");
    });

    $("#linkedinLogo").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("linkedin");
    });
})