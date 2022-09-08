const comments = document.querySelectorAll(".section-praise__content-comments-comment");
const menuItems = document.querySelectorAll(".section-footer__menu-list-item");
const bigScreenElements = document.querySelectorAll(".section-praise__content-comments-comment_big")
const smallScreenElements = document.querySelectorAll(".section-praise__content-comments-comment_small")

function init() {
    comments[0].style.height = `${340 - 64.22}px`;
    comments[1].style.height = `${268 - 64.22}px`;
    comments[2].style.height = `${292 - 64.22}px`;
    comments[3].style.height = `${292 - 64.22}px`;
    comments[4].style.height = `${340 - 64.22}px`;
    comments[5].style.height = `${268 - 64.22}px`;

    comments[4].style.marginRight = 0;
    comments[5].style.marginRight = 0;

    console.log(screen.width);
    if (screen.width >= 1060) {
        comments[1].classList.add("section-praise__content-comments-comment_small");
        comments[1].classList.remove("section-praise__content-comments-comment_big");
        comments[3].classList.add("section-praise__content-comments-comment_small");
        comments[3].classList.remove("section-praise__content-comments-comment_big");
        comments[5].classList.add("section-praise__content-comments-comment_small");
        comments[5].classList.remove("section-praise__content-comments-comment_big");
    } else {
        comments[1].classList.add("section-praise__content-comments-comment_big");
        comments[1].classList.remove("section-praise__content-comments-comment_small");
        comments[3].classList.add("section-praise__content-comments-comment_big");
        comments[3].classList.remove("section-praise__content-comments-comment_small");
        comments[5].classList.add("section-praise__content-comments-comment_big");
        comments[5].classList.remove("section-praise__content-comments-comment_small");
    }

    for (let i = 0; i < bigScreenElements.length; i++) {
        bigScreenElements[i].style.marginBottom = "128px";
    }

    for (let i = 0; i < smallScreenElements.length; i++) {
        bigScreenElements[i].style.marginBottom = "32px";
    }

    for (let i = 0; i < menuItems.length; i++) {
        switch (i) {
            case 3:
                menuItems[i].style.marginBottom = "11px";
            case 5 && 11:
                menuItems[i].style.marginBottom = 0;
            default:
                menuItems[i].style.marginBottom = "9px";
        }
    }
}

init();

document.addEventListener("resize", () => console.log("Привет"));