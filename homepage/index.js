

let signupBtn = document.querySelector(".signup")

function signUp() {
    window.location.href = "/loginandSignup/signup.html"
}


//SCROLL ACTION
let head = document.querySelector("header")
let webLogo = document.querySelector(".weblogo")
window.addEventListener("scroll",()=>{

    let allBlack = document.querySelectorAll(".change")
    let signButton = document.querySelector(".signup")
    if (window.scrollY > 100) {
        head.removeAttribute("style")
        webLogo.setAttribute("src","/homepage/images/imagelogo.png")
        head.classList.add("floatAnim")
        allBlack.forEach((param)=>{
            param.setAttribute("style","color: black;")
        })
        signButton.setAttribute("style","background-color: rgb(28, 25, 77); color: white;")
    } else {
        webLogo.setAttribute("src","/homepage/images/white logo.png")
        head.setAttribute("style","background: linear-gradient(135deg, #010c27 0%, #021038 55%, #02133d 100%);")
        head.classList.remove("floatAnim")
        allBlack.forEach((param)=>{
            param.setAttribute("style","color: white;")
        })
        signButton.removeAttribute("style")
    }
})

//IMAGE INTERVAL
let container = document.querySelector(".image-interval")
let changeImg = document.querySelector(".changing-image")
for (let index = 0; index < 3; index++) {
    setInterval(()=>{
        changeImg.setAttribute("src","/homepage/images/aeroplane.png")
    
    },2000)
    
    setInterval(()=>{
        changeImg.setAttribute("src","/homepage/images/houseonwater.png")
    
    },5000)
    
}

//BOOK FLIGHT
let formFlight = document.querySelector("#searchFlight");
let currentUser = JSON.parse(localStorage.getItem("currentUser"))?.[0];
if (!currentUser) {
    alert("Please log in first.");
    window.location.href = "/loginandSignup/signup.html";
}
let carrier = [];

if (currentUser) {
    let savedBookings = localStorage.getItem(
        `searchFlight_${currentUser.email}`
    );

    try {
        carrier = savedBookings ? JSON.parse(savedBookings) : [];

        if (!Array.isArray(carrier)) {
            carrier = [];
        }
    } catch (error) {
        carrier = [];
        console.error("Could not read saved bookings:", error);
    }
}

// Get today's date in YYYY-MM-DD format
function getToday() {
    let today = new Date();

    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, "0");
    let day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

let departureInput = formFlight.depart;
let returnInput = formFlight.return;

// Prevent selecting dates in the past
departureInput.min = getToday();
returnInput.min = getToday();

// Update the minimum return date when departure changes
departureInput.addEventListener("change", () => {
    returnInput.min = departureInput.value || getToday();

    // Clear return date if it is before the new departure date
    if (
        returnInput.value &&
        returnInput.value < departureInput.value
    ) {
        returnInput.value = "";
    }
});
formFlight.addEventListener("submit", (e) => {

    e.preventDefault();
    let errorReveal = document.querySelector(".revealAllErrors");

if (!errorReveal) {
    console.error("Error message element was not found.");
    return;
}
    let inputRegex = /^[a-zA-Z ]{2,}$/;
    

    let flightDetails = {
        origin: formFlight.origin.value,
        destiny: formFlight.dest.value,
        depart: formFlight.depart.value,
        return: formFlight.return.value,
    };

    let qualifiedOrigin = inputRegex.test(flightDetails.origin);
    let qualifiedDestiny = inputRegex.test(flightDetails.destiny);

    if (!qualifiedOrigin) {
    errorReveal.style.display = "block";
    errorReveal.innerHTML = "Invalid Country for Origin";
    errorReveal.style.color = "red";
    return;
}

if (!qualifiedDestiny) {
    errorReveal.style.display = "block";
    errorReveal.innerHTML = "Invalid Country for Destination";
    errorReveal.style.color = "red";
    return;
}
    // Check that both dates have been selected
    if (!flightDetails.depart || !flightDetails.return) {
        errorReveal.style.display = "block";
        errorReveal.innerHTML =
            "Please select both departure and return dates.";
        errorReveal.style.color = "red";
        return;
    }

    // Check departure date
    if (flightDetails.depart < getToday()) {
        errorReveal.style.display = "block";
        errorReveal.innerHTML =
            "Departure date cannot be in the past.";
        errorReveal.style.color = "red";
        return;
    }

    // Check return date
    if (flightDetails.return < getToday()) {
        errorReveal.style.display = "block";
        errorReveal.innerHTML =
            "Return date cannot be in the past.";
        errorReveal.style.color = "red";
        return;
    }

    // Return date must not be before departure
    if (flightDetails.return < flightDetails.depart) {
        errorReveal.style.display = "block";
        errorReveal.innerHTML =
            "Return date cannot be before departure date.";
        errorReveal.style.color = "red";
        return;
    }

    // All validations passed
    errorReveal.style.display = "none";

    carrier.push(flightDetails);

    localStorage.setItem(
        `searchFlight_${currentUser.email}`,
        JSON.stringify(carrier)
    );

    alert("You have successfully searched for a flight.");

});