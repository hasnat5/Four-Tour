function navbar() {

    const collapse_navbar = document.querySelector(".navbar-collapse")

    window.onclick = e => {
        if (e.target != collapse_navbar && collapse_navbar.classList.contains("show")) {

            collapse_navbar.classList.remove("show")

        }
    }
}