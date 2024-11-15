function setUpAsideListeners() {
    const getHeaderHeight = () => document.querySelector("body > header").clientHeight - 5;
    const checkScreenSize = () => document.body.clientWidth > 1568;
    function autoManageAside() {
        if (checkScreenSize()) {
            if (document.body.scrollTop > getHeaderHeight() || document.documentElement.scrollTop > getHeaderHeight()) {
                document.querySelector("body > aside").classList.add("noCollapse");
            } else {
                document.querySelector("body > aside").classList.remove("noCollapse");
            }
        } else {
            document.querySelector("body > aside").classList.remove("noCollapse");
        }
    }
    function toggleAsideView() {
        const aside = document.querySelector("body > aside");
        const toggle = document.getElementById("aside-toggle");
        if (aside.classList.contains("noCollapseLocked")) {
            aside.classList.remove("noCollapseLocked");
            toggle.classList.remove("active");
            toggle.innerText = "Show Upcoming Events";
        } else {
            aside.classList.add("noCollapseLocked");
            toggle.classList.add("active");
            toggle.innerText = "Hide Upcoming Events";
        }
    }

    window.addEventListener("scroll", autoManageAside, false);
    window.addEventListener("resize", autoManageAside, false);
    document.getElementById("aside-toggle").addEventListener("click", toggleAsideView);
}

setUpAsideListeners();