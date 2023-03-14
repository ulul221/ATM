const pin = document.getElementById('pin')
const button = document.getElementById('button')

button.addEventListener("click", ()=> {
    if (pin.value == "123456") {
        location.href = "/html/penarikan.html"
    }else if (pin.value == "") {
        alert("Pin tidak boleh kosong")
    }else(
        alert('Pin yang anda masukan salah')
        )
})