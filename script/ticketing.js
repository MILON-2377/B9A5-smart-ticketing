
document.addEventListener("DOMContentLoaded", () => {
    const buyTicketButton = document.getElementById("buy-ticket");
    const targetSection = document.getElementById("seats-container");

    buyTicketButton.addEventListener("click", () => {
        targetSection.scrollIntoView("{ behavior: 'smooth' }");
    })
   
})

function updatingLeftSeat(idName){
    const avaibleSeatNumber = document.getElementById(idName);
    const seatNumber = avaibleSeatNumber.innerText;
    const avaibleNumber = parseInt(seatNumber);

    const leftSeatNumber = avaibleNumber - 1;
    avaibleSeatNumber.innerText = leftSeatNumber;
}



function updateSeatNumber(value){

}

const seatContainBox = document.querySelectorAll("#seats-contain-box");
for(const item of seatContainBox){
    item.addEventListener("click", (e) => {
        if(e.target.classList[0] === "btn"){
            e.target.classList.add("bg-[#1DD100]");
            updatingLeftSeat("seats-left-box");
        }
    })
}

