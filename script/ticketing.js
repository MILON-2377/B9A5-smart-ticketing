
document.addEventListener("DOMContentLoaded", () => {
    const buyTicketButton = document.getElementById("buy-ticket");
    const targetSection = document.getElementById("seats-container");

    buyTicketButton.addEventListener("click", () => {
        targetSection.scrollIntoView("{ behavior: 'smooth' }");
    })
})

