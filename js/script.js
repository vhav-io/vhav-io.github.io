/* =====================================================
   VAIBHAV PORTFOLIO
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const body = document.body;

const navbar =
    document.querySelector(".navbar");

const menuButton =
    document.querySelector(".menu-button");

const navMenu =
    document.querySelector(".nav-menu");

const filters =
    document.querySelectorAll(".filter");

const projects =
    document.querySelectorAll(".project-card");

const copyButton =
    document.querySelector(".copy-button");

const yearElements =
    document.querySelectorAll(".year");


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

if (menuButton && navMenu) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                navMenu.classList.toggle("open");

            menuButton.classList.toggle(
                "open",
                isOpen
            );

            body.classList.toggle(
                "menu-open",
                isOpen
            );

            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation"
                    : "Open navigation"
            );

        }
    );


    /* Close menu after selecting a page */

    const links =
        navMenu.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "open"
                );

                menuButton.classList.remove(
                    "open"
                );

                body.classList.remove(
                    "menu-open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


    /* Escape closes menu */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                navMenu.classList.remove(
                    "open"
                );

                menuButton.classList.remove(
                    "open"
                );

                body.classList.remove(
                    "menu-open"
                );

            }

        }
    );

}


/* =====================================================
   NAVBAR ON SCROLL
===================================================== */

function updateNavbar() {

    if (!navbar) {
        return;
    }


    if (window.scrollY > 25) {

        navbar.classList.add(
            "scrolled"
        );

    } else {

        navbar.classList.remove(
            "scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateNavbar,
    {
        passive: true
    }
);


updateNavbar();


/* =====================================================
   PROJECT FILTERING
===================================================== */

if (filters.length > 0) {

    filters.forEach(filter => {

        filter.addEventListener(
            "click",
            () => {

                const category =
                    filter.dataset.filter;


                /* Active button */

                filters.forEach(button => {

                    button.classList.remove(
                        "active"
                    );

                });

                filter.classList.add(
                    "active"
                );


                /* Filter projects */

                projects.forEach(project => {

                    const projectCategory =
                        project.dataset.category;


                    if (
                        category === "all" ||
                        projectCategory === category
                    ) {

                        project.classList.remove(
                            "hidden"
                        );

                    } else {

                        project.classList.add(
                            "hidden"
                        );

                    }

                });

            }
        );

    });

}


/* =====================================================
   COPY EMAIL
===================================================== */

if (copyButton) {

    copyButton.addEventListener(
        "click",
        async () => {

            const email =
                "your@email.com";


            try {

                await navigator.clipboard.writeText(
                    email
                );


                copyButton.textContent =
                    "Copied";


                copyButton.classList.add(
                    "copied"
                );


                setTimeout(
                    () => {

                        copyButton.textContent =
                            "Copy email";

                        copyButton.classList.remove(
                            "copied"
                        );

                    },
                    1600
                );


            } catch (error) {

                copyButton.textContent =
                    "Copy failed";


                setTimeout(
                    () => {

                        copyButton.textContent =
                            "Copy email";

                    },
                    1600
                );

            }

        }
    );

}


/* =====================================================
   CURRENT YEAR
===================================================== */

yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});


/* =====================================================
   DARK MODE
===================================================== */

const themeButton =
    document.querySelector(".theme-button");

const themeIcon =
    document.querySelector(".theme-icon");


/* Check saved theme */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark-mode"
    );

}


/* Update button icon */

function updateThemeButton() {

    if (!themeButton || !themeIcon) {
        return;
    }


    const darkMode =
        document.body.classList.contains(
            "dark-mode"
        );


    if (darkMode) {

        themeIcon.textContent = "☀";

        themeButton.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

        themeButton.setAttribute(
            "title",
            "Switch to light mode"
        );

    } else {

        themeIcon.textContent = "☾";

        themeButton.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

        themeButton.setAttribute(
            "title",
            "Switch to dark mode"
        );

    }

}


/* Apply initial icon */

updateThemeButton();


/* Toggle theme */

if (themeButton) {

    themeButton.addEventListener(
        "click",
        () => {

            const isDark =
                document.body.classList.toggle(
                    "dark-mode"
                );


            if (isDark) {

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            } else {

                localStorage.setItem(
                    "theme",
                    "light"
                );

            }


            updateThemeButton();

        }
    );

}