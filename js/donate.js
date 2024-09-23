// console.log("Donate is added to html")
document.getElementById("btn-donate-firstPlace").addEventListener("click", function () {
    // get the 1st place donation amount and store 'inputNumberFirstPlace' variable
    const inputFiledFirstPlace = document.getElementById("inputField-firstPlace").value
    const inputNumberFirstPlace = parseFloat(inputFiledFirstPlace);

    // get the bank-Account available balance
    const getBankAccountBalance = document.getElementById("bank-acc-balance").innerText
    const numBankAccountBalance = parseFloat(getBankAccountBalance);
    console.log("Bank account balance: ", numBankAccountBalance);

    

    // Check validation: "donate amount"
    if (numBankAccountBalance >= 0 && inputNumberFirstPlace >= 0 && (numBankAccountBalance - inputNumberFirstPlace) >= 0) {
        // subtract current donate amount from 'bank account balance'
        const updatedBankAccountBalance = numBankAccountBalance - inputNumberFirstPlace;
        document.getElementById("bank-acc-balance").innerText = updatedBankAccountBalance.toFixed(2);


        // get already donated amount at 1st place
        const firstPlaceAvalableBalance = document.getElementById("firstPlace-avail-Dona-balance").innerText;
        const firstPlaceAvalableBalNum = parseFloat(firstPlaceAvalableBalance)
        console.log(firstPlaceAvalableBalNum, "inside validation");


        // add present donate amount + available amount and keep '
        const newAvailableBalance = inputNumberFirstPlace + firstPlaceAvalableBalNum;
        document.getElementById("firstPlace-avail-Dona-balance").innerText = newAvailableBalance;
    } else {
        alert("Insufficient Account Balance!");
    }

})