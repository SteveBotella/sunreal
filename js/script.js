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

        linebreak = document.createElement("br");
        let title = "Steve \"Sunreal\" Botella";
        let text = "Passionné de création de jeux vidéo, je partage mon quotidien de développeur. Je suis fan de Blueprint, mais j'aime aussi tester les derniers logiciels. J'adore le partage de connaissances et d'expériences. N'hésite pas à venir en live et à me suivre sur les réseaux.";
        addText(title, text, "", "", "imgSteve", "img/imgSteve.png");
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
            channel: "steve_sunreal"
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
    let galleryImagesUser = [
        ["img/projectLogo.png", "img/youtubeMedievalCitizenImg.png", "Medieval Citizen", "Week-end partie teste avec 12 à 16 participants, merci à tous.", "https://www.youtube.com/watch?v=cLaoQaIf7rs"],        
        ["img/projectLogo.png", "img/youtubeEpicBootcamp2023Img.png", "Epic Bootcamp 2023", "Projet d'animation crée lors du Epic Bootcamp 2023 par Epic Games et UT-HUB", "https://www.youtube.com/watch?v=09a9jQLobn8"],        
        ["img/projectLogo.png", "img/youtubeRiftRPGImg.png", "Rift RPG", "Réplication de la physic des dés", "https://www.youtube.com/watch?v=q7nU_Ulrfys"],        
        ["img/projectLogo.png", "img/youtubeGearCoreImg.png", "Gear Core", "Création d'un système de Parkour.", "https://www.youtube.com/watch?v=O8znQ1KoyZU"],        
        ["img/projectLogo.png", "img/youtubeGearCoreRaceImg.png", "Gear Core Race", "Personnalisation de son bolide", "https://www.youtube.com/watch?v=Ot98Yy7hNJ8"],        
        ["img/projectLogo.png", "img/youtubeGearCoreRaceV1Img.png", "Gear Core Race", "jeux de course multijoueur", "https://www.youtube.com/watch?v=9xvUUdEZG8g"],        
        ["img/projectLogo.png", "img/youtubeShipProjectImg.png", "Ship Project", "Essais de gameplay immersif de pilotage de vaisseaux", "https://www.youtube.com/watch?v=mQwNfoePawU"],        
        ["img/projectLogo.png", "img/youtubeAircraftImg.png", "Aircraft", "Essais de la physic 2D", "https://youtu.be/1hYl9P6sxTo"],        
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

        let title = "Ouverture du site Sunreal";
        let text = "L'aventure commence ! Première version de mon site internet. Les mises à jour seront faites chaque semaine.";
        addText(title, text, "", "", "imgSuneal", "img/imgSunreal.png");
    });

    // Marketplace
    $("#marketplace").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("marketplace");

        let title = "Marketplace";
        let text = "Liens et informations concernant mon contenu disponible à l'achat et utilisable pour tes projets.";
        addText(title, text);
    });

    // Documentations
    $("#documentations").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("documentations");

        let title = "Documentations";
        let text = "Tout le contenu disponible gratuitement, tutos, projets, replay, tips et découvertes.";
        addText(title, text);

        addGallery();
    });

    // Twitch
    $("#twitchLogo").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("twitch");

        let title = "Twitch";
        let text = "En live dev régulièrement, mais aussi analyses de jeux et événements";
        addText(title, text);

        addTwitch();
    });

    // Youtube
    $("#ytLogo").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("youtube");

        let title = "Youtube";
        let text = "Toutes les dernières vidéos sont sur ma chaîne YouTube. Retrouve les tutos, partages d'expériences, documentations et autres moments forts de Twitch.";
        link = "https://www.youtube.com/@steveunreal/featured";
        let linkName = "Youtube";
        addText(title, text, link, linkName, "imgYoutube", "img/imgYoutube.png");
    });

    // Linkedin
    $("#linkedinLogo").on("click", function () {
        clearChildren("loaded");
        requireWhenClickNav("linkedin");

        let title = "Linkedin";
        let text = "Suivez les avancements de mes projets sur LinkedIn. N'hésite pas à me demander une connexion ou à m'envoyer un message.";
        link = "https://www.linkedin.com/in/steve-botella-15a47a16a/";
        let linkName = "Linkedin";
        addText(title, text, link, linkName, "imgLinkedin", "img/imgLinkedin.png");
    });
})