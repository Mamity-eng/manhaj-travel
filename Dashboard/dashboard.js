
const currentUser = JSON.parse(localStorage.getItem("currentUser"))?.[0];

let bookingItem = currentUser
    ? localStorage.getItem(`searchFlight_${currentUser.email}`)
    : null;

let realBookingItem = bookingItem ? JSON.parse(bookingItem) : [];


let profileItem = localStorage.getItem("currentUser")
let realProfileItem = JSON.parse(profileItem)
let nameProfile = document.querySelector(".profile-name")
let email = document.querySelector(".profile-email")
let dashName = document.querySelector(".see-name")

for (let index = 0; index < realProfileItem.length; index++) {
    let space = document.querySelector(".image-profile")
    let profileInput1 = realProfileItem[index].name
    let profileInput2 = realProfileItem[index].name2
    let dashEmail = realProfileItem[index].email

    let prof = profileInput1.slice(0,1)

    
    let prof2 = profileInput2.slice(0,1)

    space.innerHTML = prof + prof2
    dashName.innerHTML = " " + profileInput2
    // dashName.setAttribute("style", "display: none;")
    space.setAttribute("style", "color: white; padding: 7px 0px 0px 8px;")
    nameProfile.innerHTML = profileInput1 + " "+ profileInput2
    email.innerHTML = dashEmail
}








let dashboard = document.querySelector(".dashboard")
let flybook = document.querySelector(".flight-bookings")
flybook.setAttribute("style", "display:none")
let payee = document.querySelector(".pay")
payee.setAttribute("style", "display:none")
let dealer = document.querySelector(".tour")
dealer.setAttribute("style", "display: none")


function dashb() {
    dashboard.removeAttribute("style")
    flybook.setAttribute("style", "display:none")    
    payee.setAttribute("style", "display:none")
    dealer.setAttribute("style", "display: none")
    
}

function flightbook() {
    dashboard.setAttribute("style","display: none")
    payee.setAttribute("style", "display:none")
    dealer.setAttribute("style", "display: none")
    flybook.removeAttribute("style")
    
    
}

function payments() {
    flybook.setAttribute("style", "display:none")
    dealer.setAttribute("style", "display: none")
    dashboard.setAttribute("style","display: none")
    payee.removeAttribute("style")
    
}

function tourdeal() {
    flybook.setAttribute("style", "display:none")
    payee.setAttribute("style", "display: none")
    dashboard.setAttribute("style","display: none")
    dealer.removeAttribute("style")
}

let FirstCard = document.querySelector(".total") 
let secondCard = document.querySelector(".pending")
if (bookingItem) {
    FirstCard.innerText++
    secondCard.innerText++
} else {
    FirstCard.innerText = 0
    secondCard.innerText = 0
}


function printFlight(){
    secondCard.innerText--
}
let logOut = document.querySelector(".moveOut") 
logOut.addEventListener("click",()=>{
    localStorage.removeItem("currentUser");
    window.location.href = "/loginandSignup/login.html"
})
const emptyState = document.querySelector(".empty-state");
const bookedContent = document.querySelector("#booked-content");
document.querySelector(".total2").textContent = realBookingItem.length;
document.querySelector(".pending2").textContent = realBookingItem.length;
function displayFlightBooking() {
    // Check whether a booking exists
    if (realBookingItem.length > 0) {
        emptyState.style.display = "none";
        bookedContent.style.display = "block";

        // Display the most recently saved booking
        const booking = realBookingItem[realBookingItem.length - 1];
        for (let index = 0; index < realBookingItem.length; index++) {
    
        
        let bookingItem = realBookingItem[index];
        document.querySelector(".booking-origin").textContent =
            bookingItem.origin || "Not specified";

        document.querySelector(".booking-destination").textContent =
            bookingItem.destiny || "Not specified";

        document.querySelector(".booking-depart").textContent =
            bookingItem.depart || "Not specified";

        
    }
        

    } else {
        emptyState.style.display = "flex";
        bookedContent.style.display = "none";
    }
}

displayFlightBooking();


//weather
const apiKey = "20ccfface5b0497bbed120248260608";
let weatherInput = document.getElementById("weather");
let weatherBtn = document.getElementById("weatherBtn");
let countryName = document.getElementById("country-name");
let temperature = document.getElementById("temperature");
weatherBtn.addEventListener("click", () => {
    if (weatherInput.value === "") {
        alert("Please enter a city name.");
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${weatherInput.value}`)
        .then(response => response.json())
        .then(data => {
    
            if (data.error) {
                alert(data.error.message);
                return;
            }

            countryName.textContent = `Country: ${data.location.country}`;
            temperature.textContent = `Temperature: ${data.current.temp_c}°C`;

            })

        .catch(error => {
            console.error(error);
            alert("Something went wrong. Please try again.");
        });    
        
})

function clearWeather() {
    countryName.textContent = ``;
    temperature.textContent = ``;
    weatherInput.value = ``;
}


let realD = document.querySelector(".realDate")
let realT = document.querySelector(".realTime")
realD.innerText = `Current Date => ${new Date().toDateString()}`


let myInterval = setInterval(()=>{
            realT.innerText = `Current Time => ${new Date().toTimeString()}`
            
}, 1000)