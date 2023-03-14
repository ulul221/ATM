let saldo = 1000000
const input = document.getElementById('input')

alert(`Saldo anda adalah ${saldo}`)
function button() {
    if (input.value == "") {
        alert("Nominal Tidak Boleh Kosong")
    } else if (input.value == 0) {
        alert('Nominal Tidak Boleh Bernilai 0 Atau Minus')
    } else if (input.value > saldo) {
        alert('Saldo Kurang')
    } else if (input.value % 50000 == 0) {
        const konfirmasi = confirm(`Anda Mengambil Uang Sebesar ${input.value}, Sisa Saldo Anda Adalah ${saldo - input.value} `)
        if (konfirmasi == true) {
            location.href = "keluar.html"
        }
    } else {
        alert('Nominal Tidak Sesuai ')
    } 
}


// function button() {
//     if (input.value < saldo) {
//         if (input.value == "") {
//             alert('Nominal tidak boleh kosong')
//         }else if (input.value % 50000 == 0) {
//             const konfirmasi = confirm(`Anda akan menarik sebesar ${input.value}?`)
//             if (konfirmasi) {
//                 location.href = '/html/keluar.html'
//                 alert(`Sisa saldo anda adalah ${saldo - input.value}`)
//             }
//         }else(
//             alert('Nominal tidak sesuai')
//             )
//     }else(
//         alert('Saldo tidak cukup')
//     )
// }