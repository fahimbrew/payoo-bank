// console.log('I am here')
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    const pinNumberInput = document.getElementById('pin-input').value;
    // console.log(addMoneyInput, pinNumberInput);
    if (pinNumberInput === '1234') {
        // console.log('money is added to your account');
        const balanceDiv = document.getElementById('account-balance').innerText;
        let balanceNumber = Number(balanceDiv);
        const amountNumber = Number(addMoneyInput);
        const newBalance = balanceNumber + amountNumber;
        document.getElementById('account-balance').innerText = newBalance;



    }
    else {
        alert('Failed to add money! please try again later');
    }

})