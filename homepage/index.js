

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
}
let carrier = [];
if (currentUser) {
    let savedBookings = localStorage.getItem(`searchFlight_${currentUser.email}`);

    if (savedBookings) {
        carrier = JSON.parse(savedBookings);
    }
}
formFlight.addEventListener("submit", (e) => {

    e.preventDefault();

    let inputRegex = /^[a-zA-Z]{4,}$/;
    let checkDate = new Date().getFullYear();
    let errorReveal = document.querySelector(".revealAllErrors");

    let flightDetails = {
        origin: formFlight.origin.value,
        destiny: formFlight.dest.value,
        depart: formFlight.depart.value,
        return: formFlight.return.value,
    };

    let qualifiedOrigin = inputRegex.test(flightDetails.origin);
    let qualifiedDestiny = inputRegex.test(flightDetails.destiny);

    let findDate = flightDetails.depart.indexOf("-");
    let checkmateDate = flightDetails.depart.slice(0, findDate);

    let findDateReturn = flightDetails.return.indexOf("-");
    let checkDateOfReturn = flightDetails.return.slice(0, findDateReturn);

    if (!qualifiedOrigin) {
        errorReveal.innerHTML = "Invalid Country for Origin";
        errorReveal.style.color = "red";
        return;
    }

    if (!qualifiedDestiny) {
        errorReveal.innerHTML = "Invalid Country for Destination";
        errorReveal.style.color = "red";
        return;
    }

    if (checkmateDate < checkDate) {
        errorReveal.innerHTML = "Invalid Date for Departure";
        errorReveal.style.color = "red";
        return;
    }

    if (checkDate > checkDateOfReturn) {
        errorReveal.innerHTML = "Invalid Date for Return";
        errorReveal.style.color = "red";
        return;
    }

    errorReveal.style.display = "none";
    carrier.push(flightDetails);
    localStorage.setItem(`searchFlight_${currentUser.email}`,JSON.stringify(carrier)
    );

    alert("You have successfully searched for a flight.");
});