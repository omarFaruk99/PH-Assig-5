// First place 'Donate Now' addEventListener
document.getElementById("btn-donate-firstPlace").addEventListener("click", function () {
    // call function & get the 1st place donation amount and store 'inputNumberFirstPlace' variable
    const inputNumberFirstPlace = inputValueField("inputField-firstPlace");


    // call the function & get the bank-Account available balance
    const numBankAccountBalance = inputTextField("bank-acc-balance");

    // Call function and validate 'donate-amount' && 'bank-account-balance'"
    validateDonateAndBankAccount(numBankAccountBalance, inputNumberFirstPlace, "firstPlace-avail-Dona-balance");

})


// Second place 'Donate Now' addEventListener
document.getElementById("btn-donate-secondPlace").addEventListener("click", function () {
    // call function & get the 2nd place donation amount and store 'inputNumberFirstPlace' variable
    const inputNumberFirstPlace = inputValueField("inputField-secondPlace");


    // call the function & get the bank-Account available balance
    const numBankAccountBalance = inputTextField("bank-acc-balance");

    // Call function and validate 'donate-amount' && 'bank-account-balance'"
    validateDonateAndBankAccount(numBankAccountBalance, inputNumberFirstPlace, "secondPlace-avail-Dona-balance");

})



// Third place 'Donate Now' addEventListener
document.getElementById("btn-donate-thirdPlace").addEventListener("click", function () {
    // call function & get the 3rd place donation amount and store 'inputNumberFirstPlace' variable
    const inputNumberFirstPlace = inputValueField("inputField-thirdPlace");


    // call the function & get the bank-Account available balance
    const numBankAccountBalance = inputTextField("bank-acc-balance");

    // Call function and validate 'donate-amount' && 'bank-account-balance'"
    validateDonateAndBankAccount(numBankAccountBalance, inputNumberFirstPlace, "thirdPlace-avail-Dona-balance");

})