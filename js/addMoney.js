//  recap
const addMoneyBtn = document.getElementById('btn-add-money');
const inputAmount = document.getElementById('input-add-money');
const inputPin = document.getElementById('pin-input');
const balanceDiv = document.getElementById('account-balance')
// console.log(balanceDiv);
addMoneyBtn.addEventListener('click', function (event) {
    // console.log('hiiii')
    event.preventDefault();
    const amountNumber = Number(inputAmount.value);

    const pinNumber = inputPin.value;
    // console.log(amountNumber, pinNumber);
    const balanceNumber = Number(balanceDiv.innerText);
    // console.log(balanceNumber);
    if (pinNumber === '1234') {
        // console.log('I can access');
        const newBalance = balanceNumber + amountNumber;
        // console.log(newBalance);
        balanceDiv.innerText = newBalance;
        inputAmount.value = '';
        inputPin.value = '';
    }
    else {
        alert('Invalid credentials! please try again later');
    }




})