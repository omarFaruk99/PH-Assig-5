
// show Transaction History
document.getElementById('trans-his-feature-btn').addEventListener('click', function () {
    // call the fucntion to show transaction history when click "trans-his-feature-btn"
    showSectionById('trans-history');


    this.classList.add('bg-lime-400', 'text-black');
    this.classList.remove('bg-gray-200', 'text-gray-800');

    document.getElementById('donation-feature-btn').classList.remove('bg-lime-400', 'text-black');
    document.getElementById('donation-feature-btn').classList.add('bg-gray-200', 'text-gray-800');
})





// show Donation
document.getElementById('donation-feature-btn').addEventListener('click', function () {

    // call the fucntion to show transaction history when click "donation-feature-btn"
    showSectionById('cards-container');


    // make the 'Donation' button active and 'History' button inactive
    this.classList.add('bg-lime-400', 'text-black');
    this.classList.remove('bg-gray-200', 'text-gray-800');

    document.getElementById('trans-his-feature-btn').classList.remove('bg-lime-400', 'text-black');
    document.getElementById('trans-his-feature-btn').classList.add('bg-gray-200', 'text-gray-800');
})



