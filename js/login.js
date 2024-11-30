// console.log("can you see me?")
document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('clicked')
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if (phoneNumber === '5' && pinNumber === '1234') {
        // console.log('you are logged in')
        window.location.href = '/home.html';
    }
    else {
        alert('Incorrect Phone Number or PIN')
    }
})