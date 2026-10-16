
document.addEventListener("DOMContentLoaded", function () {

    
    const links = document.querySelectorAll('nav a, .button');

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const href = this.getAttribute("href");

            
            if (href && href.startsWith("#")) {
                const target = document.querySelector(href);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    const year = new Date().getFullYear();
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.innerHTML =
            "Copyright &copy; " + year + " My Portfolio";
    }

});
