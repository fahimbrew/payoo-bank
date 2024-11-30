// console.log('I am here')
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    const pinNumberInput = document.getElementById('pin-input').value;
    console.log(addMoneyInput, pinNumberInput);

})