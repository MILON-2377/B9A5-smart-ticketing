
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


function seatsDisplaying(idName, innerValue){
    const display = document.getElementById(idName);

    const div = document.createElement("div");

    const p = document.createElement("p");
    p.innerText = innerValue;
    const span = document.createElement("span");
    span.classList.add("span");
    span.innerText = "Economoy";
    const span1 = document.createElement("span");
    span1.innerText = 550;

    div.appendChild(p);
    div.appendChild(span);
    div.appendChild(span1);

    display.appendChild(div);

}

function selectedSeatUpdate(idName){
    const selectedSeatNum = document.getElementById(idName);
    const innerSeatNum = selectedSeatNum.innerText;
    const seatNumber = parseInt(innerSeatNum);

    const value = seatNumber + 1;
    selectedSeatNum.innerText = value;

    return value;
}

let totalPriceValue;
function updateTotalPrice(idName){
    const total = document.getElementById(idName);
    const innerTotal = total.innerText;
    const totalPrice = parseInt(innerTotal);

    const sum = totalPrice + 550;
    total.innerText = sum;
    totalPriceValue = sum;
}

function discoutedPriceUpdate(idName, value){
    const total = document.getElementById(idName);

    const p = document.createElement("p");
    p.innerText = "Discounted";
    const span = document.createElement("span");
    span.innerText = value;

    total.appendChild(p);
    total.appendChild(span);
}

function finalGrandTotalPrice(idName, value){
    const grandTag = document.getElementById(idName);
    grandTag.innerText = value;
}


const seatContainBox = document.querySelectorAll("#seats-contain-box");
const selected = [];
let seatNumbers;
for(const item of seatContainBox){
    item.addEventListener("click", (e) => {
        if(e.target.classList[0] === "btn" && !selected.includes(e.target.innerText) && selected.length <= 3){
            e.target.classList.add("bg-[#1DD100]");
            if(selected.includes(e.target.innerText)){
               alert("You can select one seat at a time !");
            }else{
                const seatNum = selectedSeatUpdate("selected-seats-number");
                seatNumbers = seatNum;
                updatingLeftSeat("seats-left-box");
                seatsDisplaying("displaying-selected-ticket", e.target.innerText);
                updateTotalPrice("total-price");
                updateTotalPrice("grand-total");
            }
            selected.push(e.target.innerText);
        }
    })
}


function coupon(){
    const couponValue = document.getElementById("coupon-input");
    const couponButton = document.getElementById("coupon-button");
    couponValue.addEventListener("keyup", (e) => {
        const couponVal = (e.target.value).toLowerCase();
            if(seatNumbers === 4 && couponVal === "new15"){
                couponButton.removeAttribute("disabled");
                couponButton.addEventListener("click", () => {
                    couponApply();
                })
            }else if(seatNumbers === 4 && couponVal === "couple 20"){
                couponButton.removeAttribute("disabled");
                couponButton.addEventListener("click", () => {
                    couponApplyCouple();8
                })
            }else{
                alert("Please use the valid coupon code !")
            }
    })
}

function couponApply(){
    toHide("coupon-box");
    const discountedPrice = totalPriceValue * 0.15;
    const finalGrandTotal = totalPriceValue - discountedPrice;
    discoutedPriceUpdate("discount-container", discountedPrice);
    finalGrandTotalPrice("grand-total", finalGrandTotal);
}

function couponApplyCouple(){
    toHide("coupon-box");
    const discountedPrice = totalPriceValue * 0.20;
    const finalGrandTotal = totalPriceValue - discountedPrice;
    discoutedPriceUpdate("discount-container", discountedPrice);
    finalGrandTotalPrice("grand-total", finalGrandTotal);
}

coupon()
function formFillup(){
    const inputNumberArr = [];
    const nextButton = document.getElementById("next-button");
    const numberInput = document.getElementById("number-input");
    numberInput.addEventListener("keyup", (e) => {
        inputNumberArr.push(e.target.value);
        if(seatNumbers > 0 && inputNumberArr.length > 2){
            nextButton.removeAttribute("disabled");  
        }
    })

}

formFillup()

function toHide(idName){
    const hideTagName = document.getElementById(idName);
    hideTagName.classList.add("hidden");
}

function visibleSuccess(idName){
    toHide("main");
    toHide("header-container");
    toHide("footer-container")
    const successContainer = document.getElementById(idName);
    successContainer.classList.remove("hidden");
}
