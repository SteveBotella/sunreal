// Run only when document ready
$(document).ready(function () {

    // Trigger on refresh/first visit
    clearChildren("loaded");
    window.location.href = "#home";
    if (document.body.classList.contains("home")) {
        firstVisit();
    }

    // Clear the div you want
    function clearChildren(id) {
        let remove = document.getElementById(id);
        remove.innerHTML = '';
    }

    // Enable scrollbar
    $("body").css({ "overflow": "visible" })

    // First visit
    function firstVisit() {
        clearChildren("loaded");
        requireWhenClickNav("sunreal");

        let link = "https://www.youtube.com/embed/cLaoQaIf7rs?autoplay=1&mute=1";
        addVideo(link);

        link = "https://www.youtube.com/embed/09a9jQLobn8?autoplay=1&mute=1";
        addVideo(link);

        linebreak = document.createElement("br");
        let title = "truc";
        let text = "machin, chose et encore.";
        link = "https://youtu.be/BwBVEB3jGLs?list=PLTnzHtXwzO_Ip-NU4wPLXS6ooMOVePU9n";
        let linkName = "Rosalia";
        addText(title, text, link, linkName, "imgTruc", "img/SunrealLogo.png");
    }

    // Add Img
    function addImg(imgName, imgSrc, slot) {
        let img = document.createElement("img");

        img.classList.add("textImg");
        img.id = imgName;
        img.src = imgSrc;

        slot.appendChild(img)
    }

    // Add Video
    function addVideo(link) {
        let loaded = document.getElementById("loaded");
        let newYTVideo = document.createElement("div");
        let newYTVideoIframe = document.createElement("iframe");

        newYTVideo.className = "headerVideo";

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

    // Add text with optional title & link
    function addText(title, text, link = "", linkName = "Lien", imgName = "", imgSrc = "") {
        let loaded = document.getElementById("loaded");
        let textArea = document.createElement("div");
        let titleElement = document.createElement("h2");
        let textElement = document.createElement("p");

        loaded.appendChild(textArea);
        textArea.appendChild(titleElement);
        textArea.appendChild(textElement);
        textArea.appendChild(textElement);

        textArea.classList.add("textarea");

        titleElement.textContent += title.toUpperCase();
        textElement.textContent += text;

        if (imgName !== "" || imgSrc !== "") {
            addImg(imgName, imgSrc, textArea);
        }

        if (link !== "") {
            buttonLink(link, linkName, textArea);
        }
    }

    // Button link
    function buttonLink(btnLink, btnTitle, slot) {
        let divbtnconteiner = document.createElement("div");
        let abtncontent = document.createElement("a");
        let spanbtntitle = document.createElement("span");
        let spaniconarrow = document.createElement("span");
        let img = document.createElement("img");

        slot.appendChild(divbtnconteiner);
        divbtnconteiner.appendChild(abtncontent);
        abtncontent.appendChild(spanbtntitle);
        abtncontent.appendChild(spaniconarrow);
        spaniconarrow.appendChild(img);

        divbtnconteiner.classList.add("btn-conteiner");
        abtncontent.classList.add("btn-content");
        abtncontent.href = btnLink;
        abtncontent.target = "_blank";
        spanbtntitle.classList.add("btn-title");
        spanbtntitle.textContent = btnTitle;
        img.classList.add("btnarrow");
        img.src = "img/right-arrow.png";
    }

    // --- EVENTS ---

    // Buttons

    // Home
    $(".sunrealLogo").on("click", function () {
        document.location.href = "#home";
        firstVisit();
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

    // Documentations
    $("#documentations").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("documentations");
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