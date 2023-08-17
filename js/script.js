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
            addButtonLink(link, linkName, textArea);
        }
    }

    // Button link
    function addButtonLink(btnLink, btnTitle, slot) {
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

    // Doc Card
    function addDocCard(logo, img, title, text, link, slot) {
        let docCardParent = document.createElement("div");
        let docCard = document.createElement("div");
        let docCardAHref = document.createElement("a");
        let docCardLogo = document.createElement("div");        
        let docCardCircle1 = document.createElement("span");
        let docCardCircle2 = document.createElement("span");
        let docCardCircle3 = document.createElement("span");
        let docCardCircle4 = document.createElement("span");
        let docCardCircle5 = document.createElement("span");        
        let docCardImgLogo = document.createElement("img");        
        let docCardGlass = document.createElement("div");
        let docCardContent = document.createElement("div");
        let docCardTitle = document.createElement("span");
        let docCardText = document.createElement("span");
        let docCardBottom = document.createElement("div");
        let docCardViewMore = document.createElement("div");
        let docCardViewMoreButton = document.createElement("button");
        let docCardImgArrow = document.createElement("img");
        let docCardContentimg = document.createElement("img");
        let docCardContentext = document.createElement("span");

        slot.appendChild(docCardParent);
        docCardParent.appendChild(docCardAHref);
        docCardAHref.appendChild(docCard);
        docCard.appendChild(docCardContent);
        docCard.appendChild(docCardLogo);
        docCardLogo.appendChild(docCardCircle1);
        docCardLogo.appendChild(docCardCircle2);
        docCardLogo.appendChild(docCardCircle3);
        docCardLogo.appendChild(docCardCircle4);
        docCardLogo.appendChild(docCardCircle5);
        docCardCircle5.appendChild(docCardImgLogo);
        docCard.appendChild(docCardGlass);        
        docCardContent.appendChild(docCardTitle);
        docCardContent.appendChild(docCardText);
        docCardText.appendChild(docCardContentimg);
        docCardText.appendChild(docCardContentext);
        docCard.appendChild(docCardBottom);
        docCardBottom.appendChild(docCardViewMore);
        docCardViewMore.appendChild(docCardViewMoreButton);
        docCardViewMore.appendChild(docCardImgArrow);

        docCardParent.classList.add("docCardParent");

        docCard.classList.add("docCard");
        docCardAHref.href = link;
        docCardAHref.target = "_blank";

        docCardLogo.classList.add("docCardLogo");
        docCardCircle1.classList.add("docCardCircle");
        docCardCircle1.classList.add("docCardCircle1");
        docCardCircle2.classList.add("docCardCircle");
        docCardCircle2.classList.add("docCardCircle2");
        docCardCircle3.classList.add("docCardCircle");
        docCardCircle3.classList.add("docCardCircle3");
        docCardCircle4.classList.add("docCardCircle");
        docCardCircle4.classList.add("docCardCircle4");
        docCardCircle5.classList.add("docCardCircle");
        docCardCircle5.classList.add("docCardCircle5");


        // Logo
        docCardImgLogo.classList.add("docCardImgLogo");
        docCardImgLogo.src = logo;

        docCardGlass.classList.add("docCardGlass");
        docCardContent.classList.add("docCardContent");

        // Title
        docCardTitle.classList.add("docCardTitle");
        docCardTitle.textContent = title;

        // Text & Img

        docCardContentimg.classList.add("docCardContentimg");
        docCardContentimg.src = img;
        docCardText.classList.add("docCardText");
        docCardContentext.textContent = text;

        docCardBottom.classList.add("docCardBottom");
        docCardViewMore.classList.add("docCardViewMore");

        docCardViewMoreButton.classList.add("docCardViewMoreButton");
        docCardViewMoreButton.textContent = "View more";

        docCardImgArrow.classList.add("docCardImgArrow");
        docCardImgArrow.src = "img/downarrow.png";
    }

    // GALLERY
    // Create an array of all images we want
    let isGalleryColumn = false;
    let galleryImages =
        [
        ];
    let galleryImagesUser = [
        ["img/UELogo.png", "img/youtube.png", "Epic Bootcamp 2023", "Create, sahre et partage ta vie de dev web alors que tu veux faire du UE !!!", "https://youtu.be/hFCjGiawJi4"],        
        ["img/UELogo.png", "img/youtube.png", "Epic Bootcamp 2023", "Create, sahre et partage ta vie de dev web alors que tu veux faire du UE !!!", "https://youtu.be/hFCjGiawJi4"],        
        ["img/UELogo.png", "img/youtube.png", "Epic Bootcamp 2023", "Create, sahre et partage ta vie de dev web alors que tu veux faire du UE !!!", "https://youtu.be/hFCjGiawJi4"],        
        ["img/UELogo.png", "img/youtube.png", "Epic Bootcamp 2023", "Create, sahre et partage ta vie de dev web alors que tu veux faire du UE !!!", "https://youtu.be/hFCjGiawJi4"],        
        ["img/UELogo.png", "img/youtube.png", "Epic Bootcamp 2023", "Create, sahre et partage ta vie de dev web alors que tu veux faire du UE !!!", "https://youtu.be/hFCjGiawJi4"],        
        ["img/UELogo.png", "img/youtube.png", "Epic Bootcamp 2023", "Create, sahre et partage ta vie de dev web alors que tu veux faire du UE !!!", "https://youtu.be/hFCjGiawJi4"],        
        ["img/UELogo.png", "img/youtube.png", "Epic Bootcamp 2023", "Create, sahre et partage ta vie de dev web alors que tu veux faire du UE !!!", "https://youtu.be/hFCjGiawJi4"],        
    ];

    // Add all images (from array) to the div
    function addGallery() {
        let mainGallery = document.createElement("div");
        mainGallery.setAttribute("class", "mainGallery");
        $("#loaded").append(mainGallery);

        galleryIndex = 0;

        for (galleryIndex; galleryIndex < galleryImagesUser.length; galleryIndex++) {
            let divImageUser = document.createElement("div");

            addDocCard(galleryImagesUser[galleryIndex][0],
                galleryImagesUser[galleryIndex][1],
                galleryImagesUser[galleryIndex][2],
                galleryImagesUser[galleryIndex][3],
                galleryImagesUser[galleryIndex][4],
                divImageUser);

            divImageUser.setAttribute("class", "galleryImageDivUser");
            divImageUser.setAttribute("id", "galleryImageDivUser" + galleryIndex);

           
            $(".mainGallery").append(divImageUser);
        };
    };

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

        addGallery();
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