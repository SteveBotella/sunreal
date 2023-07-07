// Run only when document ready
$(document).ready(function () {

    // Trigger on refresh/first visit
    clearChildren("loaded");
    window.location.href = "#home";
    if (document.body.classList.contains("home")) {

        let link = "https://www.youtube.com/embed/cLaoQaIf7rs?autoplay=1&mute=1";
        addVideo(link);
    }

    // Clear the div you want
    function clearChildren(id) {
        let remove = document.getElementById(id);
        remove.innerHTML = '';
    }

    // Enable scrollbar
    $("body").css({ "overflow": "visible" })

    //Add Video
    function addVideo(link) {
        let loaded = document.getElementById("loaded");
        let newYTVideo = document.createElement("div");
        let newYTVideoIframe = document.createElement("iframe");

        newYTVideo.id = "headerVideo";

        newYTVideoIframe.classList.add("video");
        newYTVideoIframe.src = link;
        newYTVideoIframe.frameBorder = 0;

        newYTVideo.appendChild(newYTVideoIframe);

        loaded.appendChild(newYTVideo);
    }

    // Add Twitch
    function addTwitch() {
        let loaded = document.getElementById("loaded");
        let newTwitchVideo = document.createElement("div");

        newTwitchVideo.id = "twitch-embed";
        
        loaded.appendChild(newTwitchVideo);

        new Twitch.Embed("twitch-embed", {
            channel: "steve_ue"
        });

        let iframe = document.getElementById("twitch-embed").firstElementChild;
        iframe.classList.add("video");
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

    // Buttons

    // Home
    $("#sunrealLogo").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("sunreal");

        let link = "https://www.youtube.com/embed/cLaoQaIf7rs?autoplay=1&mute=1";
        addVideo(link);
    });

    // News
    $("#news").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("news");
    });

    // Marketplace
    $("#marketplace").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("marketplace");
    });

    // Tutorials
    $("#tutorials").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("tutorials");
    });

    // Twitch
    $("#twitchLogo").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("twitch");
        addTwitch();
    });

    // Youtube
    $("#ytLogo").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("youtube");
    });

    // Linkedin
    $("#linkedinLogo").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("linkedin");
    });
})