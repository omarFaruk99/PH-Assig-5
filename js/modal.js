// // JavaScript to handle modal visibility: first
// const modal = document.getElementById('successModal');
// const openModalBtn = document.getElementById('btn-donate-firstPlace');
// const okButton = document.getElementById('okButton');

// openModalBtn.addEventListener("click",function(event){
//     event.preventDefault();
//     modal.classList.remove("hidden");
// })

// okButton.addEventListener("click",function(event){
//     event.preventDefault();
//     modal.classList.add("hidden");
// })


// ..................................................................
// JavaScript to handle modal visibility
const modal = document.getElementById('successModal');
const openFirstPlaceBtn = document.getElementById('btn-donate-firstPlace');
const openSecondPlaceBtn = document.getElementById('btn-donate-secondPlace');
const openThirdPlaceBtn = document.getElementById('btn-donate-thirdPlace');
const okButton = document.getElementById('okButton');

// Function to show modal
function showModal(event) {
//   event.preventDefault();
  modal.classList.remove('hidden');
}

// Event listeners for each button
openFirstPlaceBtn.addEventListener('click', showModal);
openSecondPlaceBtn.addEventListener('click', showModal);
openThirdPlaceBtn.addEventListener('click', showModal);

// Event listener to close the modal on clicking "OK" button
okButton.addEventListener('click', function(event) {
//   event.preventDefault();
  modal.classList.add('hidden');
});
