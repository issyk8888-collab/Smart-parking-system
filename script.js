// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBocSCHnLEGScbZZn5csJ7eJn91oxinRz4",
  authDomain: "reservation-76e09.firebaseapp.com",
  databaseURL: "https://reservation-76e09-default-rtdb.firebaseio.com",
  projectId: "reservation-76e09",
  storageBucket: "reservation-76e09.firebasestorage.app",
  messagingSenderId: "302202682849",
  appId: "1:302202682849:web:7e3f6895dc1bbc1e11e6a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = firebase.database();
const reservationsRef = database.ref('reservations');

const parkingContainer = document.getElementById('container');
const totalParkingSpots = 50;
const selectedSpots = [];

const parkingSelect = document.getElementById("parking");
const timeSelect = document.getElementById("time");
const dateSelect = document.getElementById("date");
const locationSelect = document.getElementById("location");
const parkingPrice = 55;

function makeReservation() {
    container.innerHTML = "";
    selectedSpots.length = 0;
    for (let i = 1; i <= totalParkingSpots; i++) {
        const reservation = document.createElement("button");
        reservation.classList.add("spot");
        reservation.textContent = i;
        reservation.addEventListener("click", handleReservationClick);
        container.appendChild(reservation);
    }
  };
function showBill() {
    if (selectedSpots.length === 0) {
        alert("Select only one spot.");
        return;
    }
    const total = selectedSpots.length * parkingPrice;
    const parking = parkingSelect.value;
    const time = timeSelect.value;
    const date = dateSelect.value;
    const location = locationSelect.value;
    document.getElementById("bill-receipt").innerHTML = `
    <i>Parking</i> - ${parking}<br>
    <i>Time</i> - ${time}<br>
    <i>Date</i> - ${date}<br>
    <i>Location</i> - ${location}<br>
   <strong><i>Parking</i></strong> - $${total}
   `;
   document.getElementById("overlay").style.display = "block";
   document.getElementById("bill-receipt").style.display = "block";
};
locationSelect.addEventListener("change", () => {
    makeReservation();
    showBill();
});
timeSelect.addEventListener("change", () => {
    makeReservation();
    showBill();
});
dateSelect.addEventListener("change", () => {
    makeReservation();
    showBill();
});
parkingSelect.addEventListener("change", () => {
    makeReservation();
    showBill();
});
makeReservation();
showBill();