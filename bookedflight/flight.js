


let currentUser = JSON.parse(localStorage.getItem("currentUser"))?.[0];

if (!currentUser) {
    alert("Please log in first.");
    window.location.href = "/loginandSignup/login.html";
} else {


    let savedBookings = localStorage.getItem(`searchFlight_${currentUser.email}`);

    if (!savedBookings) {
        alert("No flight booking found.");

    } else {

        let bookings = JSON.parse(savedBookings);
        let booking = bookings[bookings.length - 1];

        document.querySelector(".passengerName").innerHTML = ` ${currentUser.name} ${currentUser.name2}`
        document.querySelector(".passengerEmail").innerHTML = `${currentUser.email}`
        document.querySelector(".passengerPhone").innerHTML = `${currentUser.phone}`
        document.querySelector(".countryFrom").innerHTML = `${booking.origin}`
        document.querySelector(".countryTo").innerHTML = `${booking.destiny}`
        document.querySelector(".countryDepart").innerHTML = `${booking.depart}`
        document.querySelector(".countryArrival").innerHTML = `${booking.return}`
        
        
    }
}

let printButton = document.querySelector("#printBooking");

printButton.addEventListener("click",  ()=> {
    window.print();
});