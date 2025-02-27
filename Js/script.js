// ini untuk javascript //
console.log('succes Load external JS')


function validateForm() {
    const name = document.forms['message-form']['name'].value;
    const email = document.forms['message-form']['email'].value;
    const message = document.forms['message-form']['message'].value;
    
    
    // validasi nama
    if (name == ''|| message == '' || email == '') {
        alert('Tidak boleh ada yang kosong')
        return false;
    } else {
        alert('Terima kasih Bapak/Ibu' + name);
}
}

