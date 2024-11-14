window.addEventListener("scroll", () => {
    function getHeaderHeight() {
        return document.querySelector("body > header").clientHeight - 5;
    }

    if (document.body.scrollTop > getHeaderHeight() || document.documentElement.scrollTop > getHeaderHeight()) {
        document.querySelector("body > nav").classList.add("noHeader");
    } else {
        document.querySelector("body > nav").classList.remove("noHeader");
    }
}, false);