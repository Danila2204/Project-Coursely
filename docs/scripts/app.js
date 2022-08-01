const comments = document.querySelectorAll(".section-praise__content-comments-comment");
const menuItems = document.querySelectorAll(".section-footer__menu-list-item");

function init() {
    comments[0].style.height = `${340 - 64.22}px`;
    comments[1].style.height = `${268 - 64.22}px`;
    comments[2].style.height = `${292 - 64.22}px`;
    comments[3].style.height = `${292 - 64.22}px`;
    comments[4].style.height = `${340 - 64.22}px`;
    comments[5].style.height = `${268 - 64.22}px`;
    
    comments[4].style.marginRight = 0;
    comments[5].style.marginRight = 0;

    comments[1].style.marginBottom = "128px";
    comments[3].style.marginBottom = "128px";
    comments[5].style.marginBottom = "128px";

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