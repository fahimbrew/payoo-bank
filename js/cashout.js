// console.log('cashout file connected')
document.getElementById('btn-cash-out-money').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('clicked')
    const cashOut = document.getElementById('input-cash-out-money').value;
    const pinNumber = document.getElementById('pin-input-cash-out').value;
    // console.log(cashOut, pinNumber);
    if (pinNumber === '1234') {
        // console.log('money is reducing');
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = Number(balance);
        const cashOutNumber = Number(cashOut);
        const newBalance = balanceNumber - cashOutNumber;
        document.getElementById('account-balance').innerText = newBalance;
        document.getElementById('input-cash-out-money').value = '';
        document.getElementById('pin-input-cash-out').value = '';
    }
    else {
        alert('Invalid passcode! please enter the correct pin!')
    }
})