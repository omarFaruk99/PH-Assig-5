// function-1:get or set the value of form elements such as <input>, <textarea>, and <select>.
function inputValueField(id) {
    const inputFiledValue = document.getElementById(id).value
    const inputNumberValue = parseFloat(inputFiledValue);
    return inputNumberValue;
}



// function-2: get or set the text content of an HTML element,  like <div>, <span>, or <p>.
function inputTextField(id) {
    const inputInnerText = document.getElementById(id).innerText;
    const inputInnerTextNumber = parseFloat(inputInnerText);
    return inputInnerTextNumber;
}


// function-3: validate 'donate-amount' && 'bank-account-balance'
function validateDonateAndBankAccount(bankBalance, donateAmount, id) {
    if (bankBalance >= 0 && donateAmount >= 0 && (bankBalance - donateAmount) >= 0) {
        // subtract current donate amount from 'bank account balance' and update 'bank-acc balance'
        const updatedBankAccountBalance = bankBalance - donateAmount;
        document.getElementById("bank-acc-balance").innerText = updatedBankAccountBalance;

        // call function and get 'place's available balance' after 'Donate'
        const firstPlaceAvalableBalNum = inputTextField(id);


        // update 'place's Donate amount'
        const newAvailableBalance = donateAmount + firstPlaceAvalableBalNum;
        document.getElementById(id).innerText = newAvailableBalance;
    } else {
        alert("Insufficient Account Balance!");
    }
}



