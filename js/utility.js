// function-1:get or set the value of form elements such as <input>, <textarea>, and <select>.
function inputValueField(id) {
    const inputFiledValue = document.getElementById(id).value.trim();
    // check valid donate-amount
    const isValidDonateAmount = /^\d+(\.\d+)?$/.test(inputFiledValue) && parseFloat(inputFiledValue) > 0;
    if (!isValidDonateAmount) {
        alert("Enter valid Amount")
        return null;
    }
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
function validateDonateAndBankAccount(bankBalance, donateAmount, id, place) {
    if (bankBalance >= 0 && donateAmount >= 0 && (bankBalance - donateAmount) >= 0) {
        // subtract current donate amount from 'bank account balance' and update 'bank-acc balance'
        const updatedBankAccountBalance = bankBalance - donateAmount;
        document.getElementById("bank-acc-balance").innerText = updatedBankAccountBalance;

        // call function and get 'place's available balance' after 'Donate'
        const firstPlaceAvalableBalNum = inputTextField(id);


        // update 'place's Donate amount'
        const newAvailableBalance = donateAmount + firstPlaceAvalableBalNum;
        document.getElementById(id).innerText = newAvailableBalance;

       

        // <=.......................................................................................=>

        // Insert data into transaction history section
        const p = document.createElement('p');

        // Apply styles for the container
        p.style.border = "1px solid #ddd"; // Light grey border
        p.style.borderRadius = "12px"; // Rounded corners
        p.style.padding = "15px"; // Padding inside the box
        p.style.marginBottom = "10px"; // Space between elements
        p.style.width = "90%"; // Adjust width as needed

        // Create a span for the main message with bold and large text
        const mainMessage = document.createElement('span');
        mainMessage.style.fontWeight = "bold"; // Make text bold
        mainMessage.style.fontSize = "18px"; // Make text large
        mainMessage.innerText = `${newAvailableBalance} taka has been donated to ${place}.`;

        // Create a new line and span for the date, time, and local time
        const dateInfo = document.createElement('span');
        dateInfo.style.fontSize = "14px"; // Regular size
        dateInfo.style.display = "block"; // Display on a new line

        // Get current date and time
        const currentDate = new Date();
        const date = currentDate.toLocaleDateString(); // Format: MM/DD/YYYY
        const time = currentDate.toLocaleTimeString(); // Format: HH:MM:SS AM/PM
        const localTime = currentDate.toString(); // Full local timestamp

        // Set the text for the date information
        dateInfo.innerText = `Date: ${date} | Time: ${time} | Local Time: ${localTime}`;

        // Append the main message and date info to the paragraph
        p.appendChild(mainMessage);
        p.appendChild(dateInfo);

        // Append the styled paragraph to the history container
        document.getElementById('history-container').appendChild(p);



    } else {
        alert("Insufficient Account Balance!");
        document.getElementById("successModal").classList.add('hidden');
    }
}


// <=------------------------------------------------------------------------------------=>

// function-4: show section by Id when feature button clicked
function showSectionById(id) {
    // at first hidden all featurs button section
    document.getElementById('cards-container').classList.add('hidden');
    document.getElementById('trans-history').classList.add('hidden');

    // now unhide clicked features-btn
    document.getElementById(id).classList.remove('hidden');

}



