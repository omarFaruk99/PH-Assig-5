// First place 'Donate Now' addEventListener
document.getElementById("btn-donate-firstPlace").addEventListener("click", function () {
    // call function & get the 1st place donation amount and store 'inputNumberFirstPlace' variable
    const inputNumberFirstPlace = inputValueField("inputField-firstPlace");

    if (!inputNumberFirstPlace) {
        document.getElementById("successModal").classList.add("hidden");
        return;
    }

    // call the function & get the bank-Account available balance
    const numBankAccountBalance = inputTextField("bank-acc-balance");

    // Call function and validate 'donate-amount' && 'bank-account-balance'"
    validateDonateAndBankAccount(numBankAccountBalance, inputNumberFirstPlace, "firstPlace-avail-Dona-balance", 'Noakhali');

})


// Second place 'Donate Now' addEventListener
document.getElementById("btn-donate-secondPlace").addEventListener("click", function () {
    // call function & get the 2nd place donation amount and store 'inputNumberFirstPlace' variable
    const inputNumberSecondPlace = inputValueField("inputField-secondPlace");
    if (!inputNumberSecondPlace) {
        document.getElementById("successModal").classList.add("hidden");
        return;
    }


    // call the function & get the bank-Account available balance
    const numBankAccountBalance = inputTextField("bank-acc-balance");

    // Call function and validate 'donate-amount' && 'bank-account-balance'"
    validateDonateAndBankAccount(numBankAccountBalance, inputNumberSecondPlace, "secondPlace-avail-Dona-balance",'Feni');

})



// Third place 'Donate Now' addEventListener
document.getElementById("btn-donate-thirdPlace").addEventListener("click", function () {
    // call function & get the 3rd place donation amount and store 'inputNumberFirstPlace' variable
    const inputNumberThirdPlace = inputValueField("inputField-thirdPlace");
    if (!inputNumberThirdPlace) {
        document.getElementById("successModal").classList.add("hidden");
        return;
    }


    // call the function & get the bank-Account available balance
    const numBankAccountBalance = inputTextField("bank-acc-balance");

    // Call function and validate 'donate-amount' && 'bank-account-balance'"
    validateDonateAndBankAccount(numBankAccountBalance, inputNumberThirdPlace, "thirdPlace-avail-Dona-balance", 'Quota Movement');

})